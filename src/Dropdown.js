import React from 'react'
import { charList } from './characterInfo'
import SortButtons from './SortButtons'

export default class Dropdown extends React.Component {
    state = {
        sortType: 'all'
    }
    charSelected = (e) => {
        const currentSelection = e.target.value;
        this.props.onSelectCharacter(currentSelection);
    }
    visionSelected = (e, char) => {
        this.setState({sortType: e.target.value})
        this.props.onSelectCharacter(char)
    }
    render() {
        var sortedNames = Object.keys(charList).sort();
        var filteredNames = this.state.sortType === 'all' ? sortedNames : sortedNames.filter(characterKey => charList[characterKey].vision === this.state.sortType);
        var charOptions = filteredNames.map(characterKey => (
            <option key={characterKey} value={characterKey}>
                {charList[characterKey].name}
            </option>
));
        return(
            <div id="dropdown" className="select">
                <SortButtons visionSelected={this.visionSelected}/>
                <label>Select a character:</label>
                <select className="dropdowns" onChange={this.charSelected}>
                    {charOptions}
                </select>
            </div>
        );
    }
}
