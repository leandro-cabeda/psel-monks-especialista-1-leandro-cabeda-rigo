import { DataProvider } from "./contexts/DataContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <DataProvider>
      <GlobalStyle />
      <Navbar />
      <Home />
      <Footer />
    </DataProvider>
  );
}

export default App;
