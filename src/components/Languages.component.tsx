import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { useAppContext } from '../contexts'
import { Section } from './Section.component'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    gap: theme.spacing(1),
    flexWrap: 'wrap',
    '& > *': {
      flex: '1 1 45%',
    },
  },
}))

export const Languages = () => {
  const { languages } = useAppContext()
  const classes = useStyles()

  return (
    <Section title={'Languages'}>
      <div className={classes.container}>
        {languages.map(l => (
          <div key={l.language}>
            <Typography>{l.language}</Typography>
            <Typography color={'textSecondary'}>{l.level}</Typography>
          </div>
        ))}
      </div>
    </Section>
  )
}
