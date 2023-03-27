import Navbar from './components/Navbar/navbar';
import './App.css';
import Home from './components/Home/Home';
import Perfil from './components/Perfil/Perfil';
function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <Perfil />
        </div>
    );
}

export default App;
