import { useState } from "react";

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
            <input type="text" placeholder="Start typing..." onChange={handleInputChange} />
            <p><strong>Item list</strong></p>
            <div className="item-list-div">
                {filteredFruits.length === 0 ? <p>No results</p> : filteredFruits.map((fruit) => <p key={fruit}>{findSearchedLetters(fruit)}</p>)}
            </div>
        </>
    )
}

export default FilterComponent;