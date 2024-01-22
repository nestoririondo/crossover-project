import Search from "../components/Search";
import MealsToday from "../components/MealsToday";
import TotalResults from "../components/TotalResults";

const Home = () => {
    return ( 
        <div>
            <h1>Home</h1>
            <p>Home page content</p>
            <Search />
            <MealsToday />
            <TotalResults />
        </div>
     );
}
 
export default Home;
