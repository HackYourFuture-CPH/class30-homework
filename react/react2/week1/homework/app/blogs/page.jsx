import Link from "next/link";

const blogs = ["my-first-post", "hello-world", "my-second-post"];

export default function BlogList() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Blog List</h1>
      <ul>
        {blogs.map((slug) => (
          <li key={slug}>
            <Link href={`/blogs/${slug}`}>
              {slug
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
              {/* {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
