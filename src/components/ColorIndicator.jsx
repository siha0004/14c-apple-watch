import { RiMore2Line } from "react-icons/ri";
import ColorDot from "@/components/ColorDot";

const ColorIndicator = () => {
  return (
    <ul className=" text-white flex flex-col gap-1 items-center">
      <ColorDot hexcolor="#404354"></ColorDot>
      <li>
        <RiMore2Line />
      </li>
      <ColorDot hexcolor="#58D7C4"></ColorDot>
      <li>
        <RiMore2Line />
      </li>
      <ColorDot hexcolor="#F2CEC6"></ColorDot>
    </ul>
  );
};

export default ColorIndicator;
