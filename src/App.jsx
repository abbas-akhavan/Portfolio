import { useState } from "react";
import NavBar from "./components/NavBar";
import Summary from "./components/Summary";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <NavBar />
      <main className="h-[2000px] w-[60%] pt-[1000px] mx-auto">
        <Summary />
      </main>
    </>
  );
}

export default App;
