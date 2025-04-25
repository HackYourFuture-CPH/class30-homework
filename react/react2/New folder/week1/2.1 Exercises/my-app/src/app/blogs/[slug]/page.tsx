
type Props = {
  params: { slug: string };
};

const BlogPost = ({ params }: Props) => {
  const title = params.slug.replace(/-/g, ' ').toUpperCase();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{title}</h1>
      <p>This is a blog post about <strong>{title}</strong>.</p>
    </div>
  );
};

export default BlogPost;