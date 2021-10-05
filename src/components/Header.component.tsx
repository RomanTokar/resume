import React from 'react'
import clsx from 'clsx'
import { Divider, makeStyles, SvgIcon, Typography } from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import GitHubIcon from '@material-ui/icons/GitHub'
import { useAppContext } from '../contexts'
import { ReactComponent as SkypeIcon } from '../assets/images/skype.svg'

const useStyles = makeStyles(theme => ({
  header: {
    marginBottom: theme.spacing(2),
    position: 'relative',
  },
  headerContent: {
    display: 'flex',
    gap: theme.spacing(1),
    margin: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
  },
  fluidElement: {
    flex: 1,
  },
  column1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  column2: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    borderRadius: '50%',
    border: `4px solid ${theme.palette.primary.main}`,
    objectPosition: 'center',
    objectFit: 'cover',
  },
  column3: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: `calc(${theme.spacing(1)}px / 2)`,
  },
  contact: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
}))

export const Header = () => {
  const classes = useStyles()
  const {
    state: { firstname, lastname, status, position, photo, contacts },
  } = useAppContext()

  return (
    <header className={classes.header}>
      <div className={classes.headerContent}>
        <div className={clsx(classes.fluidElement, classes.column1)}>
          <Typography variant={'h4'}>{`${firstname} ${lastname}`}</Typography>
          <Typography color={'primary'} variant={'h6'}>
            {position}
          </Typography>
          <Typography variant={'subtitle1'} color={'textSecondary'}>
            {status}
          </Typography>
        </div>
        <img className={classes.column2} src={photo} alt={'avatar'} />
        <div className={clsx(classes.fluidElement, classes.column3)}>
          <Typography className={classes.contact}>
            {contacts.email}
            <EmailIcon />
          </Typography>
          <Typography className={classes.contact}>
            {contacts.phone}
            <PhoneAndroidIcon />
          </Typography>
          <Typography className={classes.contact}>
            {contacts.location}
            <LocationOnIcon />
          </Typography>
          <Typography className={classes.contact}>
            {contacts.github}
            <GitHubIcon />
          </Typography>
          <Typography className={classes.contact}>
            {contacts.skype}
            <SvgIcon component={SkypeIcon} />
          </Typography>
        </div>
      </div>
      <Divider variant={'middle'} />
    </header>
  )
}
