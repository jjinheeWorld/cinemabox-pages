import Link from "next/link";
import type { MovieData } from "@/types";
import style from "./movie-item.module.css";

export default function MovieItem({ id, title, posterImgUrl }: MovieData) {
  return (
    <Link href={`/movie/${id}`} className={style.container}>
      <img src={posterImgUrl} alt={`${title} poster image`} />
    </Link>
  );
}
