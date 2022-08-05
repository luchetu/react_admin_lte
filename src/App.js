import Header from "./components/partials/Header";
import Home from "./components/Home";
import SideNav from "./components/partials/SideNav";
import Footer from "./components/partials/SideNav";
import Routes from "./routes/RoutesComponent";
import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideNav />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
