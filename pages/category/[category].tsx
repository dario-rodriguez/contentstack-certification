import PostList from "../../components/post-list";
import { getCategoryRes, getPostsByCategoryRes } from "../../helper";
import { Category as CategoryType, Post } from "../../typescript/types";

export default function Category(props: {
  category: CategoryType;
  posts: Post[];
}) {
  return (
    <div className="container">
      <h1>{props.category.title}</h1>
      <PostList posts={props.posts} />
    </div>
  );
}
export async function getServerSideProps(params: any) {
  const category = await getCategoryRes(params.resolvedUrl);

  if (!category) return { notFound: true };

  const posts = await getPostsByCategoryRes([category.title]);
  return { props: { category, posts } };
}
