import "./Cats.css";

const Cats = ({ data, generateNew }) => {
  return (
    <>
      <div className="card-container">
        <div className="profile-section">
          <div className="image-section">
            <img src={data.image} alt="" className="cat-img" />
          </div>
        </div>
        <div className="info-section">
          <div className="name-section">
            <div className="name">{data.name}</div>
            <div className="breed">{data.origin}</div>
          </div>
          <div className="description">{data.description}</div>
            <div className="temperment">{data.temperament}</div>
            <div className="info-list">
              <div className="info-box1"><img src="/icons/adapt.png" alt="" className="adapt-icon" />Friendly: {data.child_friendly}</div>
              <div className="info-box2"><img src="/icons/lightning.png" alt="Light" className="lightning-icon"/>Energy: {data.energy_level}</div>
              <div className="info-box3"><img src="/icons/house.png" alt="house" className="house-icon"/>Indoor: {data.indoor}</div>
            </div>
        </div>
        <div className="button-container">
          <button
            className="btn"
            onClick={generateNew} >
            Randomise
          </button>
        </div>
      </div>
    </>
  );
};

export default Cats;
