import { Games } from "./games.enum";
import { Game } from "./game.model";
import { TicTacToe } from "./tictactoe/tictactoe";
import { BattleShips } from "./battleships/battleships";
import './styles/styles.scss';

class App {

    constructor() {
        this.initMenu();        
    }

    initMenu(): void {
        const menuContainer = <HTMLDivElement>(document.createElement('div')); // kontener menu dostŕpnych gier
        const gameContainer = <HTMLDivElement>(document.createElement('div')); // kontener g│ˇwny ekranu z gr╣
        const list = document.createElement('ul'); // lista pozycji w menu dostŕpnych gier
        
        // TODO: Zaimplementuj wzorzec fabryki/metody fabrykuj╣cej, tak aby na podstawie konkretnej wartoťci z enum
        // zwrˇciŠ obiekt gry. Z tego obiektu mo┐na nastŕpnie pobraŠ nazwŕ gry i dodaŠ do menu oraz metodŕ zwracaj╣c╣
        // sam╣ grŕ i po klikniŕciu w wybrany element listy wywo│ywaŠ j╣, aby doklejaŠ zawartoťŠ do gameContainer.
        // Aby wyťwietliŠ menu nale┐y napisaŠ pŕtlŕ, ktˇra przeiteruje po wszystkich wartoťciach enum'a

        menuContainer.appendChild(list);
        document.body.appendChild(menuContainer);
        document.body.appendChild(gameContainer);
    }
}

new App(gameFactory);
