import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Movie from "./Movie";
import movieCategory from "./properties";
import Banner from "./Banner";

function App() {
  return (
    <div className="App">
      <Banner />
      <Movie url={movieCategory.trending} title={'TRENDING'} largeSize={"true"}/>
      <Movie url={movieCategory.topRated} title={'Top Rated'} largeSize={false} />
       <Movie url={movieCategory.action} title={'Action'}/>
       <Movie url={movieCategory.romance} title={'Romance'}/>
       <Movie url={movieCategory.horror} title={'Horror'}/> 
       <Movie url={movieCategory.documentaries} title={'Documentaries'}/>
    </div>
  );
}

export default App;
