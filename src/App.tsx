import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { teal } from '@material-ui/core/colors'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Builder from './pages/Builder'
import Resume from './pages/Resume'

function App() {
  const theme = createMuiTheme({ palette: { primary: { main: teal[500] } } })

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Builder} />
          <Route exact path={'/resume'} component={Resume} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

export default App
