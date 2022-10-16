import FilterList from "../components/FilterList";

export default {
    component: FilterList
};

export const Primary = () => <FilterList list={['one', 'two', 'three']}/>;