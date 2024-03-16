import Card from "./Card";

const Cards = ({cardData, handleClick}) => {
   
    return (
        <div  className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2 w-full">
            {
                cardData.map((data, ind)=> <Card data={data} ind={ind} key={data.recipe_id} handleClick={handleClick} />)
            }
        </div>
    );
};

export default Cards;