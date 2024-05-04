import { SetStateAction } from "react";
import { FaTimes } from "react-icons/fa";
interface IMainFilter {
  handleFilter: (value: SetStateAction<{}>) => void;
  resetFilters: () => void;
}

const CategoryFilter = ({ handleFilter, resetFilters }: IMainFilter) => {
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedCategory = event.target.value;
    if (selectedCategory === "") {
      resetFilters();
    } else {
      handleFilter({ category: selectedCategory });
    }
  };

  return (
    <div className="">
      <select
        className=" bg-[#FAF0E6] text-[#001a2c] p-2 font-bold rounded focus:outline-none"
        name="category"
        id="category"
        onChange={handleCategoryChange}
      >
        <option value="" selected disabled hidden>
          Category
        </option>
        <option value="backend">Backend</option>
        <option value="frontend">Frontend</option>
        <option value="fullstack">Fullstack</option>
      </select>

      <button
        className="bg-[#FAF0E6] text-[#001a2c] p-2 font-bold rounded focus:outline-none"
        onClick={resetFilters}
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default CategoryFilter;
