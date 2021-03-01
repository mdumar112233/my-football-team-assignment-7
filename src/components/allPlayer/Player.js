import React, { useEffect, useState } from 'react';
import data from '../../fakeData';
import PrimaryPlayer from '../PrimaryPlayer/PrimaryPlayer';
import TeamCost from '../teamCost/TeamCost';
import './Player.css';

const Player = () => {
    const [player, setPlayer] = useState([]);
    const [info, setInfo] = useState([]);

    const handleBtn = (personInfo) => {
        const newInfo = [...info, personInfo];
        setInfo(newInfo);
    };

    useEffect(() => {
        setPlayer(data);
    })
    return (
        <div className='playerContainer'>
            <div  className='primaryPlayer'>
            {
                player.map(player => <PrimaryPlayer playerInfo={player} handleBtn={handleBtn}></PrimaryPlayer>)
            }
            </div>
            <div className='playerCost'>
                <TeamCost playerCost={player} info={info}></TeamCost>
            </div>
        </div>
    );
};

export default Player;



