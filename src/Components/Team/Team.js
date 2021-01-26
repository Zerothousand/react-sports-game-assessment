
import React from 'react'


function Team(props) {

    let hitPercentageDiv
    if (props.stats.shots) {
        const hitPercentage = Math.round((props.stats.score / props.stats.shots) * 100)
        hitPercentageDiv = (
            <div>
                <strong>Hitrate: {hitPercentage}%</strong>
            </div>
        )
    }

    return (
        <div className="Team">
            <h2>{props.name}</h2>
            <div className="identity">
                <img src={props.logo} alt={props.name} />
            </div>
            <div>
                <strong>Swings:</strong>  {props.stats.shots}
            </div>
            <div>
                <strong>Score: </strong> {props.stats.score}
            </div>
            {hitPercentageDiv}


            <button onClick={props.shotHandler}>Slash!</button>
        </div>
    )

}

export default Team