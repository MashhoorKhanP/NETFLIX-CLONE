import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Banner from './components/Banner/Banner';
import Poster from './components/Poster/Poster';
import { actions, comedies, documentaries, horrors, newReleases, romances } from './urls';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner /><br/><br/>
      <Poster title='New Releases' url={newReleases} isBig/><br/><br/>
      <Poster title='Actions' url={actions}/><br/>
      <Poster title='Horrors' url={horrors}/><br/>
      <Poster title='Comedies' url={comedies}/><br/>
      <Poster title='Documentaries' url={documentaries}/><br/>
      <Poster title='Romances' url={romances}/><br/>



    </div>
  );
}

export default App;
