// app/news/page.tsx
import { client } from "@/sanity/lib/client";
import News from "@/components/News";

export const revalidate = 60; // ISR: re-fetch every 60s

async function getNews() {
  return client.fetch(`
    *[_type == "news"] | order(_createdAt desc) {
      _id,
      title,
      body, // Portable Text array
      "slug": slug.current,
      _createdAt,
      mainimage { asset->{ url } } // ✅ moved inside the object correctly
    }
  `);
}

export default async function NewsPage() {
  const news = await getNews();

  return (
    <main>
      {/* ✅ News component now includes the Hero internally */}
      <News items={news} />
    </main>
  );
}
