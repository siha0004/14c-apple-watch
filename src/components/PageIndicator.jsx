import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";

const PageIndicator = ({ number }) => {
  return (
    <div className="flex gap-2 items-center text-white">
      <HiArrowLongLeft className="size-4" />
      <p>{number}</p>
      <HiArrowLongRight className="size-4" />
    </div>
  );
};

export default PageIndicator;
