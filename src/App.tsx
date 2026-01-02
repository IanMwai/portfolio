import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Writing from './components/Writing';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-blue-500/30">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Writing />
        <Contact />
      </main>
    </div>
  );
}

export default App;