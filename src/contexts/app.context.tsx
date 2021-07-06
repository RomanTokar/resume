import { createContext, FC, useContext } from 'react'
import photo from '../assets/images/photo.jpg'

const AppContext = createContext<AppState>({} as AppState)

type AppState = {
  firstname: string
  lastname: string
  position: string
  status: string
  photo: string
  contacts: {
    email: string
    phone: string
    skype: string
    github: string
    location: string
    telegram: string
  }
  education: Array<{
    direction: string
    establishment: string
    time: { start: string; end: string }
    course: string
  }>
  profile: string
  technicalSkills: Array<string>
  personalSkills?: Array<string>
  workExperience?: Array<{
    position: string
    company: string
    time: { start: string; end: string }
    description: Array<string>
  }>
  interests: Array<string>
  languages: Array<{ language: string; level: string }>
}

export const useAppContext = () => useContext(AppContext)

export const AppProvider: FC = ({ children }) => {
  const state: AppState = {
    firstname: 'Roman',
    lastname: 'Tokar',
    position: 'Middle Frontend Developer',
    status: 'Every difficulty is a new opportunity',
    photo: photo,
    contacts: {
      email: 'romantokar.biz@gmail.com',
      phone: '+380984164051',
      location: 'Lviv, Ukraine',
      skype: 'live:.cid.ddf6b47bce43bd13',
      telegram: '@roman_tokar',
      github: 'RomanTokar',
    },
    profile:
      'Highly motivated and skilled front end developer with a great knowledge of web development. Programming knowledge enhanced by constant research and professional development. Ability to work well under stress and with short deadlines. Enjoys being part of a productive team; equally comfortable working on own initiative.',
    education: [
      {
        course: 'Third year student',
        direction: 'Computer Science',
        time: {
          start: '09/2019',
          end: 'Present',
        },
        establishment: 'Lviv Politechnic National University',
      },
    ],
    interests: ['playing volleyball', 'learning English', 'keeping fit'],
    languages: [
      {
        language: 'Ukrainian',
        level: 'Native',
      },
      {
        language: 'Russian',
        level: 'Native',
      },
      {
        language: 'English',
        level: 'Upper-Intermediate',
      },
    ],
    technicalSkills: [
      'JavaScript',
      'Typescript',
      'SASS',
      'React',
      'React-JSS',
      'React-virtualized',
      'React-window',
      'Styled-components',
      'Storybook',
      'NextJS',
      'Git',
      'AWS-Cognito',
      'AWS-S3',
      'Firebase',
      'Redux',
      'Redux-toolkit',
      'RxJS',
      'Formik',
      'React-hook-form',
      'Yup',
      'Material UI',
      'React-beautiful-dnd',
    ],
    personalSkills: ['hard-working', 'attention to detail', 'perseverance'],
    workExperience: [
      {
        time: { start: '12/2020', end: 'Present' },
        description: [
          `I was working on restaurant project which was written on NextJS in conjunction with redux`,
          `I was working mostly on monorepo project. We create reusable components and test them in storybook. We also create micro frontend which we use them in several our general projects`,
        ],
        company: 'Inforce',
        position: 'Junior Frontend Developer',
      },
    ],
  }

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>
}
