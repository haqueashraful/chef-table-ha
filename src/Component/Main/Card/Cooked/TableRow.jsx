
const TableRow = ({data, ind}) => {
    console.log(data, ind)
    const {recipe_name, preparing_time, calories}=data;
    return (
        <>
          <tr className=" bg-[#28282808]">
                <td className="p-2">{ind+1}</td>
                <td className="p-2">{recipe_name}</td>
                <td className="p-2">{preparing_time} minutes</td>
                <td className="p-2">{calories} calories</td>
                <td className="p-2"><button className="main-btn">Preparing</button></td>
        </tr>
        </>
    );
};

export default TableRow;