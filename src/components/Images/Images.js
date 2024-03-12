import React, { Component } from "react";
import BurjKahlifa from './BurjKahlifa';
import City3 from './CityCenter3';
import City10 from './CityCenter10';
import crater from './CraterBottom1.JPG';
import vesuvius from './Vesuvius.JPG';
import Obs from './Observation';
import TreeOfLife from './Treeoflife';
import './Images.css';

 
class Images extends Component {
  render() {
    return (
      <div className="world-images">
        <h2>Images from around the World!</h2>
        <ol>
            <li><BurjKahlifa /></li>
            <li><Obs /></li>
            <li><City3 /></li>
            <li><City10 /></li>
            <li><img alt="Vesuvius Crater" src={crater} /></li>
            <li><img alt="Vesuvius" src={vesuvius} /></li>
            <li><TreeOfLife /></li>
        </ol>
      </div>
    );
  }
}
 
export default Images;