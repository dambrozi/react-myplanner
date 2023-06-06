// import Tweet from './Tweet' DEFAULT EXPORT
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Router } from "./Router";
import { AppContextProvider } from "./contexts/AppContext";

function App() {
  /*return (
    <div>
      <Header />
      <Home />
    </div>
  );*/

  return (
    <AppContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
