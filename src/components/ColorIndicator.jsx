import { RiMore2Line } from "react-icons/ri";
import ColorDot from "@/components/ColorDot";

const ColorIndicator = ({ mint, ocean, navy, setActiveImage }) => {
  return (
    <ul className=" text-white flex flex-col gap-1 items-center">
      <ColorDot color={"navy"} hexcolor="bg-[#404354]" onClick={() => setActiveImage(navy)}></ColorDot>
      <li>
        <RiMore2Line />
      </li>
      <ColorDot color={"mint"} hexcolor="bg-[#58D7C4]" onClick={() => setActiveImage(mint)}></ColorDot>
      <li>
        <RiMore2Line />
      </li>
      <ColorDot color={"ocean"} hexcolor="bg-[#F2CEC6]" onClick={() => setActiveImage(ocean)}></ColorDot>
    </ul>
  );
};

export default ColorIndicator;
