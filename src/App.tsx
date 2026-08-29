import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Interests from './components/Interests';

function App() {
  return (
    <div className="container">
      <Header />
      <main className="content-stream">
        <Hero />
        <Projects />
        <Interests />
      </main>
    </div>
  );
}

export default App;
