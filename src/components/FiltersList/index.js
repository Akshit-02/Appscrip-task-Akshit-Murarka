import "./FiltersList.css";
import Filter from "../Filters";

const filterOptions = [
  {
    name: "IDEAL FOR",
    options: ["Men", "Women", "Baby & Kids"],
  },
  {
    name: "OCCASION",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  },
  {
    name: "WORK",
    options: ["Option 1", "Option 2", "Option 3"],
  },
  {
    name: "FABRIC",
    options: ["Option 1", "Option 2"],
  },
  {
    name: "SEGMENT",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  },
  {
    name: "SUITABLE FOR",
    options: ["Option 1", "Option 2", "Option 3"],
  },
  {
    name: "RAW MATERIAL",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  },
  {
    name: "PATTERN",
    options: ["Option 1", "Option 2", "Option 3"],
  },
];
const FiltersList = () => {
  return (
    <div className="filters-list-wrapper">
      <div className="customizable-filter">
        <input type="checkbox" id="customizable" name="customizable" />
        <label htmlFor="customizable">CUSTOMIZABLE</label>
      </div>
      <div>
        {filterOptions.map((option, index) => (
          <div key={index}>
            <Filter data={option} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiltersList;
