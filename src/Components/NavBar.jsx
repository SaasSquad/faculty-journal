
import  {menuItemsData } from './MenuItemsData';
import MenuItems from './MenuItems';

const Navbar = ({mobileDrop}) => {
    const depthLevel = 0

  return (
    <nav>
      <ul className={`md:flex px-6 flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6 md:mt-0`}>
        {menuItemsData.map((menu, index) => {
          return <MenuItems mobileDrop={mobileDrop} items={menu} key={index} depthLevel={depthLevel}/>;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;