import './styles/AddCart.css'
const Sizerender = (props) => {
    return (
        <div className='image-container'>
            {props.selectedSize.map(product =>
                <div key={product.id} className='image'>
                    <img src={product.image} alt={product.alt} />
                    <h5>{product.rate}</h5>
                    <h4>{product.brand}</h4>
                    <button className='cart-button' onClick={() => props.addItem(product)}>{props.btn(product) ? "Remove from Cart" : "Add to Cart"}</button>
                </div>
            )}
        </div>
    )
}

export default Sizerender;