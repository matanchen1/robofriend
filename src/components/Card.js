import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className={"bg-light-green dib br3 pa3 ma2 grow shadow-5"}>
            <img src={"https://robohash.org/h$%7Bid%7D " + id + "size=200x200"} alt={"robot"}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    );
}

export default Card;