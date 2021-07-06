import React from 'react'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core'
import { useAppContext } from '../contexts'
import { Section } from './Section.component'
import Brightness1Icon from '@material-ui/icons/Brightness1'

export const WorkExperience = () => {
  const { workExperience } = useAppContext()

  if (!workExperience) return null

  return (
    <Section title={'Work experience'}>
      {workExperience.map(e => (
        <div key={e.company}>
          <Typography variant={'h6'}>{e.company}</Typography>
          <Typography variant={'subtitle1'}>{e.position}</Typography>
          <Typography
            color={'primary'}
            variant={'subtitle2'}
          >{`${e.time.start} - ${e.time.end}`}</Typography>
          <List disablePadding dense>
            {e.description.map(d => (
              <ListItem key={d} alignItems={'flex-start'} disableGutters dense>
                <ListItemIcon style={{minWidth: '1em'}}>
                  <Brightness1Icon color={'primary'} style={{fontSize: '0.5em'}}/>
                </ListItemIcon>
                <ListItemText primary={d} />
              </ListItem>
            ))}
          </List>
        </div>
      ))}
    </Section>
  )
}
