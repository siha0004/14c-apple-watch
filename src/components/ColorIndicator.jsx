import { RiMore2Line } from "react-icons/ri";
import ColorDot from "@/components/ColorDot";

const ColorIndicator = ({ color, setColor }) => {
  return (
    <ul className=" text-white flex flex-col gap-1 items-center">
      <ColorDot hexcolor="bg-[#404354]" colorClicked="navy" color={color} setColor={setColor}></ColorDot>
      <li>
        <RiMore2Line />
      </li>
      <ColorDot hexcolor="bg-[#58D7C4]" colorClicked="mint" color={color} setColor={setColor}></ColorDot>
      <li>
        <RiMore2Line />
      </li>
      <ColorDot hexcolor="bg-[#F2CEC6]" colorClicked="ocean" color={color} setColor={setColor}></ColorDot>
    </ul>
  );
};

export default ColorIndicator;
