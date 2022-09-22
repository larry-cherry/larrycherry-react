import React, { useEffect } from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log("rendered");
  });

  return <App />;
}

const container = document.getElementById("app") as HTMLElement;
const root = createRoot(container);
root.render(<AppWithCallbackAfterRender />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
