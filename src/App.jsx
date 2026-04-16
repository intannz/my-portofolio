import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';

export default function App() {

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        {/* Blog section*/}
        {/*<Contact />*/}
      </main>
      <Footer />
    </div>
  );
}