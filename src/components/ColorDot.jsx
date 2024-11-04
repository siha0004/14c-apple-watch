const ColorIndicator = ({ hexcolor, setColor, color, colorClicked }) => {
  return <li onClick={() => setColor((color = colorClicked))} className={`aspect-square w-5 ${hexcolor} border-solid border-2 border-white rounded-full drop-shadow-md hover:w-6`}></li>;
};

export default ColorIndicator;
