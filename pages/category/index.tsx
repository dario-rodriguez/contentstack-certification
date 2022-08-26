import Link from "next/link";
import { getCategoriesRes } from "../../helper";
import { Category as CategoryType } from "../../typescript/types";

export default function Category(props: { categories: CategoryType[] }) {
  return (
    <div className="container">
      <h1>Categories</h1>
      <ul className="list-group list-group-flush">
        {props.categories.map((category, idx) => {
          return (
            <li className="list-group-item" key={idx}>
              <Link href={category.url ?? "#"}>
                <a>{category.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const categories = await getCategoriesRes();

  return { props: { categories } };
}
