import Navbar from './components/Navbar/navbar';
import './App.css';
import Home from './components/Home/Home';
import Perfil from './components/Perfil/Perfil';
import Skills from './components/Skill/Skills';
import Proyectos from './components/Proyecto/proyectos';
import Footer from './components/Footer/footer';
function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <Perfil />
            <Skills />
            <Proyectos />
            <Footer />
        </div>
    );
}

export default App;
