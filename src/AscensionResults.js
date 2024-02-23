import React from 'react'
export default class AscensionResults extends React.Component {
    render() {
        return(
        <div id="ascension-results">
            <div id="boss-mats-needed">
                <h3 className="mini-header"><span>Boss Materials Needed</span></h3>
                <div className="thicker">
                    <div className="boss-nums">
                        <div>
                            <p>Boss Drops: </p>
                        </div>
                        <div>
                            <p id="bossDropsNum"></p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div id="ascension-nums">
                <div className="stacked">
                    <h3 className="mini-header"><span>Boss Runs</span></h3>
                    <div className="nums">
                        <div>
                            <p id="bossRuns">Min: <br />Avg: <br /> Max: </p>
                        </div>
                        <div>
                            <p id="bossRunsNum"></p>
                        </div>
                    </div>
                </div>
                <div className="stacked">
                    <h3 className="mini-header"><span>Resin Needed</span></h3>
                    <div className="nums">
                        <div>
                            <p id="bossResin">Min: <br />Avg: <br /> Max: </p>
                        </div>
                        <div>
                            <p id="bossResinNum"></p>
                        </div>
                    </div> 
                </div>
                <div className="stacked">
                    <h3 className="mini-header"><span>Days</span></h3>
                    <div className="nums">
                        <div>
                            <p id="bossDays">Min: <br />Avg: <br /> Max: </p>
                        </div>
                        <div>
                            <p id="bossDaysNum"></p>
                        </div>
                    </div> 
                </div>
            </div>
            <br />
        </div>
        );
    }
}