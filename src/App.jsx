import Banner from "./Component/Banner";
import Main from "./Component/Main/Main";
import Nav from "./Component/Nav";

function App() {
  return (
    <div className=" container mx-auto">
      <div className="lg:mx-[30px] xl:mx-[80px] mx-2 md:mx-5 space-y-6 lg:space-y-12">
        <Nav />
        <Banner />
        <Main />
      </div>
    </div>
  );
}

export default App;
