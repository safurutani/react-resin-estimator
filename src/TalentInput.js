import React from 'react'
import {displayTalentInfo} from './calculations.js'
export default class TalentInput extends React.Component {
    render() {
        return(
        <div id="talent-leveling" className="column centered talentBox">
            <h3 className="mini-header"><span>Talent Leveling</span></h3>
            <label className="number-label">Normal Attack: &nbsp;<input id="currentNa" className="info" name="currentNa" defaultValue="1" required type="number" min="1" max="10" /></label>
            <label id="number-label">=&gt; <input id="desiredNa" name="desiredNa" className="info" defaultValue="10" required type="number" min="1" max="10" /></label>
            <br />
            <label className="number-label">Skill:&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;<input id="currentSkill" name="currentSkill" className="info" defaultValue="1" required type="number" min="1" max="10" /></label>
            <label className="number-label">=&gt; <input id="desiredSkill" name="desiredSkill" className="info" defaultValue="10" required type="number" min="1" max="10" /></label>
            <br />
            <label className="number-label">Burst:&emsp;&emsp;&emsp;&emsp;&nbsp;<input id="currentBurst" name="currentBurst" className="info" defaultValue="1" required type="number" min="1" max="10" /></label>
            <label className="number-label">=&gt; <input id="desiredBurst" name="desiredBurst" className="info" defaultValue="10" required type="number" min="1" max="10" /></label>
            <br />
            <br />
            <p className="mini-header">Talent Books In Inventory</p>
            <label className="number-label">Green: <input id="greenBooks" name="greenBooks" className="bookInventory" defaultValue="0" required type="number" min="0" max="999"/></label>
            <label className="number-label"> &nbsp;Blue: <input id="blueBooks" name="blueBooks" className="bookInventory" defaultValue="0" required type="number" min="0" max="999"/></label>
            <label className="number-label"> &nbsp;Purple: <input id="purpleBooks" name="purpleBooks" className="bookInventory" defaultValue="0" required type="number" min="0" max="999"/></label>
            <br />
            <br />
            <label title="Xingqiu gives a 25% chance to return 1 talent book when crafting">Xingqiu crafting bonus* &ensp;</label><label className="switch">
                <input type="checkbox" id="xingqiuBonus" />
                <span className="slider round"></span>
            </label>
            <br />
            <p>Use Condensed Resin &emsp;
                <label className="switch">
                    <input id="condensedResin" type="checkbox" />
                    <span className="slider round"></span>
                </label>
                </p>
            <button id="calculate-talents" onClick={displayTalentInfo}>Calculate Resin</button>
        </div>
        );
    }
}