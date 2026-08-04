import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="card">
      <Link href={`/posts/${post.id}`}>
        <h3 style={{ textTransform: "capitalize" }}>{post.title}</h3>
      </Link>
      <p style={{ marginTop: "8px", color: "#666" }}>{post.body}</p>
    </div>
  );
}