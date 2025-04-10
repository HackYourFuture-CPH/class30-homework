"use client";

import Link from "next/link";

function BlogListPage() {
  const posts = ["my-first-post", "my-new-post", "mars-mission"];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Blog Posts</h1>
      <ul style={{ lineHeight: "2rem" }}>
        {posts.map((post) => (
          <li key={post}>
            <Link href={`/blogs/${post}`} style={{ color: "blue", textDecoration: "underline" }}>
              {post.replace(/-/g, " ")}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogListPage;
