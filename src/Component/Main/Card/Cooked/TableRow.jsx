import PropTypes from 'prop-types'
const TableRow = ({data, ind, handelPrepare}) => {
    const {recipe_name, preparing_time, calories}=data;
    return (
        <>
          <tr className=" bg-[#28282808] shadow-md">
                <td className="lg:p-2 md:p-2 p-1 text-black">{ind+1}</td>
                <td className="lg:p-2 md:p-2 p-1">{recipe_name}</td>
                <td className="lg:p-2 md:p-2 p-1">{preparing_time} minutes</td>
                <td className="lg:p-2 md:p-2 p-1">{calories} calories</td>
                <td className="lg:p-2 md:p-2 p-0"><button onClick={()=>handelPrepare(recipe_name, preparing_time, calories)} className="table-btn">Preparing</button></td>
        </tr>
        </>
    );
};

TableRow.propTypes={
    data: PropTypes.array,
    ind: PropTypes.number,
    handelPrepare: PropTypes.func
}

export default TableRow;