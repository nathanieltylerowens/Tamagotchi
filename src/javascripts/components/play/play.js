
import './play.scss';
import utils from '../../helpers/utils';

let fun = 50;

const playFun = () => {
  const domstring = `
    <h1>Play!</h1>
    <h2>Happiness Level: ${fun}</h2>
    <button class="friends">Playing with Friends</button><button class="read">Read a Book</button>`;
  utils.printToDom('#play', domstring);
};

const funFriends = () => {
  if (fun === 100) return;
  fun += 50;
  if (fun > 100) fun = 100;
  playFun();
};

const funRead = () => {
  if (fun === 100) return;
  fun += 2;
  if (fun > 100) fun = 100;
  playFun();
};

$('body').on('click', '.friends', funFriends);
$('body').on('click', '.read', funRead);

export default { playFun };
