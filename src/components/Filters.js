import FilterName from "./FilterName";
import FilterByHouse from "./FilterByHouse";
import FilterByGender from "./FilterByGender";

function Filters(props) {
  return (
    <>
      <form className="formName">
        <FilterByHouse
          filterByHouse={props.filterByHouse}
          handleFilterByHouse={props.handleFilterByHouse}
        />
        <FilterName
          filterName={props.filterName}
          handleFilterName={props.handleFilterName}
        />
        <FilterByGender
          filterByGender={props.filterByGender}
          handleFilterByGender={props.handleFilterByGender}
        />
      </form>
    </>
  );
}
export default Filters;
