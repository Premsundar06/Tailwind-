import React from "react";
const Fruitcard = ({ fruit }) => {
  return (
    <div className=" rounded-2xl overflow-hidden shadow-xl transform hover:scale-110 duration-100">
      <img
        src={require(`../assests/${fruit.image}.jpeg`)}
        alt={`${fruit.image}`}
        className="w-full h-52 object-cover "
      ></img>
      <div className="flex flex-col items-center my-2 py-2">
        <span className="font-pop  text-slate-500 block">{fruit.name}</span>
        <span className="font-pop text-slate-500 block">{fruit.price}</span>
      </div>
    </div>
  );
};
export default Fruitcard;
