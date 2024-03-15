import TableRow from "./TableRow";

const Table = ({ clickedData, handelPrepare, prepared }) => {
  console.log(prepared);
  return (
    <div>
      <div>
        <div>
          <h1 className=" text-center font-lexend font-bold text-3xl my-2">
            Want to cook: {clickedData.length}
          </h1>
          <hr />
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Times</th>
                <th>Calories</th>
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
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Times</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {prepared.map((data, ind) => (
                <tr key={ind} className="bg-[#28282808]">
                  <td className="p-2">{ind + 1}</td>
                  <td className="p-2">{data.recipe_name}</td>
                  <td className="p-2">{data.preparing_time} minutes</td>
                  <td className="p-2">{data.calories} calories</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
