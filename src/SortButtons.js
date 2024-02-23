import React from 'react'

 export default class SortButtons extends React.Component {
    render() {
        return(
        <div className="buttons">
          <label><input value="all" name="sort_method" id="sort_alphabet" type="radio" onChange={(e)=>this.props.visionSelected(e, "albedo")} />All</label>
          <label><input value="pyro" name="sort_method" id="sort_pyro" type="radio" onChange={(e)=>this.props.visionSelected(e, "amber")}/>Pyro</label>
          <label><input value="hydro" name="sort_method" id="sort_hydro" type="radio" onChange={(e)=>this.props.visionSelected(e, "barbara")}/>Hydro </label>
          <label><input value="anemo" name="sort_method" id="sort_anemo" type="radio" onChange={(e)=>this.props.visionSelected(e, "faruzan")}/>Anemo</label>
          <label><input value="electro" name="sort_method" id="sort_electro" type="radio" onChange={(e)=>this.props.visionSelected(e, "beidou")}/>Electro </label>
          <label><input value="dendro" name="sort_method" id="sort_dendro" type="radio" onChange={(e)=>this.props.visionSelected(e, "alhaitham")}/>Dendro </label>
          <label><input value="cryo" name="sort_method" id="sort_cryo" type="radio"onChange={(e)=>this.props.visionSelected(e, "aloy")}/>Cryo </label>
          <label><input value="geo" name="sort_method" id="sort_geo" type="radio" onChange={(e)=>this.props.visionSelected(e, "albedo")}/>Geo </label>
        </div>
        );
    }
 }