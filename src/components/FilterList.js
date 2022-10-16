import './FilterList.css';


function FilterList({ items, filter, onFilterChange }) {
    return (
        <div className="filter-list card">
            <form>
                <div className="mb-3">
                    <input type="text" value={filter} onChange={(e) => onFilterChange(e.target.value)} placeholder="filter" className="form-control"/>
                </div>
            </form>

            {items.map(i => <div className="item" key={i}>{i}</div>)}
        </div>
    );
}

export default FilterList;