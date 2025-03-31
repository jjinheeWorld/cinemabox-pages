import { ReactNode } from "react";
import SearchableLayout from "./components/searchable-layout";

export default function Home() {
  return <h1>CINEMABOX</h1>;
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
