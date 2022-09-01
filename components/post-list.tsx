import { getPostsByCategoryRes } from "../helper";
import { Post } from "../typescript/types";
import PostItem from "./post-item";

export default function PostList({
  posts,
  title,
}: {
  posts: Post[];
  title?: string;
}) {
  return (
    <div className="container">
      {title ? (
        <div className="row">
          <h2>{title}</h2>
        </div>
      ) : (
        ""
      )}
      <div className="row">
        {posts?.map((post, idx) => {
          return <PostItem key={idx} post={post} />;
        })}
      </div>
    </div>
  );
}
