import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { useState } from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import Filterbox from './components/Filterbox';
import CartSize from './components/CartSize';
import AddCart from './components/AddCart';
import './App.css';
  function App() {
    const arr = [
      { id: 1, image: require("./images/product1.jpg"), alt: "Lipstick", brand: "Lakme", rate: "$200.00" , size: '1' },
      { id: 2, image: require("./images/product2.jpg"), alt: "Lipstick", brand: "Sugar", rate: "$300.00" , size: '2'},
      { id: 3, image: require("./images/product3.jpg"), alt: "Lipstick", brand: "Faces Canada", rate: "$400.00" , size: '3'},
      { id: 4, image: require("./images/product4.jpg"), alt: "Lipstick", brand: "Sugar", rate: "$150.00" , size: '1'},
      { id: 5, image: require("./images/product5.jpg"), alt: "Lipstick", brand: "Lakme", rate: "$250.00" , size: '2'},
      { id: 6, image: require("./images/product6.jpg"), alt: "Lipstick", brand: "Sugar", rate: "$200.00" , size: '1'},
      { id: 7, image: require("./images/product7.jpg"), alt: "Lipstick", brand: "Faces Canada", rate: "$450.00" , size: '3'},
      { id: 8, image: require("./images/product8.jpg"), alt: "Lipstick", brand: "Faces Canada", rate: "$100.00" , size: '1'},
      { id: 9, image: require("./images/product9.jpg"), alt: "Lipstick", brand: "Lakme", rate: "$350.00" , size: '2'},
      { id: 10, image: require("./images/product10.jpg"),alt:"Lipstick", brand: "Sugar", rate: "$200.00" , size: '2'},
  
      ]
       const [searchInput, setSearchInput] = useState('');
       const [cartItems, setCartItems] = useState('');
       const [selectedSize, setSelectedSize] = useState([]);
       {console.log(selectedSize)}

       const newCartItems = [...cartItems];
     
       const btn=(item)=>{
         const index = newCartItems.findIndex((cartItem) => cartItem.id === item.id);  
         return index >= 0;
     }
     
     const addItem = (item) => {
         const index = newCartItems.findIndex((cartItem) => cartItem.id === item.id);
         if (index >= 0) {
             newCartItems.splice(newCartItems.findIndex(cartitem => cartitem.id === item.id), 1)
         } else {
             newCartItems.push({ ...item });
         }
         setCartItems(newCartItems);
     };
     return (
      <div className="App">
           <BrowserRouter>
             <Header className="header" count = {newCartItems.length}></Header>
             <div className='body'>
               <Filterbox className="left-aside"   selectedSize={selectedSize} setSelectedSize={setSelectedSize} arr={arr}></Filterbox>
               <Routes>
                 <Route exact path='/size' element={<CartSize btn={btn} addItem={addItem} selectedSize={selectedSize}></CartSize>} />
                 <Route exact path='/addcart' element={<AddCart newCartItems={newCartItems} cartItems={cartItems} setCartItems={setCartItems}></AddCart>}></Route>
                 <Route exact path='/' element={
                   <Home className="right-aside" btn={btn} addItem={addItem} searchInput={searchInput} setSearchInput={setSearchInput} cartItems={cartItems} setCartItems={setCartItems} arr={arr} newCartItems={newCartItems} ></Home>
                 }></Route>
               </Routes>
             </div>
             <Footer className="footer"></Footer>
           </BrowserRouter>
           </div>

  ); 
}

export default App;


