import './styles/Filterbox.css';
import { Link } from 'react-router-dom';
const Filterbox = (props)=>{
    const sizeItems = (event) => {
        const arr1=props.arr.filter(item => item.size === event.target.value);
        props.setSelectedSize(arr1)
      }
      const brandItems = (brand,event) => {
        {console.log(event.target)}
        const arr1=props.arr.filter(item => item.brand === brand);
        props.setSelectedSize(arr1)
      }
      
    
    return(
        <div className = "left-aside">
            <div className='aside-header'>
                <h1>Brands</h1>
            </div>
            <ul className='side-bar'>
                    <li><Link to="/size"  onClick={(event) => brandItems("Lakme", event)}>Lakme</Link></li>
                    <li><Link to="/size"  onClick={(event) => brandItems("Faces Canada", event)}>Faces Canada</Link></li>
                    <li><Link to="/size"  onClick={(event) => brandItems("Sugar", event)}>Sugar</Link></li>
            </ul>
            <h1>Size</h1>
            <ul className='side-bar-button'>
                <Link to="/size"><button value={1} onClick={sizeItems}>1</button></Link>
                <Link to="/size"><button value={2} onClick={sizeItems}>2</button></Link>
                <Link to="/size"><button value={3} onClick={sizeItems}>3</button></Link>
            </ul>
        </div>
    )
}

export default Filterbox;