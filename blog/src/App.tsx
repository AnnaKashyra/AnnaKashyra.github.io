import "./App.css";


import Footer from "./components/Footer";
// import Blog from "./components/Blog";
import Home from "./pages/home";

function App() {
  return (
    <>  
      {/* <Blog /> */}
      <div className="flex-container">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
