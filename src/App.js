import CharacterContainer from './CharacterContainer'
import {charList} from './characterInfo'
import React from 'react'
import Dropdown from './Dropdown'
import TalentSection from './TalentSection';
import AscensionSection from './AscensionSection';
import Footnote from './Footnote';

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          currentChar: "albedo",
      } 
    }
    handleSelectChar = (e) => {
      this.setState({currentChar: e})
    }
    render() {
        var char = this.state.currentChar;
        return(
            <div>
              <div id="char-selection">
                <h3 className="first-line mini-header"><span>Character</span></h3>
                <Dropdown onSelectCharacter={this.handleSelectChar} />
                <br />
                <CharacterContainer 
                    charKey={char}
                    charName={charList[char].name}
                    charImg={charList[char].icon}
                    talentImg={charList[char].talentImg}
                    talentName={charList[char].talent}
                    days={charList[char].days}
                    weeklyImg={charList[char].weeklyImg}
                    weeklyMat={charList[char].weekly}
                    weeklyBoss={charList[char].weeklyBoss}
                    bossImg={charList[char].bossImg}
                    bossMatName={charList[char].bossMat}
                    bossName={charList[char].boss}
                />
              </div>
              <br />
              <TalentSection />
              <br />
              <br />
              <AscensionSection/>
              <br />
              <Footnote />
            </div>
        );
    }
}
