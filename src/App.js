import "./assets/sass/base.scss";
import CardList from "./components/CardList";

function App() {
  return (
    <section className="feed">
      <h1 className="feed__heading">Ты сегодня покормил кота?</h1>
      <CardList />
    </section>
  );
}

export default App;
