import PropTypes from "prop-types"
import TableRow from "./TableRow";

const Table = ({ clickedData, handelPrepare, prepared }) => {

  const totalTime = prepared.reduce(
    (total, recipes) => total + recipes.preparing_time,
    0
  );
  const totalCalories = prepared.reduce(
    (total, calories) => total + calories.calories,
    0
  );
  return (
    <div>
      <div className=" border rounded-lg shadow-xl">
        <div>
          <h1 className=" text-center font-lexend font-bold text-3xl my-2">
            Want to cook: {clickedData.length}
          </h1>
          <hr />
          <table className=" w-full text-left table-auto">
            <thead>
              <tr>
                <th className="p-2"></th>
                <th className="p-2">Name</th>
                <th className="p-2">Times</th>
                <th className="p-2">Calories</th>
              </tr>
            </thead>
            <tbody className=" bg-[#28282808] px-5 w-full">
              {clickedData.map((data, ind) => (
                <TableRow
                  data={data}
                  key={ind}
                  ind={ind}
                  handelPrepare={handelPrepare}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h1 className=" text-center font-lexend font-bold text-3xl my-2">
            Currently cooking: {prepared.length}
          </h1>
          <hr />
          <table className=" w-full text-left table-auto">
            <thead>
              <tr>
                <th className="p-2"></th>
                <th className="p-2">Name</th>
                <th className="p-2">Times</th>
                <th className="p-2">Calories</th>
              </tr>
            </thead>
            <tbody>
              {prepared.map((data, ind) => (
                <tr key={ind} className="bg-[#28282808] shadow-md w-full">
                  <td className="p-2 text-black">{ind + 1}</td>
                  <td className="p-2 grow">{data.recipe_name}</td>
                  <td className="p-2 ">{data.preparing_time} <br /> minutes</td>
                  <td className="p-2 ">{data.calories} <br /> calories</td>
                </tr>
              ))}
              <tr>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2">Total Time = {totalTime} minutes</td>
                <td className="p-2">
                  Total Calories = {totalCalories} calories
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Table.propTypes = {
  clickedData: PropTypes.array.isRequired,
  prepared: PropTypes.array.isRequired,
  handelPrepare: PropTypes.func

}

export default Table;
