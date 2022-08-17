import React ,{ useState }from "react";
import Logo from '../assets/pizzaLogo.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../style/Navbar.css';


function Navbar() {
    const [openLinks, setOpenLink] = useState(false);

    const toggleNavbar = () => {
        setOpenLink(!openLinks);
    };

  return (
    <div className='Navbar'>
        <div className='logo' id = {openLinks ? "open" : "close"}>
            <img src={Logo} />
            <div className="hiddenLinks">
            <Link to="/" > Home </Link>
            <Link to="/menu" > Menu </Link>
            <Link to="/about" > About </Link>
            <Link to="/contact" > Contact </Link>
            </div>
        </div>
        <div className="nav-links">
            <Link to="/" > Home </Link>
            <Link to="/menu" > Menu </Link>
            <Link to="/about" > About </Link>
            <Link to="/contact" > Contact </Link>
            <button onClick={toggleNavbar}>
                <ReorderIcon />
            </button>
        </div>
      
    </div>
  );
}

export default Navbar
