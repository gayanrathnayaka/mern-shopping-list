import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavBar from "./components/AppNavBar";
import ShoppingList from "./components/ShoppingList";
import AddItem from "./components/AddItem";
import { Provider } from "react-redux";
import store from "./store";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <AppNavBar />
          <AddItem />
          <ShoppingList />
        </header>
      </div>
    </Provider>
  );
}

export default App;
