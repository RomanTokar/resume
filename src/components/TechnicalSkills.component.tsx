import React from "react";
import { Chip, makeStyles } from "@material-ui/core";
import { useAppContext } from "../contexts";
import { Section } from "./Section.component";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    gap: theme.spacing(1),
    flexWrap: 'wrap',
  },
}))

export const TechnicalSkills = () => {
  const { technicalSkills } = useAppContext()
  const classes = useStyles()

  return (
    <Section title={'Technical skills'}>
      <div className={classes.container}>
        {technicalSkills.map(s => (
          <Chip key={s} label={s} color={'primary'} />
        ))}
      </div>
    </Section>
  )
}
