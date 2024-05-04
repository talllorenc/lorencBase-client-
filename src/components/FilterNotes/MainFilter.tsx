import { SetStateAction } from "react";
import CategoryFilter from "./FilterItems/CategoryFilter";

interface IMainFilter {
  handleFilter: (value: SetStateAction<{}>) => void;
  setFilter: (value: SetStateAction<{}>) => void;
}

const MainFilter = ({ handleFilter, setFilter } : IMainFilter) => {
  const resetFilters = () => {
    setFilter({});
  };

  return (
    <div className="flex gap-4 mb-4">
      <CategoryFilter handleFilter={handleFilter} resetFilters={resetFilters} />
    </div>
  );
};

export default MainFilter;
