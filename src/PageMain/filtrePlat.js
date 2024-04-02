import React, { useState } from 'react';

function FiltrePlat({ handleFilterChange }) {
    const [filters, setFilters] = useState({
        vegetarian: false,
        meat: false,
        fish: false
    });
    const [mealType, setMealType] = useState('');

    const handleFilterChangeCheckbox = (filter) => {
        if (filter === 'vegetarian' && filters.vegetarian === false) {
            setFilters({ vegetarian: true, meat: false, fish: false });
        } else if (filter === 'meat' && filters.meat === false) {
            setFilters({ vegetarian: false, meat: true, fish: false });
        } else if (filter === 'fish' && filters.fish === false) {
            setFilters({ vegetarian: false, meat: false, fish: true });
        } else {
            setFilters({ ...filters, [filter]: !filters[filter] });
        }
        handleFilterChange(filters, mealType);
    };

    const handleMealTypeChange = (type) => {
        setMealType(type);
        handleFilterChange(filters, type);
    };

    return (
        <div className="filter-bar">
            <label>
                Régime:
            </label>
            <label>
                <input type="checkbox" checked={filters.vegetarian} onChange={() => handleFilterChangeCheckbox('vegetarian')} />
                Végétarien
            </label>
            <label>
                <input type="checkbox" checked={filters.meat} onChange={() => handleFilterChangeCheckbox('meat')} disabled={filters.vegetarian} />
                Viande
            </label>
            <label>
                <input type="checkbox" checked={filters.fish} onChange={() => handleFilterChangeCheckbox('fish')} disabled={filters.vegetarian} />
                Poisson
            </label>
            <br />
            <label>
                Type de repas:
            </label>
            <select value={mealType} onChange={(e) => handleMealTypeChange(e.target.value)}>
                <option value="">Tous</option>
                <option value="repas crous">Repas CROUS</option>
                <option value="sandwich">Sandwich</option>
                <option value="salade">Salade</option>
                <option value="pasta box">Pasta Box</option>
            </select>
        </div>
    );
}

export default FiltrePlat;
