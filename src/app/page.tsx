import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Join from "@/components/Join";
import FaQ from "@/components/FaQ";
import Features from "@/components/Features";
import RoadMap from "@/components/RoadMap";
import Buy from "@/components/Buy";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Buy/>
      <Features/>
      <RoadMap/>
      <FaQ/>
      <Join/>
      <Footer/>
    </>
  );
}
