import MenuItems from "./MenuItems";

const DropDown = ({ submenus, dropdown, mobileDrop, depthLevel }) => {
    depthLevel = depthLevel + 1;

 return (
  <ul className={`flex ${mobileDrop ? 'relative' : 'absolute'} bg-[#072975] rounded-md text-white p-4 ${depthLevel > 1 && "relative ml-4"} ${depthLevel > 0 && "flex-col"} ${dropdown ? "flex" : "hidden"}`}>
   {submenus.map((submenu, index) => (
    <MenuItems items={submenu} key={index} depthLevel={depthLevel}/>
   ))}
  </ul>
 );
};

export default DropDown;