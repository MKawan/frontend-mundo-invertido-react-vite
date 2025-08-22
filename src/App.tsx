import Footer from './components/footer';
import { Header } from './components/header'
import { Main } from './components/main';
// import './App.css'

function App() {
document.body.className = 'light-theme';

// Outros atributos
document.body.setAttribute("aria-label", "Trocando o tema");
document.body.setAttribute("role", "body");
document.body.setAttribute("cz-shortcut-listen", "true");

  return (
    <div>
      <Header />
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
