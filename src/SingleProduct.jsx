
const SingleProduct = ({mal,handleCart}) => {
    // console.log(mal);
  const {image,price,category,description} = mal;
  return (
    <div className="card">
      <img
        src={image}
        alt=""
      />
      <h4>{category}</h4>
      <p>
        {description}
      </p>
      <div className="footer-container">
        <h1>{price}</h1>
        <button className="add-btn" onClick={() => handleCart(mal)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;