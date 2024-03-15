import Cards from "./Card/Cards";
import { useEffect, useState } from "react";
import "../../index.css"
import Table from "./Card/Cooked/Table";
import { toast } from "react-toastify";


const Main = () => {

    const [cardData, setCardData] = useState([])

    const [clickedData, setClickedData] = useState([])

    useEffect(()=>{
        const loadData = async () =>{
            const res = await fetch('chefsTable.json')
            const data = await res.json()
            setCardData(data)
        }
        loadData()
    },[])

    const handleClick = (recipe_name, preparing_time, calories) => {
        const newRecipe = { recipe_name, preparing_time, calories };
      
        let isDuplicate = false;
        for (const item of clickedData) {
          if (
            item.recipe_name === recipe_name &&
            item.preparing_time === preparing_time &&
            item.calories === calories
          ) {
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) {
          const newArray = [...clickedData, newRecipe];
          setClickedData(newArray);
        }else{
            alert("already exist")
            toast("already exist")
        }
      }
      
    // console.log(clickedData)      
  return (
    <div className=" space-y-6">
      <div className=" font-lexend text-center">
        <h2 className=" font-semibold text-4xl mb-6">Our Recipes</h2>
        <p className=" text-base font-normal text-[#150B2B99]">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. <br /> Eget urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
      </div>

      <div className=" grid grid-cols-8 gap-2 w-full">
        <div className=" col-span-5">
        <Cards cardData={cardData} handleClick={handleClick}/>
        </div>
        <div className=" col-span-3">
        <Table clickedData={clickedData}/>
        </div>
      </div>
    </div>
  );
};

export default Main;
