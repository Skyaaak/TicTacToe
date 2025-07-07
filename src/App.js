// src/App.js
import { useEffect, useState } from 'react';
import Game from './components/Game';
import ThemeSelector from './components/ThemeSelector';

export default function App() {
    const [theme, setTheme] = useState('base');

    useEffect(() => {
        // Supprime les anciens thèmes
        const links = document.querySelectorAll('link[data-theme]');
        links.forEach(link => link.remove());

        // Crée une nouvelle feuille de style
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `/styles/${theme}.css`;
        link.setAttribute('data-theme', 'true');
        document.head.appendChild(link);
    }, [theme]);

    return (
        <div className="app">
            <h1>Jeu du Morpion</h1>
            <ThemeSelector onChange={setTheme} />
            <Game />
        </div>
    );
}
