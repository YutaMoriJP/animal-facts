import React from 'react';
import ReactDOM from 'react-dom';
import backgroundImage from '../src/img/ocean.jpg';
import { imageObj } from './images.js';

let title = '';

const displayFact = e => {
  const randomNum = Math.floor(Math.random() * 3);
  document.getElementById('fact').innerHTML =
    imageObj[e.target.getAttribute('alt')].facts[randomNum];
  title = e.target.getAttribute('alt');
};

const animal = [];

for (let key in imageObj) {
  animal.push(
    <img src={imageObj[key].img} alt={key} key={key} onClick={displayFact} />
  );
}

class AnimalFacts extends React.Component {
  constructor(props) {
    super(props);
    this.isBackground = false;
  }
  render() {
    const background = <img src={backgroundImage} className="background"></img>;
    const backgrounds = <div>{background}</div>;
    return (
      <div>
        <h1 className="header">
          <article>
            <button className="btn" onClick={this.showBackground}>
              Show Background Image
            </button>
            <button onClick={this.hideBackground}>Hide Background Image</button>
          </article>
          {title.length === 0
            ? 'Check out some animal facts'
            : `Check out some ${title} facts`}
        </h1>
        {backgrounds}
        <div className="backgroundImages">{animal.map(image => image)}</div>
        <p id="fact">Hello, World</p>
      </div>
    );
  }
  showBackground() {
    document.querySelector('.background').style.visibility = 'visible';
  }
  hideBackground() {
    document.querySelector('.background').style.visibility = 'hidden';
  }
}

ReactDOM.render(<AnimalFacts />, document.getElementById('app'));
