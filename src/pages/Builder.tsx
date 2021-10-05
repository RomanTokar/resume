import React, { useRef } from 'react'
import { Button } from '@material-ui/core'
import { useAppContext } from '../contexts'
import { useHistory } from 'react-router-dom'

const Builder = () => {
  const ref = useRef<HTMLPreElement>(null)
  const { state, setState } = useAppContext()
  const history = useHistory()

  return (
    <>
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
            history.push('/resume')
            localStorage.setItem('state', ref.current.innerText)
          }}
        >
          Make up your resume
        </Button>
      </div>
    </>
  )
}

export default Builder
