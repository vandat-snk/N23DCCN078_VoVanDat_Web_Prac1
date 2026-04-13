import Link from "next/link";

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  return res.json();
}

export default async function BlogDetail({ params }) {
  const { id } = await params;   // 🔥 QUAN TRỌNG (fix chính)

  const post = await getPost(id);

  if (!post || !post.title) {
    return <p className="p-6">Loading...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">
        {post.title}
      </h1>

      <p className="text-gray-700 leading-relaxed mb-6">
        {post.body}
      </p>

      <Link href="/" className="bg-indigo-600 text-white px-4 py-2 rounded">
        ← Back to Blog
      </Link>
    </div>
  );
}