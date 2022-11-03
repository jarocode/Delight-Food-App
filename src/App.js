import React from "react";
import { Provider } from "react-redux";
import { ReactQueryCacheProvider, QueryCache } from "react-query";

import AppRouter from "routes/Routes";
import store from "store/store";
import "./App.css";

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      retry: (failureCount, error) => {
        switch (error.response?.status) {
          case 400:
          case 401:
          case 403:
          case 404:
          case 405:
            return false;
          default:
            return failureCount < 1;
        }
      },
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <AppRouter />
      </ReactQueryCacheProvider>
    </Provider>
  );
};

export default App;
