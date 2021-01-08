import React from "react";
import AllMovies from "./components/AllMovies/AllMovies";
import UpCommings from "./components/AllMovies/UpCommings";
import Trendings from "./components/AllMovies/Trendings";
import movieDetails from "./components/AllMovies/MovieDetails";
import tvShowsDetails from "./components/TvShows/TvShowsDetails";
import TvShows from "./components/TvShows/TvShows";
import AllPeople from "./components/People/allPeople";
import PeopleDetails from "./components/People/peopleDetails";
import Search from "./components/Search/search";
import Navbar from "./components/Navabar/Navbar";
import Footer from "./components/Navabar/Footer";
import "./styles/styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={AllMovies} />
          <Route path="/upcomming" component={UpCommings} />
          <Route path="/trending" component={Trendings} />
          <Route path="/movieDetails/:id" component={movieDetails} />
          <Route path="/tvshows" component={TvShows} />
          <Route path="/tvDetails/:id" component={tvShowsDetails} />
          <Route path="/people" component={AllPeople} />
          <Route path="/peopleDetails/:id" component={PeopleDetails} />
          <Route path="/search" component={Search} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
