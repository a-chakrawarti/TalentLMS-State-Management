import "./App.css";

import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import { AppProvider } from "./components/context";
import AddMovie from "./components/AddMovie";
function App() {
  return (
    <AppProvider>
      <Navbar />
      <AddMovie />
      <MovieList />
    </AppProvider>
  );
}

export default App;
