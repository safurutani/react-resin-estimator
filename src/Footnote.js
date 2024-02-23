import React from "react";
export default class Footnote extends React.Component {
    render() {
        return(
            <div id="note">
                <div className="footnote-titles">
                <h3>Note</h3>
                <h3>Updated for version 4.4</h3>
                </div>
                
                <p className="note">-This website uses world level 8 drop rates.
                <br />-RNG is simulated in the domain runs so the numbers change per calculation.
                <br />-The traveler uses all 3 talent books from the respective region for each vision. So while the number of green, blue, and purple books are the same, the type (e.g. Freedom) will vary and is not accounted for here. 
                <br /><br />* &ensp; When Xingqiu crafts Character Talent Materials, he has a 25% chance to refund a portion of the crafting materials used
                </p>
            </div>
        );
    }
}