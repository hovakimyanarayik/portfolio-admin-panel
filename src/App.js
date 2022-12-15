import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Routes from "./Routes";

import { Provider } from "react-redux";
import store from "./store";
import { useEffect } from "react";


function App() {

  useEffect(() => {
    document.title = 'Admin panel'

    // eslint-disable-next-line
  },[])
  
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
