import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/loading";

function App() {
  const [isLoad, setIsLoad] = useState(false);

  return (
    <>
     {!isLoad && <LoadingScreen onComplete={() => setIsLoad(true)} />}
    </>
  );
}

export default App;
