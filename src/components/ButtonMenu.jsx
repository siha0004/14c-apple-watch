const ButtonMenu = ({ textMenu }) => {
  return (
    <li>
      <a href="#" className="px-4 py-1 rounded-full size-xs font-medium hover:bg-white  hover:text-[#B6CCDA]">
        {textMenu}
      </a>
    </li>
  );
};

export default ButtonMenu;
