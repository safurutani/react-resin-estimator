import React from 'react'
export default class TalentResinNeeded extends React.Component {
    render() {
        return(
        <div id="calculated-runs" className="column results third">
            <h3 className="mini-header"><span>Talent Domain</span></h3>
            <div className="subColumn">
            <div>
                <p id="domainRuns">Runs: </p>
            </div>
            <div>
                <p id="domainRunsNum"></p>
            </div>
            </div>
            <div className="subColumn">
            <div>
                <p id="domainResin">Resin: </p>
            </div>
            <div>
                <p id="domainResinNum"></p>
            </div>
            </div>
            <div className="subColumn">
            <div>
                <p id="daysTalents">Days: </p>
            </div>
            <div>
                <p id="daysTalentsNum"></p>
            </div>
            </div>
            <h3 className="mini-header"><span>Weekly Boss Runs</span></h3>
            <div className="subColumn">
            <div>
                <p id="weeklyBossRuns">Min:  <br />Avg:  <br /> Max:  </p>
            </div>
            <div>
                <p id="weeklyBossRunsNum"></p>
            </div>
            </div>
        </div>
        );
    }
}