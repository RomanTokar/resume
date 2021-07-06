import React from "react";
import { Container, createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { Header } from "./components/Header.component";
import { Main } from "./components/Main.component";
import { teal } from "@material-ui/core/colors";

function App() {
  const theme = createMuiTheme({ palette: { primary: { main: teal[500] } } })

  return (
    <MuiThemeProvider theme={theme}>
      <Container>
        <Header />
        <Main />
      </Container>
    </MuiThemeProvider>
  )
}

export default App
