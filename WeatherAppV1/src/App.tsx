import React from "react";
import { Provider } from "react-redux";
import WeatherPage from "./components/WeatherPage";
import store from "./state/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <WeatherPage />
      </div>
    </Provider>
  );
};

export default App;
