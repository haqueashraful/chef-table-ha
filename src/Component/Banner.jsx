import img from "../assets/bannerbg.png";
import "../index.css"

const Banner = () => {
  return (
    <div className=" font-lexend text-center">
      <div
        style={{
          backgroundImage: `url(${img})`
        }}
        className="bg-[#00000033] bg-cover bg-no-repeat px-[180px] py-[110px] rounded-2xl"
      >
        <div className="space-y-5">
          <h1 className=" text-5xl font-bold text-white ">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className=" text-lg font-normal text-white">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding problems to become an exceptionally
            well world-class Programmer.
          </p>
          <div className=" flex justify-center items-center gap-5">
            <button className="banner-btn font-lexend">Explore Now</button>
            <button className="banner-btn font-lexend">Our Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
