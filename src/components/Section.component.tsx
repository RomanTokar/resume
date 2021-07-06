import React, { FC } from 'react'
import { makeStyles, Typography } from '@material-ui/core'

type SectionProps = {
  title: string
}

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    marginBottom: theme.spacing(1),
  },
  content: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  title: {
    fontWeight: theme.typography.fontWeightBold
  }
}))

export const Section: FC<SectionProps> = ({
  children,
  title,
}) => {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <Typography variant={'h5'} className={classes.title}>{title}</Typography>
      <div className={classes.content}>{children}</div>
    </section>
  )
}
