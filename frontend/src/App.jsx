import { MantineProvider, Container } from "@mantine/core";
import Header from "./components/header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Header />
      <Container className="my-2">
        <Outlet />
      </Container>
    </MantineProvider>
  );
};

export default App;
