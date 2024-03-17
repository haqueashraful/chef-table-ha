import { toast } from "react-toastify";
import img from "../assets/bannerbg.png";
import "../index.css"

const Banner = () => {

  const handleClick = ()=>{
    toast.info("Opps! Nothings added.😔😔")
  }
  return (
    <div  style={{
          backgroundImage: `url(${img})`,
        }} className=" font-lexend text-center bg-cover bg-center bg-no-repeat rounded-lg shadow-2xl">
      <div
      className="bg-[#00000084] px-5  lg:px-[180px] py-14 lg:py-[110px] rounded-2xl"
       
      >
        <div className="space-y-5">
          <h1 className=" text-2xl lg:text-5xl font-bold text-white ">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="text-sm lg:text-lg font-normal text-white">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding problems to become an exceptionally
            well world-class Programmer. <br />
            When You <span className=" text-2xl font-black text-green-500 underline">Hover</span> ON Those Button There Background Will Change!
          </p>
          <div className=" flex justify-center items-center gap-5">
            <button onClick={handleClick} className="banner-btn font-lexend">Explore Now</button>
            <button onClick={handleClick} className="banner-btn font-lexend">Our Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
