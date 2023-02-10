import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Components/Products';
import RoutingComp from './Components/RoutingComp';

function App() {
  return (
    <div className="App">
      <Header />
      <RoutingComp />
    </div>
  );
}

export default App;
