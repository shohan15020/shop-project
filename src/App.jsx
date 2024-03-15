import { useEffect, useState } from "react";

import "./App.css";
import SingleProduct from "./SingleProduct";
// import SingleProduct from "./SingleProduct";


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  

  useEffect(() => {
    const url = '/public/fackData.json';
    // console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleCart = (product) => {

    const isExists = cart.find((p) => p.id == product.id);

    if (!isExists) {
      setCart([...cart, product]);
    } else {
      alert("Cart already exists");
    }
  };

  const handleDelete = (id) => {
    const newArray = cart.filter(item => item.id != id)
    setCart(newArray)
  }


  return (
    <>
      <div className="main-container">
        <div className="left-service-container">
          <div className="cards">
              {
                products.map((product) => <SingleProduct key={product.id} mal={product}
                handleCart={handleCart}
                ></SingleProduct>)
              }
          </div>
        </div>
        <div className="cart-container">
          <div className="cart">
            <h3>Total Added product 0</h3>

            <div className="cart-items">
              <h5>Name</h5>
              <h5>Price</h5>
            </div>

            <div >
              {
                cart.map((item,index) => (
                  
                  <div key={item.id} className="added-item">
                    <p>{index+1}</p>
                    <h5>{item.title.slice(0, 10)}</h5>
                    <h5>{item.price}</h5>
                    <button onClick={()=>handleDelete(item.id)}>Delete</button>
                  </div>
                ))
              }
              {/* {cart.map((cp) => (
                <>
                  <p>{cp.title.slice(0, 25)}</p>
                  <button onClick={() => handleRemove(cp.id)}>remove</button>
                </>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;