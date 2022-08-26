import "react";
import { Announce as AnnounceType } from "../typescript/types";

export default function Announce({ announce }: { announce: AnnounceType }) {
  if (!announce || !announce.show_announce) {
    return <></>;
  }

  return (
    <div className="container-fluid bg-secondary d-flex justify-content-center">
      <div className="announce d-flex justify-content-center">
        <div>
          <b>{announce.title}:&nbsp;</b>
        </div>
        <span
          dangerouslySetInnerHTML={{ __html: announce.description ?? "" }}
        />
      </div>
    </div>
  );
}
