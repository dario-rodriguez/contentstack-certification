import Link from "next/link";

export default function Rating({ rating }: { rating?: number }) {
  return (
    <>
      {[1, 2, 3, 4, 5].map((number) => {
        return (
          <i
            key={number}
            className={
              (number <= (rating ?? -1) ? "fa-solid" : "fa-regular") +
              " fa-star"
            }
          />
        );
      })}
    </>
  );
}
