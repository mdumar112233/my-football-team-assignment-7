import React from 'react';
import './PrimaryPlayer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEuroSign } from '@fortawesome/free-solid-svg-icons';

const PrimaryPlayer = (props) => {
    const {first_name, last_name, image, salary} = props.playerInfo;
    
    return (
        <div className='primary-container'>
            <div className="subcontainer">
                <div className="img">
                    <img src={image} alt="image"/>
                </div>
                <div className="player-info">
                    <h5>Name: {first_name} {last_name}</h5>
                    <h5>Salary: <FontAwesomeIcon style={{fontSize:'15px'}} icon={faEuroSign} />{salary}M </h5>
                    {/* BOOTSTRAP CLASS USEING HERE */}
                    <button onClick={() => props.handleBtn(props.playerInfo)} className='btn btn-success'>Select player</button>
                </div>
            </div>
        </div>
    );
};

export default PrimaryPlayer;