import "./Quote.css";

const Quote = ({ data }) => {
  return (
    <>
      <div className="card-container">
        <img src="/icons/red-bg-1.png" alt="" className="card-bg" />

        <div className="info-section">
          <div className="name-section">
            <div className="name">Get Inspired</div>
          </div>
          <div className="description">{data.content}</div>
            <div className="author"> — <span className="author-line">{data.author}</span></div>
        </div>
        <img src="/icons/bulb.png" alt="" className="bulb" />
      </div>
    </>
  );
};

export default Quote;
