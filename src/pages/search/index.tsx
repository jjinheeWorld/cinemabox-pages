import { ReactNode, useEffect, useState } from "react";
import SearchableLayout from "../components/searchable-layout";
import MovieItem from "../components/movie-item";
import style from "./index.module.css";
import fetchMovies from "@/lib/fetch-movies";
import { useRouter } from "next/router";
import { MovieData } from "@/types";
import Head from "next/head";

export default function Page() {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const router = useRouter();
  const q = router.query.q;

  const fetchSearchResult = async () => {
    const data = await fetchMovies(q as string);
    setMovies(data);
  };

  useEffect(() => {
    if (q) {
      fetchSearchResult();
    }
  }, [q]);

  return (
    <>
      <Head>
        <title>씨네마박스</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="씨네마박스" />
        <meta
          property="og:description"
          content="씨네마박스에 등록된 영화를 만나보세요."
        />
      </Head>
      <div className={style.container}>
        <div className={style.search}>
          {movies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
