import "./UserCard.css";

const UserCard = ({ data , generateNewUser}) => {

  return (
    <div class="container">
    
    <div class="card">
      
      <div class="avatar">
        <img src={data.data.picture.medium} alt="user"/>
      </div>

      <h1 class="name">{data.data.name.title}. {data.data.name.first} {data.data.name.last}</h1>
      <p class="age">{data.data.dob.age} Years Old</p>

      <div class="divider"></div>

      <div class="info">
        <div class="row">
          <span class="icon">✉</span>
          <p>{data.data.email}</p>
        </div>

        <div class="row">
          <span class="icon">📍</span>
          <p>{data.data.location.street.name},  {data.data.location.state}</p>
        </div>

        <div class="row">
          <span class="icon">🌐</span>
          <p>{data.data.location.country}</p>
        </div>

        <div class="row">
          <span class="icon">{data.data.gender === "female" ? "♀" : "♂"}</span>
          <p>{data.data.gender}</p>
        </div>
      </div>

    </div>

    <button class="btn" onClick={generateNewUser}>
      ⟳ Generate New User
    </button>

  </div>
  );
};

export default UserCard;
