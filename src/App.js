import { useState } from "react";
import "./App.css";
import FormModal from "./Components/FormModal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="App">
      <h2>User Details Modal</h2>
      <button onClick={() => setModalOpen(true)}>Open Form</button>
      {
        modalOpen && <FormModal setModalOpen={setModalOpen} />
      }
    </div>
  );
}

export default App;
