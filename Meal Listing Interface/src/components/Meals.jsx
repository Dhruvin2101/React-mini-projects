import "./Meals.css";

const Meals = ({ data }) => {
  return (
    <>
      <div className="card-container">
        <div className="profile-section">
          <div className="image-section">
            <img src={data.strMealThumb} alt="" className="food-img" />
          </div>
        </div>
        <div className="info-section">
          <div className="name-section">
            <div className="name">{data.strMeal}</div>
          </div>
          <div className="Area">Type: {data.strArea}</div>
          <div className="Ingredients">Ingredient:
            <div className="ingredient-list">
            <div className="ingredient-box">{data.strIngredient1}</div>
            <div className="ingredient-box">{data.strIngredient2}</div>
            <div className="ingredient-box">{data.strIngredient3}</div>
            </div>
          </div>
        </div>
        <div className="button-container">
          <button className="btn">More Info</button>
          <button className="btn">Preparation</button>
        </div>
      </div>
    </>
  );
};

export default Meals;
