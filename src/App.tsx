import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { store } from "./store"; 
import { Provider } from 'react-redux'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}
