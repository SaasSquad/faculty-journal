
import {useState, useRef, useEffect} from "react";
import Dropdown from './DropDown'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const MenuItems = ({ items, depthLevel, mobileDrop }) => {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();

    // const onMouseEnter = () => {
    //     setDropdown(true);
    //    };
       
    //    const onMouseLeave = () => {
    //     setDropdown(false);
    //    };

    useEffect(() => {
        const handler = (event) => {
         if (dropdown && ref.current && !ref.current.contains(event.target)) {
          setDropdown(false);
         }
        };
        document.addEventListener("mouseover", handler);
        document.addEventListener("touchstart", handler);
        return () => {
         // Cleanup the event listener
         document.removeEventListener("mouseover", handler);
         document.removeEventListener("touchstart", handler);
        };
       }, [dropdown]);

  return (
    <li className="relative" ref={ref} >
      {items.submenu ? (
        <>
          <button className={`flex ${depthLevel > 0 && "pl-4 pb-2 text-sm text-white"} pl-6 hover:text-blue-600`}  onClick={() => setDropdown(!dropdown)} type="button" aria-haspopup="menu">
            <span className={`${depthLevel > 0 && "mr-4"}`}>{items.title}</span>
            {depthLevel > 0 ? <span>&raquo;</span> : null}
            {
              dropdown ? 
              <FontAwesomeIcon icon={faCaretUp} className="ml-1 mt-1"/>
              : <FontAwesomeIcon icon={faCaretDown} className="ml-1 mt-1"/>
            }
          </button>
          <Dropdown submenus={items.submenu} mobileDrop={mobileDrop} dropdown={dropdown} depthLevel={depthLevel}/>
        </>
      ) : (
        <div className={`${depthLevel > 0 && "pl-4 pb-2 w-56 text-sm text-white "} pl-[10px] hover:text-blue-600 text-[15px]`}>
          <a href={items.url}>{items.title}</a>
        </div>
      )}
    </li>
  );
};

export default MenuItems;