const ColorIndicator = ({ hexcolor }) => {
  return <li className={`aspect-square w-5 ${hexcolor} border-solid border-2 border-white rounded-full`}></li>;
};

export default ColorIndicator;
