import "./App.css";
import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/searchBar/SearchBar";
import Main from "./pages/main/Main";



function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Main />
    </div>
  );
}

export default App;
