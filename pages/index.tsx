import Head from "next/head";
import Carousel from "../components/carousel";
import PostList from "../components/post-list";
import Welcome from "../components/welcome";
import { getHomepageRes, getPostsByCategoryRes } from "../helper";
import { Homepage, Post } from "../typescript/types";

export default function Home(props: { homepage: Homepage; posts: Post[] }) {
  return (
    <>
      <Head>
        <title>{props.homepage.seo?.title}</title>
        <meta
          name="description"
          content={props.homepage.seo?.meta_description}
        />
        <meta name="keywords" content={props.homepage.seo?.meta_keywords} />
      </Head>
      {props.homepage.components?.map((component, idx) => {
        if (component.carousel) {
          return <Carousel key={idx} images={component.carousel.images} />;
        } else if (component.welcome) {
          return <Welcome key={idx} welcome={component.welcome} />;
        } else if (component.post_catalog) {
          return <PostList key={idx} posts={props.posts} />;
        }
      })}
    </>
  );
}

export async function getServerSideProps() {
  const homepage = await getHomepageRes();
  const hasToFindPosts = homepage.components.find((c: any) => c.post_catalog);
  let posts = undefined;
  if (hasToFindPosts) {
    posts = await getPostsByCategoryRes(
      undefined,
      hasToFindPosts.post_catalog.limit
    );
  }
  return { props: { homepage, posts } };
}
