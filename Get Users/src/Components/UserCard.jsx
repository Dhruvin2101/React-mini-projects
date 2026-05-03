const UserCard = ({ data }) => {
  return (
    <div>
        <h1>{data?.data?.gender}</h1>
        <h1>{data?.data?.location?.country}</h1>
        <h1>{data?.data?.email}</h1>
        <img src={data?.data?.picture?.medium} alt="" />
    </div>
  );
};

export default UserCard;