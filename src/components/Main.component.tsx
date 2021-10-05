import React from 'react'
import { makeStyles } from '@material-ui/core'
import { TechnicalSkills } from './TechnicalSkills.component'
import { Education } from './Education.component'
import { Languages } from './Languages.component'
import { Interests } from './Interests.component'
import { WorkExperience } from './WorkExperience.component'
import { PersonalSkills } from './PersonalSkills.component'
import { Profile } from './Profile.component'

const useStyles = makeStyles(theme => ({
  main: {
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: theme.spacing(2),
  },
}))

export const Main = () => {
  const classes = useStyles()

  return (
    <main className={classes.main}>
      <div>
        <Profile />
        <Education />
        <WorkExperience />
        <Languages />
      </div>
      <div>
        <TechnicalSkills />
        <PersonalSkills />
        <Interests />
      </div>
    </main>
  )
}
