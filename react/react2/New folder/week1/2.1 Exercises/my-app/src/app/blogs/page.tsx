import React from "react";
import Link from "next/link";


const BlogList= ()=>{
const blogs=[
  {slug:"my-new-post", title: "my new post"},
  {slug:"hello-world", title:" hello world"},
  { slug:"nextjs-tutorial", title:"next.js tutorial"}
];
  
return(
  <div style={{padding:"2rem"}}>
    <h1>blog Posts : </h1>
    <ul>
      {blogs.map(blog=>(
        <li key={blog.slug}>
          <Link href={`/blogs/${blog.slug}`}>
          {blog.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)
}
export default BlogList;