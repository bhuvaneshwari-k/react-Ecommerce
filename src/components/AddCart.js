
import './styles/Home.css';
const Addcart = (props) => {
    const remove = (item)=>{
        const index = props.newCartItems.findIndex((cartItem) => cartItem.id === item.id);
        if (index >= 0) {
            props.newCartItems.splice(props.newCartItems.findIndex(cartitem => cartitem.id === item.id), 1)
        }
        props.setCartItems(props.newCartItems);
    }
    return (
        <div className='image-container'>
            {props.newCartItems.map(product =>
                <div key={product.id} className='image'>
                    <img src={product.image} alt={product.alt} />
                    <h5>{product.rate}</h5>
                    <h4>{product.brand}</h4>
                    <button className='cart-button' onClick={() => remove(product)}>Remove</button>
                </div>
            )}
        </div>
    )
}

export default Addcart;