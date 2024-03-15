import TableRow from "./TableRow";

const Table = ({ clickedData }) => {
  return (
    <div>
      <div>
        <div>
          <h1 className=" text-center font-lexend font-bold text-3xl my-2">Want to cook: 01</h1>
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
             {
                clickedData.map((data, ind)=><TableRow data={data} key={ind} ind={ind}/>)
              }
             </tbody>
          </table>
        </div>
        <div>
          <h1 className=" text-center font-lexend font-bold text-3xl my-2">Currently cooking: 02</h1>
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
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
