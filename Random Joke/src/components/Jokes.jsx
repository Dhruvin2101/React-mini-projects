import "./Jokes.css";

const Jokes = ({ data, generateNew }) => {
  return (
    <>
      <div className="card-container">
        <img src="/icons/card-bg.png" alt="" className="card-bg" />
        <img src="/icons/smily.png" alt="" className="smily-icon" />

        <div className="info-section">
          <div className="name-section">
            <div className="name">Get Laughing</div>
          </div>
          <div className="description">{data.content}</div>
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

export default Jokes;
