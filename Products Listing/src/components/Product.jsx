import "./Product.css";

const Product = ({ data }) => {
  return (
    <>
      <div className="card-container">
        <div className="img-container-section">
          <div className="image-section">
            <img src={data.thumbnail} alt="" className="product-img" />
          </div>
        </div>
          <div className="brand">{data.brand}</div>
        <div className="info-section">
          <div className="name-section">
            <div className="name">{data.title}</div>
          </div>
          <div className="Ingredients">
              <div className="buy-box">BUY NOW ${data.price}</div>
              <div className="star-box"><img src="/icons/star.png" alt="" className="star" /><div className="star-rating">{data.rating}</div></div>
          </div>
        </div>
      
      </div>
    </>
  );
};

export default Product;
