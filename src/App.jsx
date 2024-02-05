import './App.css';
import AnimeSlider from './components/AnimeSlider';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="AnimeApp">
      <h1>Anime Search</h1>
      <SearchBar />
      <AnimeSlider />
    </div>
  );
}

export default App;
