import Card from "./Card";
import PropTypes from 'prop-types'

const Cards = ({cardData, handleClick}) => {
   
    return (
        <div  className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2 w-full">
            {
                cardData.map((data, ind)=> <Card data={data} ind={ind} key={data.recipe_id} handleClick={handleClick} />)
            }
        </div>
    );
};

Cards.propTypes = {
    cardData: PropTypes.array,
    handleClick: PropTypes.func
}

export default Cards;