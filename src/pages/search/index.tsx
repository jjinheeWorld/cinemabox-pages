import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import SearchableLayout from "../components/searchable-layout";
import movies from "@/mock/dummy.json";
import MovieItem from "../components/movie-item";
import style from "./index.module.css";
import { MovieData } from "@/types";

export default function Page() {
  const [results, setResults] = useState<MovieData[]>([]);
  const router = useRouter();
  const q = router.query.q as string;
  console.log(q);

  useEffect(() => {
    const data = movies.filter((movie) => movie.title.includes(q));
    setResults(data);
  }, [q]);

  return (
    <div className={style.container}>
      <div className={style.search}>
        {results.map((result) => (
          <MovieItem key={result.id} {...result} />
        ))}
      </div>
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
