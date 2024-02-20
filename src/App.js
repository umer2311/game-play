import "./styles.css";
import "./index.css";
import Home from "./container/Home";
import News from "./container/News";
import Player from "./container/Player";
import Stream from "./container/Stream";
import Team from "./container/Team";
import Tournament from "./container/Tournament";
import Login from "./container/Login";
import Register from "./container/Register";
//import Admin from "./container/Admin/Admin";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import { Fade } from "react-reveal";

import { BrowserRouter , Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/news" element={<News />} />
         
          <Route path="/teams" element={
            <Team />} />
          
          <Route path="/players" element={
            <Player />} />
         
          <Route path="/tournaments" element={
            <Tournament />} />
         
          {/* <Route path="/admin">
            <Admin />
          </Route> */}
          <Route path="/streams" element={
            <Stream />} />
        
          <Route path="/login" element={
            <Login /> } />
        
          <Route path="/register" element={
            <Register />} />
          <Route path="/home" element={
            <Home />} />
         
          <Route path="/" element={
            <Login /> } />
        
        </Routes>
        <Fade bottom duration={2000}>
          <Footer />
        </Fade>
      </BrowserRouter>
    </div>
  );
}
