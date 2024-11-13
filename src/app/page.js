"use client";
import { useState } from "react";
import Image from "next/image";
import navy from "../images/navy.png";
import mint from "../images/mint.png";
import ocean from "../images/ocean.png";

import ButtonCTA from "@/components/ButtonCTA";
import Header from "@/components/Header";
import PageIndicator from "@/components/PageIndicator";
import WatchExample from "@/components/WatchExample";
import ColorIndicator from "@/components/ColorIndicator";

export default function Home() {
  const [activeImage, setActiveImage] = useState(navy);
  const imageCollection = {
    navy,
    mint,
    ocean,
  };
  return (
    <div className="grid grid-cols-[minmax(1rem,_1fr)_minmax(0,_1200px)_minmax(1rem,_1fr)] grid-rows-[auto_1fr_auto] bg-gradient-to-br from-[#C8DCE5] to-[#B6CCDA] bg-no-repeat	">
      <Header></Header>
      <main className="grid-cols-subgrid col-start-2 ">
        <section className="grid grid-cols-[7fr_5fr] gap-4 my-12">
          <h1 className="self-center text-white text-6xl leading-tight my-12">
            <span className=" font-bold">The Perfect Moment</span> Between Past And Future.
          </h1>
          <div className="row-span-2 flex items-center pb-12">
            <Image src={activeImage} alt="Picture of iWatch with navy watch strap" placeholder="blur" />
            <ColorIndicator setActiveImage={setActiveImage} {...imageCollection}></ColorIndicator>
          </div>
          <ButtonCTA textCTA="Buy Now"></ButtonCTA>
          <PageIndicator number="1"></PageIndicator>
          <ul className="grid grid-cols-3 gap-8">
            <WatchExample watchColor={navy} setActiveImage={setActiveImage}></WatchExample>
            <WatchExample watchColor={mint} setActiveImage={setActiveImage}></WatchExample>
            <WatchExample watchColor={ocean} setActiveImage={setActiveImage}></WatchExample>
          </ul>
        </section>
      </main>
    </div>
  );
}
