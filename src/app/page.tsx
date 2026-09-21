import Image from "next/image";
import Banner from "@/components/banner";
import About from "@/components/about";
import { Specializations } from "@/components/Services/specializations";
import {Portfolio} from "@/components/Portfolio/portfolio";
import { Footer } from "@/components/footer";
import Facts from "@/components/facts";

export default function Home() {
  return (
    <>
    
      <Banner />
      <Facts />
      <About />
      <Specializations />
      <Portfolio />
      <Footer />
    </>
  );
}
