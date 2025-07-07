export default function ThemeSelector({ onChange }) {
    return (
        <div className="theme-selector">
            <label htmlFor="theme">🎨 Thème : </label>
            <select id="theme" onChange={(e) => onChange(e.target.value)}>
                <option value="base">Basique</option>
                <option value="moderne">Moderne</option>
                <option value="pastel">Pastel</option>
                <option value="retro">Rétro</option>
                <option value="ocean">Océan</option>
                <option value="soleil">Soleil</option>
                <option value="lune">Lune</option>
                <option value="foret">Forêt</option>
                <option value="techno">Futuriste</option>
            </select>
        </div>
    );
}
