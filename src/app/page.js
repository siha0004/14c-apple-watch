import ButtonCTA from "@/components/ButtonCTA";
import Header from "@/components/Header";
import PageIndicator from "@/components/PageIndicator";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-[minmax(1rem,_1fr)_minmax(0,_1200px)_minmax(1rem,_1fr)] grid-rows-[auto_1fr_auto] bg-gradient-to-br from-[#C8DCE5] to-[#B6CCDA] bg-no-repeat	">
      <Header className="grid-cols-subgrid col-start-2"></Header>
      <main className="grid-cols-subgrid col-start-2">
        <h1 className="text-white text-7xl">
          <span className=" font-bold">The Perfect Moment</span> Between Past And Future.
        </h1>
        <ButtonCTA textCTA="Buy Now"></ButtonCTA>
        <PageIndicator number="1"></PageIndicator>
      </main>
    </div>
  );
}
