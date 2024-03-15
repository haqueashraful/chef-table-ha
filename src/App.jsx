import Banner from "./Component/Banner";
import Main from "./Component/Main/Main";
import Nav from "./Component/Nav";

function App() {
  return (
    <div className=" container mx-auto">
      <div className="mx-[80px] space-y-12">
        <Nav />
        <Banner />
        <Main />
      </div>
    </div>
  );
}

export default App;
