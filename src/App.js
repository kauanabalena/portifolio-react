
import './App.css';
import Navbar from './componentes/section/Navbar'
import Presentation from './componentes/section/Presentation'
import Skills from './componentes/section/Skills'
import Projects from './componentes/section/Projects'
import Footer from './componentes/section/Footer'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Presentation></Presentation>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
