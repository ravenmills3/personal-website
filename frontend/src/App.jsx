import { MantineProvider } from "@mantine/core";
import AppNav from "./components/header";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/errorBoundary";
import AnimatedRoutes from "./routes";

const App = () => {
  return (
    <MantineProvider
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "light", primaryColor: "pink" }}
    >
      <ErrorBoundary>
        <BrowserRouter>
          <AppNav />
          <AnimatedRoutes />
        </BrowserRouter>
      </ErrorBoundary>
    </MantineProvider>
  );
};

export default App;
