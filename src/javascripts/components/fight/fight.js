import './fight.scss';
import utils from '../../helpers/utils';

let full = 100;

const strength = () => {
  const domstring = `
    <h1>Fight!</h1>
    <h2>Strength Level: ${full}</h2>
    <button class="run">Run!</button><button class="fight">Fight!</button>`;
  utils.printToDom('#fight', domstring);
};

const runAway = () => {
  if (full === 100) return;
  full += 1;
  if (full > 100) full = 100;
  strength();
};

const fight = () => {
  if (full === 0) return;
  full -= 10;
  if (full < 0) full = 0;
  strength();
};

$('body').on('click', '.run', runAway);
$('body').on('click', '.fight', fight);

export default { strength };
