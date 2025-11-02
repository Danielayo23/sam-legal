// components/News.tsx
import { PortableText } from "@portabletext/react";
import Hero from "./Hero";
import Link from "next/link";
import Image from "next/image";
import { PortableTextBlock } from "sanity";

type NewsItem = {
  _id: string;
  title: string;
  body: PortableTextBlock[];
  slug: string;
  _createdAt: string;
  mainimage?: {
    asset?: {
      url: string;
    };
  };
};


export default function News({ items }: { items: NewsItem[] }) {
  return (
    <div>
      {/* ✅ Hero Section */}
      <Hero
        image="/images/General-News1.jpg"
        alt="News Hero"
        text="Keeping you up to date on things that matter to you"
      />

      {/* ✅ News List */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {items?.length ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((news) => (
              <article
                key={news._id}
                className="bg-white border rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* ✅ Thumbnail */}
                {news.mainimage?.asset?.url && (
                  <Image
                    src={news.mainimage.asset.url}
                    alt={news.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                )}


            <div className="p-4">
              {/* ✅ Clickable Title */}
              <h2 className="text-xl font-semibold mb-2">
                <Link
                  href={`/news/${news.slug}`}
                  className="hover:text-green-600 transition"
                >
                  {news.title}
                </Link>
              </h2>

              {/* ✅ Preview of the body */}
              <div className="line-clamp-3 text-gray-700">
                <PortableText value={news.body} />
              </div>

              <Link
                href={`/news/${news.slug}`}
                className="mt-3 inline-block text-green-600 hover:underline font-medium"
              >
                Read more →
              </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">
            No news available yet.
          </p>
        )}
      </div>
    </div>
  );
}
