import lasuLogo from "../assets/Images/lasu.png"
import journalLogo from "../assets/Images/jlogo.jpg"
import { Link } from "react-router-dom"; 

function LogoBar() {
  return (
    <div>
        <div className="h-[55px] flex flex-row">
          <Link to="/"><img src={lasuLogo} alt="" className="h-[45px] my-[10px] ml-[20px]"/></Link>
          <Link to="/" className="ml-auto pr-[20px]">
          <img src={journalLogo} alt="" className="h-[45px] my-[10px]"/>
          </Link>
            
        </div>
    </div>
  )
}

export default LogoBar;