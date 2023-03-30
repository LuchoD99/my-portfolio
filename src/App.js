import Navbar from './components/Navbar/navbar';
import './App.css';
import Home from './components/Home/Home';
import Perfil from './components/Perfil/Perfil';
import Skills from './components/Skill/Skills';
function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <Perfil />
            <Skills />
        </div>
    );
}

export default App;
