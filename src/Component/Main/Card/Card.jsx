import "../../../index.css";
const Card = ({ data, ind, handleClick }) => {
  const {
    recipe_image,
    recipe_id,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = data;
  
  return (
    <div>
      <div className=" p-4 bg-white border rounded-lg max-h-[635px] min-h-[635px]">
        <figure>
          <img
            className=" w-full h-[200px] rounded-lg"
            src={recipe_image}
            alt=""
          />
        </figure>
        <div className=" space-y-3">
          <h1 className=" font-lexend font-semibold text-xl text-black">
            {recipe_name}
          </h1>
          <p className=" font-fira">{short_description}</p>
          <div className=" py-2 border-y-2 border-[#2828281A]">
            <h2 className=" font-lexend text-lg font-medium text-black">
              Ingredients: {ingredients.length}
            </h2>
            <ul className="px-6">
              {ingredients.map((list, ind) => (
                <li className=" list-disc text-[#878787] font-fira" key={ind}>
                  {list}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex gap-5 items-center my-4">
          <p className="flex justify-center items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            {preparing_time} minutes
          </p>
          <p className="flex justify-center items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
              />
            </svg>
            {calories}calories
          </p>
        </div>
        <div>
          <button onClick={()=>handleClick(recipe_name, preparing_time, calories)} className="main-btn font-lexend">Want to Cook</button>
        </div>
      </div>
    </div>
  );
};

export default Card;