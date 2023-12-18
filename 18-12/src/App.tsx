import './App.css'
import {
  BrowserRouter as Router,
  Routes as Routes,
  Route as Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {routes} from "./helpers/routing.tsx";

function App() {

  return (
      <Router>
          <Navbar />
        <Routes>
            {routes.map((route) => (
                <Route
                key={route.path}
                path={route.path}
                element={route.element}
                />
                ))}
        </Routes>
          <Footer />
      </Router>
  )
}

export default App
