import React from 'react'
import { displayBossInfo } from './calculations';
export default class Ascension extends React.Component {
    render() {
        return(
        <div className="column results">
            <div className="column centered ascensionBox">
                <h3 className="mini-header"><span>Character Ascension</span></h3>
                <label className="number-label">Current Level: <input id="currentLvl" name="currentLvl" className="info" defaultValue="1" required type="number" min="1" max="90" /></label>
                <label className="number-label"> =&gt; Desired Level: <input id="desiredLvl" name="desiredLvl" className="info" defaultValue="90" required type="number" min="1" max="90" /></label>
                <br />
                <div id="ascended-checkboxes">
                    <label className="left-checkbox"><input type="checkbox" id="current-ascended"/>Ascended</label>
                    <label className="right-checkbox"><input type="checkbox" id="desired-ascended"/>Ascended</label>  
                </div>
                <br />
                <label className="number-label">Boss Materials In Inventory: <input id="invBossMats" name="invBossMats" className="bookInventory" defaultValue="0" required type="number" min="0" max="999" /></label>
                <br />
                <button id="calculate-ascension" onClick={displayBossInfo}>Calculate Resin</button>
            </div>
        </div>
        );
    }
}