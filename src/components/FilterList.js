import { useState } from 'react';
import './FilterList.css';


function FilterList({ items, onSelectionChange }) {
    let [filter, setFilter] = useState('');
    let [selected, setSelected] = useState([]);

    const filtered = (filter) => items.filter(i => i.includes(filter));

    const onFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const onItemClick = (item) => {
        const isSelected = selected.some((t) => t === item);
        const newSelected = isSelected 
                    ? selected.filter((t) => t !== item)
                    : selected.concat([item]);
        setSelected(newSelected);
        onSelectionChange(newSelected);
    };

    const renderItem = (i) => {
        let isSelected = selected.some(t => t === i);
        return <div className={`item ${isSelected ? 'item-selected' : ''}`} 
            key={i}
            onClick={(e) => { onItemClick(i); }}>{i}</div>;
    };

    return (
        <div className="filter-list card">
            <form>
                <div className="mb-3">
                    <input type="text" value={filter} onChange={onFilterChange} placeholder="filter" className="form-control"/>
                </div>
            </form>

            {filtered(filter).map(renderItem)}
        </div>
    );
}

export default FilterList;