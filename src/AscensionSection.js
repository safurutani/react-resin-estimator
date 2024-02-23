import React from 'react'
import Ascension from './Ascension';
import AscensionResults from './AscensionResults';
export default class AscensionSection extends React.Component {
    render() {
        return(
        <div id="ascension">
            <Ascension />
            <AscensionResults />
        </div>
        );
    }
}