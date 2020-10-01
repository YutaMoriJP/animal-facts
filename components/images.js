import dolphin from '../src/img/dolphin.jpg';
import lobster from '../src/img/lobster.jpg';
import starfish from '../src/img/starfish.jpg';

const imageObj = {
  dolphin: {
    img: dolphin,
    facts: [
      'Dolphins have been shown to give distinct names to each other!',
      'Dolphins are known to display their own culture!',
      'Dolphins have two stomachs!',
    ],
  },
  starFish: {
    img: starfish,
    facts: [
      'Starfish can have up to 40 arms!',
      'Starfish have no brain and no blood!',
      'Starfish can regenerate their own arms!',
    ],
  },
  lobster: {
    img: lobster,
    facts: [
      'Lobsters taste with their legs!',
      'Lobsters chew with their stomachs!',
      'Lobsters can live as long as 100 years.',
    ],
  },
};

export { imageObj };
