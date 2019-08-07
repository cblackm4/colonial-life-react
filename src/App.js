import React from "react";
import logo from "./assets/logos/logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./views/Home";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header img={logo} />
            <Home />
            <Footer
                text="We look forward to sharing the Colonial Life client portal with you soon!"
                footnote="*Some activities are unavailable on mobile devices"
            />
        </div>
    );
}

export default App;
