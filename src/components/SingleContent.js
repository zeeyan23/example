import { Badge } from "@mui/material";
import Image from "next/image";
import { img_300, unavailable } from "./config";
import ContentModal from "./Modal/Modal";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <ContentModal media_type={media_type} id={id} className="cursor-pointer">
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="rounded-lg"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />

      <b className="w-full text-center text-xl p-2">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="w-full text-center text-xl p-2">{date}</span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;
