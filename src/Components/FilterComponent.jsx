import { useState } from "react";
import styles from './FilterComponent.module.css';

const items = [
    'Apple',
    'Banana',
    'Cherry',
    'Grape',
    'Melon',
    'Blackberry',
    'Fig',
    'Strawberry',
    'Lemon',
    'Mango',
    'Peach',
    'Cucumber',
    'Pomelo',
    'Rambutan',
    'Salad',
    'Feijoa',
    'Persimmon',
    'Citronella',
    'Blueberry',
    'Mulberry',
    'Sorrel',
    'Exotic fruit',
    'Yuzu',
    'Berry',
    'Apricot',
    'Banana Split'
];


const FilterComponent = () => {
    const [search, setSearch] = useState('');
    const [isDatalistActivated, setIsDatalistActivated] = useState(false);

    const handleDatalistActivated = () => setIsDatalistActivated(prev => !prev);

    const findSearchedLetters = (word) => {
        if (!search || search === ' ') return word;

        const regex = new RegExp(search, 'gi');
        const matches = (word.match(regex));
        const splitString = word.split(matches[0]);

        const result = [];

        for (let i = 0; i < word.length; i++) {
            splitString[i] && result.push(splitString[i]);
            matches[i] && result.push(<strong>{matches[i]}</strong>);
        }

        return <span>
            {result.map(wordPart => wordPart)}
        </span>
    }

    const filteredFruits = items.filter(fruit => fruit.toLowerCase().includes(search.toLowerCase()));


    const handleInputChange = e => setSearch(e.target.value);

    return (
        <>
            <h1>Filter elements and highlight searched letters</h1>
            <input list="item-list" type="text" placeholder="Start typing..." onChange={handleInputChange} />
            <button onClick={handleDatalistActivated} className={isDatalistActivated ? `${styles['datalist-btn']} ${styles.activated}` : styles['datalist-btn']}>{isDatalistActivated ? "datalist on" : "datalist off"}</button>
            <p><strong>Item list</strong></p>
            <div className="item-list-div">
                {isDatalistActivated ? <p>Filter turned off</p> : filteredFruits.length === 0 ? <p>No results</p> : filteredFruits.map((fruit) => <p key={fruit}>{findSearchedLetters(fruit)}</p>)}
            </div>
            <datalist id="item-list">
                {isDatalistActivated && search && items.map(item => <option value={item}/>)}
            </datalist>
        </>
    )
}

export default FilterComponent;