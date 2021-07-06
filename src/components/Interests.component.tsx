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

export const Interests = () => {
  const { interests } = useAppContext()
  const classes = useStyles()

  return (
    <Section title={'Interests'}>
      <div className={classes.container}>
        {interests.map(i => (
          <Chip key={i} label={i} color={'primary'} />
        ))}
      </div>
    </Section>
  )
}
