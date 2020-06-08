import './sleep.scss';
import utils from '../../helpers/utils';

let fun = 50;

const sleep = () => {
  const domstring = `
    <h1>Sleep!</h1>
    <h2>Energy Level: ${fun}</h2>
    <button class="nap">Nap!</button><button class="slumber">Slumber!</button>`;
  utils.printToDom('#sleep', domstring);
};

const funFriends = () => {
  if (fun === 100) return;
  fun += 50;
  if (fun > 100) fun = 100;
  sleep();
};

const funRead = () => {
  if (fun === 100) return;
  fun += 60;
  if (fun > 100) fun = 100;
  sleep();
};

$('body').on('click', '.nap', funFriends);
$('body').on('click', '.slumber', funRead);

export default { sleep };
