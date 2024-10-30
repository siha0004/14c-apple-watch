import { FaApple } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import { FiShoppingBag } from "react-icons/fi";

import ButtonMenu from "./ButtonMenu";

const Header = () => {
  return (
    <header className="py-12 text-white flex justify-between items-center grid-cols-subgrid col-start-2">
      <FaApple className="size-12" />
      <nav>
        <ul className="flex justify-evenly gap-12">
          <ButtonMenu textMenu="Mac" />
          <ButtonMenu textMenu="iPhone" />
          <ButtonMenu textMenu="iPad" />
          <ButtonMenu textMenu="iWatch" />
          <ButtonMenu textMenu="Support" />
        </ul>
      </nav>
      <ul className="flex gap-4 items-center">
        <li>
          <FiSearch className="size-5" />
        </li>
        <li>
          <p className="text-xl">|</p>
        </li>
        <li>
          <FiShoppingBag className="size-5" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
