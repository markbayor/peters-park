import React from "react";
import { Link } from "react-router-dom"; // hint, you may want to use this

// You have a bunch of freedom here to write this how you want
// This is not really tested, other than what props you use here
// Check AllCats specs for what is being checked

const CatCard = props => {
  return (
    <div class="cat-card">
      <span>Cutie's name:</span>
      <span>{this.props.name}</span>
      <span>Cutie's pic:</span>
      <img src={this.props.imageUrl} />
    </div>
  );
};

export default CatCard;
