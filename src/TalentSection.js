import React from 'react'
import TalentInput from './TalentInput';
import TalentMatsNeeded from './TalentMatsNeeded';
import TalentResinNeeded from './TalentResinNeeded';
export default class TalentSection extends React.Component {
    render() {
        return(
        <div id="talent-input">
            <TalentInput />
            <TalentMatsNeeded />
            <TalentResinNeeded />
        </div>
        );
    }
}