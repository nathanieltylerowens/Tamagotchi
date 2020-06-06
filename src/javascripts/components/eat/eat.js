import './eat.scss';
import utils from '../../helpers/utils';

let full = 100;

const eatFood = () => {
  const domstring = `
    <h1>Eat!</h1>
    <h2>Fullness Level: ${full}</h2>
    <button class="healthy">Lettuce</button><button class="junk">Oreos</button>`;
  utils.printToDom('#eat', domstring);
};

const eatHealthy = () => {
  if (full === 100) return;
  full += 10;
  if (full > 100) full = 100;
  eatFood();
};

const eatJunk = () => {
  if (full === 0) return;
  full -= 3;
  if (full < 0) full = 0;
  eatFood();
};

$('body').on('click', '.healthy', eatHealthy);
$('body').on('click', '.junk', eatJunk);

export default { eatFood };
