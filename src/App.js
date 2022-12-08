import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Routes from "./Routes";

import { Provider } from "react-redux";
import store from "./store";
import useProjects from "./hooks/useProjects";
import { useEffect } from "react";

function App() {
  
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <Routes />
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
