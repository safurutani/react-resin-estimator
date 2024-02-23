import React from 'react'
import './CharacterContainer.css'
import { charList } from './characterInfo';
export default class CharacterContainer extends React.Component {
    render() {
        const isMultipleTalentImages = this.props.talentImg.length > 1;
        const isMultipleWeeklyImages = this.props.weeklyImg.length > 1;
        return (
            <div id="char-container" className="image-div">
                <div className="char-img">
                    <img src={this.props.charImg} className="image" alt={this.props.charName}/>
                    <p id="char-name" className="subtitle">{this.props.charName}</p>
                </div>
                <div className="talent-img">
                    <div className={isMultipleWeeklyImages ? "multiple-imgs" : ""}>
                        {charList[this.props.charKey].talentImg.map((image, index) => (<img key={index} src={image.src} className={isMultipleTalentImages ? "scaled-image" : ""} />))}
                    </div>
                    
                    <p id="talent-name" className="subtitle">{this.props.talentName}</p>
                    <p id="days">{this.props.days}</p>
                </div>
                <div className="weekly-img">
                    <div className={isMultipleWeeklyImages ? "multiple-imgs" : ""}>
                        {charList[this.props.charKey].weeklyImg.map((image, index) => (<img key={index} src={image.src} className={isMultipleWeeklyImages ? "scaled-image" : ""}/>))}
                    </div>
                    <p id="weekly-mat" className="subtitle">{this.props.weeklyMat}</p>
                    <p id="weekly-boss" className="subtitle">{this.props.weeklyBoss}</p>
                </div>
                <div className="boss-mat-img">
                    <img src={this.props.bossImg} className="image" alt={this.props.bossMatName}/>
                    <p id="boss-mat-name" className="subtitle">{this.props.bossMatName}</p>
                    <p id="boss-name" className="subtitle">{this.props.bossName}</p>
                </div>
            </div>
        );
    }
}