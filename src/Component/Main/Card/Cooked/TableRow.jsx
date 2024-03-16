
const TableRow = ({data, ind, handelPrepare}) => {
    const {recipe_name, preparing_time, calories}=data;
    return (
        <>
          <tr className=" bg-[#28282808]">
                <td className="lg:p-2 md:p-2 p-1">{ind+1}</td>
                <td className="lg:p-2 md:p-2 p-1">{recipe_name}</td>
                <td className="lg:p-2 md:p-2 p-1">{preparing_time} minutes</td>
                <td className="lg:p-2 md:p-2 p-1">{calories} calories</td>
                <td className="lg:p-2 md:p-2 p-0"><button onClick={()=>handelPrepare(recipe_name, preparing_time, calories)} className="main-btn">Preparing</button></td>
        </tr>
        </>
    );
};

export default TableRow;