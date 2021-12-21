import React from 'react';
import './seasonDisplay.css';


const seasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonObject[season];
    return (
        <div className={`${season} season-display`}>
            <i className={`icon-left ${iconName} massive icon`} />
            <h1>{text}</h1>
            <i className={`icon-right ${iconName} massive icon`} />
        </div>
    );
};

const seasonObject = {
    summer: {
        text: "Let's hit the beach",
        iconName: 'sun'
    },
    winter: {
        text: "Burr, it's cold",
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month < 2 && month > 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}



export default seasonDisplay;