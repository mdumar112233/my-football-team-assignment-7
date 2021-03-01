import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEuroSign } from '@fortawesome/free-solid-svg-icons';

const SelectedPlayer = (props) => {
    const {first_name, last_name, image, salary} = props.select;
    return (
        <div>
            <div className="select-container">
                <div className="img">
                    <img src={image} alt="image"/>
                </div>
                <div className="select-player-info">
                    <h5>Name: {first_name} {last_name}</h5>
                    <h5>Salary: <FontAwesomeIcon style={{fontSize:'15px'}} icon={faEuroSign} />{salary}M </h5>
                </div>
            </div>
        </div>
    );
};

export default SelectedPlayer;<h2>hello</h2>