import { useReducer } from 'react';
import FilterList from './components/FilterList';

const defaultItems = [
    'one','two','three'
];

const intialState = {
    items: defaultItems,
    selected: [],
}

function reducer(state, action) {
    switch (action.type) {
        case 'SELECTION_CHANGE': {
            return Object.assign({}, state, { 
                selected: action.selection
            });
        }
        default: throw new Error(`Unknown action type ${action.type}`);
    }
}

function FilterListDemo() {
    const [state, dispatch] = useReducer(reducer, intialState);

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
            <FilterList items={state.items} onSelectionChange={(selection) => {
                dispatch({type: 'SELECTION_CHANGE', selection})
            }} />
          </div>
        </div>
      </>
    );
  }

  export default FilterListDemo;