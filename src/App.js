 
import './App.css';
//import TopNav from './components/TopNavigation/TopNav'
import TopMenu from './components/TopNavigation/TopMenu'
import Navbar from './components/TopNavigation/Navbar'
import ShowCustomers from './components/Customer/ShowCustomers'
function App() {
  return (
    <div className="App">
      {/* <TopNav/> */}
      <TopMenu/>
      <Navbar/>
      <ShowCustomers/>
    </div>
  );
}

export default App;
