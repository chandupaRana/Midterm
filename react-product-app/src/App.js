import logo from './logo.svg';
import './App.css';
import AddProduct from './AppProduct.jsx'; // Import the AddProduct component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <AddProduct /> {/* Use the AddProduct component here */}
      </header>
    </div>
  );
}

export default App;
