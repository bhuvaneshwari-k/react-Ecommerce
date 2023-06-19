import './styles/Home.css';
import { FaSearch } from "react-icons/fa";

const Home = (props) => {
    const searchItems = (event) => {
        props.setSearchInput(event.target.value)
    }


    const filteredData = props.arr.filter((item) =>
        item.brand.toLowerCase().includes(props.searchInput.toLowerCase())
    );


    return (
        <div className='right-aside'>
            <div className='search'>
                <form>
                    <input type="text" className='input-box' placeholder='Search' value={props.searchInput} onChange={searchItems}></input>
                </form>
                <div className='fa-search'>
                    <FaSearch></FaSearch>
                </div>

            </div>
            <div className='image-container'>
                {filteredData.map(product =>
                    <div key={product.id} className='image'>
                        <img src={product.image} alt={product.alt} />
                        <h5>{product.rate}</h5>
                        <h4>{product.brand}</h4>
                        <button className='cart-button' onClick={() => props.addItem(product)}>{props.btn(product)?"Remove from Cart":"Add to Cart"}</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home;