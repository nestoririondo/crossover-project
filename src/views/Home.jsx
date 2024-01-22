import Search from "../components/Search";
import MealsToday from "../components/MealsToday";
import TotalResults from "../components/TotalResults";
import Footer from "../components/Footer";
import "../styles/main.css"

const Home = () => {
  return (
    <div className="page-content">
      <main>
            <Search />
            <MealsToday />
            <TotalResults />
            <Footer />
      </main>
    </div>
  );
};

export default Home;
