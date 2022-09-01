import parse from "html-react-parser";
import Head from "next/head";
import Link from "next/link";
import Author from "../../components/author";
import Rating from "../../components/rating";
import { getPostRes } from "../../helper";
import { Post as PostType } from "../../typescript/types";

export default function Post(props: { post: PostType }) {
  return (
    <>
      {props.post.seo && (
        <Head>
          <title>{props.post.seo.title}</title>
          <meta name="description" content={props.post.seo.meta_description} />
          <meta name="keywords" content={props.post.seo.meta_keywords} />
        </Head>
      )}
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>{props.post.title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            {props.post.image ? (
              <img
                src={props.post.image.url}
                style={{ maxHeight: "400px", width: "100%" }}
              />
            ) : (
              ""
            )}
            {parse(props.post.content)}
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col border-bottom pb-3 mb-3">
                <Author author={props.post.author[0]} />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h6>Category:</h6>
                <p
                  style={{
                    border:
                      "3px solid " +
                      (props.post.category && props.post.category.length
                        ? props.post.category[0].category_color
                        : ""),
                  }}
                >
                  <Link
                    href={
                      props.post.category && props.post.category.length
                        ? props.post.category[0].url ?? "#"
                        : "#"
                    }
                  >
                    <a>
                      {props.post.category && props.post.category.length
                        ? props.post.category[0].title
                        : ""}
                    </a>
                  </Link>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h6>Rating:</h6>
                <span>
                  <Rating rating={props.post.rating} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps(params: any) {
  const post = await getPostRes(params.resolvedUrl);

  if (!post) return { notFound: true };

  return { props: { post } };
}
