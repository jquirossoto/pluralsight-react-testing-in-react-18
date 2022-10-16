import FilterList from "../components/FilterList";

export default {
    component: FilterList
};

export const Primary = () => <FilterList items={['one', 'two', 'three']} onSelectionChange={()=>{}}/>;