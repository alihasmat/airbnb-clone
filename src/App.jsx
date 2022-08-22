import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Card from "./components/Card";
import Datas from "./Data";

function App() {
  const cardComponents = Datas.map((data) => {
    return (
      <Card
        image={data.image}
        rating={data.rating}
        rank={data.rank}
        country={data.country}
        content={data.content}
        price={data.price}
        openSpots={data.openSpots}
      />
    );
  });

  return (
    <>
      <Header />
      <Main />
      <div className="card-components container">{cardComponents}</div>
    </>
  );
}

export default App;
