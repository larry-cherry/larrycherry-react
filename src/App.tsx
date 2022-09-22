import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./features/Home/Home";
import { Blog } from "./features/Blog/Blog";
import { Projects } from "./features/Projects/Projects";
import Particles from "react-particles-js";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/drive/folders/1NL5DSHZ5RGUojYmaOZXdLPWZj7th9X9U?usp=sharing"
                    target="_blank"
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/Projects">Projects</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Particles className="Particles" />
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/projects" component={Projects} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
