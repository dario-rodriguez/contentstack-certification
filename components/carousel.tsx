import parse from "html-react-parser";
import { CarouselImage } from "../typescript/types";

export default function Carousel({ images }: { images?: CarouselImage[] }) {
  if (!images) {
    return <></>;
  }

  return (
    <div className="container">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          {images.map((_image, idx: number) => {
            const isActive = idx === 0;
            return (
              <button
                key={idx}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={idx}
                className={isActive ? "active" : ""}
                aria-current={isActive ? "true" : "false"}
                aria-label={"Slide " + idx}
              ></button>
            );
          })}
        </div>
        <div className="carousel-inner">
          {images.map((image, idx: number) => {
            const isActive = idx === 0;
            return (
              <div
                key={idx}
                className={"carousel-item" + (isActive ? " active" : "")}
              >
                <a target="_blank" href={image.external_link ?? "#"}>
                  <img
                    src={image.image?.url ?? ""}
                    height="300"
                    width="100%"
                    className="d-block w-100"
                    alt={image.image_alt}
                  />
                </a>
                <div className="carousel-caption d-none d-md-block">
                  <h5>{image.image_title}</h5>
                  {parse(image.image_description)}
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
