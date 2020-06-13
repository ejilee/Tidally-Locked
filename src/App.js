import React from "react";
import { ContextProvider } from './context';
import Theme from "./theme";
import { Header, Footer } from "./Layout";
import Viewer from "./Viewer";
import Interface from "./Interface";
import "./App.scss";

function App() {

  return (
    <ContextProvider>
      <Theme>
        <div className="app">
          <Header />
          <Viewer />
          <Interface />
          <Footer />
        </div>
      </Theme>
    </ContextProvider>
  );
}

export default App;
