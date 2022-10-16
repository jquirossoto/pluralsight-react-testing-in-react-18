import { useReducer } from 'react';
import FilterList from './components/FilterList';

const defaultItems = [
    'one','two','three'
];

const filterListState = {
    items: defaultItems,
    filter: '',
}

function reducer(state, action) {
    switch (action.type) {
        case 'FILTER_CHANGE': {
            return Object.assign({}, state, { 
                filter: action.content,
                items: defaultItems.filter(i => i.match(new RegExp(action.content))),
            });
        }
        default: throw new Error(`Unknown action type ${action.type}`);
    }
}

function FilterListDemo() {
    const [state, dispatch] = useReducer(reducer, filterListState);

    return (
      <>
        <header className="row">
          <div className="col">
            <h1>
              FilterList Component Demo
            </h1>
          </div>
        </header>
        <div className="row">
          <div className="col">
            <FilterList {...state} onFilterChange={(content) => {dispatch({type: 'FILTER_CHANGE', content})}} />
          </div>
        </div>
      </>
    );
  }

  export default FilterListDemo;