import Link from "next/link";
import { Author as AuthorType } from "../typescript/types";

export default function Author({ author }: { author: AuthorType }) {
  return (
    <div className="container text-center">
      <img
        src={author.picture?.url}
        style={{ borderRadius: "100%", maxWidth: "200px" }}
      />
      <h5>{author.title}</h5>
      <h6>{author.headline}</h6>
      <h6>{author.position}</h6>
      <span>
        <ul className="list-group">
          {author.social_links?.map((link, key: number) => {
            return (
              <li key={key} className="list-group-item">
                <Link href={link.link?.href ?? "#"}>
                  <a>{link.link?.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </span>
    </div>
  );
}
