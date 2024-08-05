import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Topsec1 from "@/components/topsec1";

import AllBlog from "@/components/AllBlog";
import Trade from "@/components/trade";

export default function Home() {
  return (
    <>
      <Topsec1 />
      <Trade />
      <AllBlog />
    </>
  );
}
