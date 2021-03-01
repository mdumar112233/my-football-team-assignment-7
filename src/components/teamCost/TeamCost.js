import React, { useState } from 'react';
import SelectedPlayer from '../selectedPlayer/SelectedPlayer';
import './TeamCost.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';

const TeamCost = (props) => {
    const playerInfo  = props.info;
    const total = playerInfo.reduce((total, budget) => total + budget.salary, 0);

    return (
        <div className='cost-container'>
            <div className="player-count-cost">
                <h4>Selected Person: {playerInfo.length} </h4>
                <h5>Total Cost: <FontAwesomeIcon style={{fontSize:'15px'}} icon={faEuroSign} />{total}M</h5>
            </div>
            <div className="selected-player-info">
                { 
                    playerInfo.map(select => <SelectedPlayer select={select}></SelectedPlayer>)
                }
            </div>
        </div>
    );
};

export default TeamCost;