import Search from "../components/Search";
import MealsToday from "../components/MealsToday";
import TotalResults from "../components/TotalResults";
import "../styles/main.css";

const Home = () => {
  return (
    <div className="page-content">
      <main>
        <Search />
        <MealsToday />
        <TotalResults />
      </main>
    </div>
  );
};

export default Home;
