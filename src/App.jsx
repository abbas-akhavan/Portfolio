import { useState } from "react";

function App() {
  const [darkMode,setDarkMode] = useState(true);
  return (
    <>
      <main className={`transition-all duration-200 ${darkMode ? 'dark' : ''}`}>
        <div className="bg-slate-300 pb-96 dark:bg-slate-900">
          <aside className="fixed h-[calc(100vh-32px)] w-60 border border-slate-600 rounded-2xl top-[16px] left-4"></aside>
          <main>
            <div className="h-52"></div>
            <div className="h-52"></div>
            <div className="h-52"></div>
            <div className="h-52"></div>
            <div className="h-52"></div>
            <div className="h-52"></div>
            <div className="h-52"></div>
            <div className="h-52"></div>
            <div className="h-52"></div>
            <div className="h-52"></div>
            <div className="h-52"></div>
            <div className="h-52"></div>
            <div className="h-52"></div>
          </main>
        </div>
      </main>
    </>
  );
}

export default App;
