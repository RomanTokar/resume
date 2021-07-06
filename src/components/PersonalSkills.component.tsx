import React from 'react'
import { Chip, makeStyles } from '@material-ui/core'
import { useAppContext } from '../contexts'
import { Section } from './Section.component'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    gap: theme.spacing(1),
    flexWrap: 'wrap',
  },
}))

export const PersonalSkills = () => {
  const { personalSkills } = useAppContext()
  const classes = useStyles()

  if (!personalSkills) return null

  return (
    <Section title={'Personal skills'}>
      <div className={classes.container}>
        {personalSkills.map(s => (
          <Chip key={s} label={s} color={'primary'} />
        ))}
      </div>
    </Section>
  )
}
