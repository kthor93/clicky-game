import React from "react";
import "./style.css";

const Nav = props => (
    <nav>
        <ul>
            <li>
                <a href="/clicky-game/"><img alt={props.title} src="https://fontmeme.com/permalink/190624/ba4b18cf1a08a781960ab760a85d8d88.png" /></a>
            </li>
            <li>{props.message}</li>
            <li>Current Score: {props.score}</li>
            <li>High Score: {props.highScore}</li>
        </ul>
    </nav>
);

export default Nav;