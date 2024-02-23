import React from 'react'
export default class TalentMatsNeeded extends React.Component {
    render() {
        return(
        <div id="mats-needed" className="column results middle">
            <h3 className="mini-header"><span>Books Needed</span></h3>
            <div className="subColumn thicker">
            <div>
                <p id="matsNeeded">Green Books: <br />Blue Books: <br />Purple Books: </p>
            </div>
            <div>
                <p id="matsNeededNum"></p>
            </div>
            </div>
            <h3 className="mini-header"><span>Weekly Mats Needed</span></h3>
            <div className="subColumn">
            <div>
                <p id="weeklyBossRuns">Boss Drops: </p>
            </div>
            <div>
                <p id="weeklyBossRunsMats"></p>
            </div>
            </div>
        </div>
        );
    }
}