import { Provider } from "react-redux";
import Layout from "./components/Layout/Layout";
import store from "./store/store";

function App() {
  return (
    <div className="App bg-white">
      <Provider store={store}>
        <Layout />
      </Provider>
    </div>
  );
}

export default App;
