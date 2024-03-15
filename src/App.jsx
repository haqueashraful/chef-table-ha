import Banner from "./Component/Banner";
import Nav from "./Component/Nav";

function App() {
  return (
    <div className=" container mx-auto">
      <div className="mx-[100px]">
        <Nav />
        <Banner />
      </div>
    </div>
  );
}

export default App;
