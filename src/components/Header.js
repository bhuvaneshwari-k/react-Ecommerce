import './styles/Header.css';
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Menulist from './Menu';
const Header = (props) => {
    return (
        <>
            <span className='count'>{props.count}</span>
            <div className='header'>
                <div className='title'>
                    <h1>PURPLLE</h1>
                </div>
                <div className='menu'>
                    <Menulist></Menulist>
                </div>
                <div className='cart-icon'>
                    <Link to="/addcart"><FaCartPlus className='cart' ></FaCartPlus></Link>
                </div>
            </div>
        </>
    )
}

export default Header;