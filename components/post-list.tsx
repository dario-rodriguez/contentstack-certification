import { getPostsByCategoryRes } from "../helper";
import { Post } from "../typescript/types";
import PostItem from "./post-item";

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="container">
      <div className="row">
        {posts?.map((post, idx) => {
          return <PostItem key={idx} post={post} />;
        })}
      </div>
    </div>
  );
}
