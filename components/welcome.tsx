import parse from "html-react-parser";
import { Welcome as WelcomeType } from "../typescript/types";

export default function Welcome({ welcome }: { welcome: WelcomeType }) {
  return (
    <div className="container text-center">
      <h1>{welcome.title}</h1>
      {welcome.website_description && parse(welcome.website_description)}
    </div>
  );
}
