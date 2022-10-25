import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import './styles/style.css'

function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
