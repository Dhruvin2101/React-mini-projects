import React from "react";

const UserCard = (props) => {
    console.log("++++++++++++++++++++",props)
    return(
        <div className="main">
            <p className="gender">{props.gender}</p>
            <p className="country">India</p>
        </div>
    )
}

export default UserCard