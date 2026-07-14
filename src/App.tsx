import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Writing from './components/Writing';
import Interests from './components/Interests';

function App() {
  return (
    <div className="container">
      <Header />
      <main className="content-stream">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Writing />
        <Interests />
      </main>
    </div>
  );
}

export default App;
