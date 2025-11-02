// app/news/[slug]/page.tsx
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableTextBlock } from "sanity"; // ✅ Added proper type

// ✅ Replace with your Sanity client import
import { client } from "@/sanity/lib/client";

export const revalidate = 60;

type NewsItem = {
  _id: string;
  title: string;
  body: PortableTextBlock[]; // ✅ Replaced 'any' with proper type
  slug: { current: string };
  _createdAt: string;
  mainImage?: {
    asset?: { url: string };
    alt?: string;
  };
};

// ✅ 'params' is a plain object, not a Promise
export default async function NewsArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const news = await getNews(params.slug);

  if (!news) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* ✅ Hero Image */}
      {news.mainImage?.asset?.url && (
        <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-8">
          <Image
            src={news.mainImage.asset.url}
            alt={news.mainImage.alt || news.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* ✅ Title & Date */}
      <h1 className="text-3xl font-bold text-gray-900">{news.title}</h1>
      <p className="text-gray-500 text-sm mt-2">
        {new Date(news._createdAt).toLocaleDateString()}
      </p>

      {/* ✅ Body */}
      <div className="mt-6 prose prose-lg prose-blue max-w-none">
        <PortableText value={news.body} />
      </div>
    </article>
  );
}

// ✅ Keep getNews below
async function getNews(slug: string): Promise<NewsItem | null> {
  const query = `*[_type == "news" && slug.current == $slug][0]{
    _id,
    title,
    body,
    slug,
    _createdAt,
    mainImage{
      asset->{
        url
      },
      alt
    }
  }`;
  return client.fetch(query, { slug });
}
