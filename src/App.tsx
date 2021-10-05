import React, { useRef } from 'react'
import {
  Button,
  Container,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core'
import { Header } from './components/Header.component'
import { Main } from './components/Main.component'
import { teal } from '@material-ui/core/colors'
import { useAppContext } from './contexts'

function App() {
  const theme = createMuiTheme({ palette: { primary: { main: teal[500] } } })
  const ref = useRef<HTMLPreElement>(null)
  const { state, setState } = useAppContext()

  return (
    <MuiThemeProvider theme={theme}>
      <pre contentEditable style={{ margin: 20 }} ref={ref}>
        {JSON.stringify(state, null, 4)}
      </pre>
      <div
        style={{
          margin: 20,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          color={'primary'}
          variant={'contained'}
          onClick={() => {
            if (!ref.current) return

            setState(JSON.parse(ref.current.innerText))
          }}
        >
          Make up your resume
        </Button>
      </div>
      <Container>
        <Header />
        <Main />
      </Container>
    </MuiThemeProvider>
  )
}

export default App
