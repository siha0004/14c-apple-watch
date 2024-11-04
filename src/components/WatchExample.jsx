import Image from "next/image";

const WatchExample = ({ imgColor, bgColor, setColor, color, colorClicked }) => {
  return (
    <li className="grid grid-rows-3" onClick={() => setColor((color = colorClicked))}>
      <Image src={imgColor} alt={`${imgColor} watch`} placeholder="blur" className="row-start-1 row-span-2" />
      <div className={`${bgColor} bg-opacity-60 rounded-md h-30`}></div>
    </li>
  );
};

export default WatchExample;
