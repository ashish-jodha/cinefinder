import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import MovieDashboard from './MovieDashboard';
import NotFound from './NotFound';

function App() {
  const appWrapper = "min-h-screen flex flex-col bg-gray-50 font-sans text-gray-900";
  const headerStyle = "w-full bg-indigo-900 shadow-md sticky top-0 z-50 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7 2xl:py-8 transition-all";
  const headerContent = "w-full max-w-7xl mx-auto flex justify-center sm:justify-start items-center";
  const logoStyle = "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-wide hover:text-indigo-200 transition-colors cursor-pointer";
  const mainArea = "flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16";
  const footerStyle = "w-full bg-gray-900 text-gray-400 text-center py-4 sm:py-5 md:py-6 lg:py-8 text-xs sm:text-sm md:text-base lg:text-lg mt-auto";

  return (
    <BrowserRouter>
      <div className={appWrapper}>
        <header className={headerStyle}>
          <div className={headerContent}>
            <Link to="/" className={logoStyle}>🎬 CineFinder</Link>
          </div>
        </header>

        <main className={mainArea}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:query" element={<MovieDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className={footerStyle}>
          <p>© {new Date().getFullYear()} CineFinder. Built with React.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;