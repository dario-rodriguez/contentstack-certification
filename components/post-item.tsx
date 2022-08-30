import React from "react";
import "../styles/Post.module.css";
import parse from "html-react-parser";
import Link from "next/link";
import { Post } from "../typescript/types";

export default function PostItem({ post }: { post?: Post }) {
  if (!post) return <></>;
  return (
    <div className="col-4">
      <div
        className="card my-card"
        style={{
          marginTop: "var(--bs-gutter-x)",
          borderColor: post.category?.[0].category_color ?? "inherit",
        }}
      >
        <img
          src={post.image?.url ?? "https://picsum.photos/200"}
          className="card-img-top"
          style={{ maxHeight: "275px" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.short_description}</p>
          <Link href={post.url ?? "#"}>
            <a className="btn btn-primary">Go to Post</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
