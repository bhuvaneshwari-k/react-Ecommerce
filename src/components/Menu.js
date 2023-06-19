import './styles/Menu.css';
import { Link } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai';
const Menulist = ()=>{
    return(
        <div className="menu-bar">
            <div className='menu-list'>
                <ul className='nav-bar'>
                    <li><Link to="/"><AiOutlineHome  size={60}></AiOutlineHome></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Menulist;