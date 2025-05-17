import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import moment from "moment";
import 'moment/locale/ru';
import "swiper/swiper-bundle.min.css";
import "material-icons/iconfont/material-icons.css";
import App from "./components/app/App";
import './i18n';
import { I18nextProvider } from 'react-i18next';


try {
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );


} catch(e) {
  // TraceKit.report(e);
}

