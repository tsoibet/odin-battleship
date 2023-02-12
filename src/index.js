import Game from './Game';
import { renderHomepage, updateGameboard } from './DOM';
import './styles.css';

const game = new Game();
console.log(game);
renderHomepage(game);
updateGameboard(game);
