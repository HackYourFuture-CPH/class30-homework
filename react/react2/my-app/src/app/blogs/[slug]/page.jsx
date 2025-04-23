"use client";

import { usePathname } from "next/navigation";

function BlogPostPage() {
  const pathname = usePathname();

  
  const slug = pathname.split("/").pop(); 

  
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{title}</h1>
      <p>This is the content of the blog post: <strong>{slug}</strong>.</p>
    </div>
  );
}

export default BlogPostPage;
