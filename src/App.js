 
import './App.css';
//import TopNav from './components/TopNavigation/TopNav'
import TopMenu from './components/TopNavigation/TopMenu'
import Navbar from './components/TopNavigation/Navbar'
function App() {
  return (
    <div className="App">
      {/* <TopNav/> */}
      <TopMenu/>
      <Navbar/>
    </div>
  );
}

export default App;
