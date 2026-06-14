import MovieInfo from './MovieInfo';

function App() {
  const appWrapper = "min-h-screen flex flex-col bg-gray-50 font-sans text-gray-900";
  const headerStyle = "w-full bg-indigo-900 shadow-md sticky top-0 z-50 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7 2xl:py-8";
  const headerContent = "w-full max-w-7xl mx-auto flex justify-center sm:justify-start items-center";
  const logoStyle = "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white tracking-wide";
  const mainArea = "flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16";
  const footerStyle = "w-full bg-gray-900 text-gray-400 text-center py-4 sm:py-5 md:py-6 lg:py-8 text-xs sm:text-sm md:text-base lg:text-lg mt-auto";

  return (
    <div className={appWrapper}>
      <header className={headerStyle}>
        <div className={headerContent}>
          <h1 className={logoStyle}>🎬 CineFinder</h1>
        </div>
      </header>

      <main className={mainArea}>
        <MovieInfo />
      </main>

      <footer className={footerStyle}>
        <p>© {new Date().getFullYear()} CineFinder. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;