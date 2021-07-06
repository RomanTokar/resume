import React from 'react'
import { Typography } from '@material-ui/core'
import { useAppContext } from '../contexts'
import { Section } from './Section.component'

export const Education = () => {
  const { education } = useAppContext()

  return (
    <Section title={'Education'}>
      {education.map(e => (
        <div key={e.establishment}>
          <Typography variant={'h6'}>{e.direction}</Typography>
          <Typography variant={'subtitle1'}>{e.establishment}</Typography>
          <Typography
            color={'primary'}
            variant={'subtitle2'}
          >{`${e.time.start} - ${e.time.end}`}</Typography>
          <Typography variant={'body2'}>{e.course}</Typography>
        </div>
      ))}
    </Section>
  )
}
