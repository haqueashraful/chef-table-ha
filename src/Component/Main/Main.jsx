import Cards from "./Card/Cards";
import { useEffect, useState } from "react";
import "../../index.css";
import Table from "./Card/Cooked/Table";
import { toast } from "react-toastify";

const Main = () => {
  const [cardData, setCardData] = useState([]);
  const [clickedData, setClickedData] = useState([]);
  const [prepared, setPrepared] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("chefsTable.json");
      const data = await res.json();
      setCardData(data);
    };
    loadData();
  }, []);

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
      toast.success("Successfully added🥰")
    } else {
      toast.error("Already Exist!😒");
    }
  };

  const handelPrepare = (recipe_name, preparing_time, calories) => {
    const newPrepare = [...prepared, { recipe_name, preparing_time, calories }];
    toast.success("Start Cooking😍😍")
    setPrepared(newPrepare);

    const updatedClickedData = clickedData.filter(
      (item) =>
        item.recipe_name !== recipe_name ||
        item.preparing_time !== preparing_time ||
        item.calories !== calories
    );
    setClickedData(updatedClickedData);
  };

  return (
    <div className=" space-y-6 w-full">
      <div className=" font-lexend text-center">
        <h2 className=" font-semibold text-4xl mb-6">Our Recipes</h2>
        <p className=" text-base font-normal text-[#150B2B99]">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. <br /> Eget urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
      </div>

      <div className=" grid lg:grid-cols-1 xl:grid-cols-8 md:grid-cols-1 grid-cols-1 gap-2 w-full">
        <div className=" xl:col-span-5">
          <Cards cardData={cardData} handleClick={handleClick} />
        </div>
        <div className=" xl:col-span-3 w-full">
          <Table
            clickedData={clickedData}
            handelPrepare={handelPrepare}
            prepared={prepared}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
