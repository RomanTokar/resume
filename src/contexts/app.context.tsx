import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import photo from '../assets/images/photo.jpg'

const AppContext = createContext<{
  state: AppState
  setState: Dispatch<SetStateAction<AppState>>
}>({} as any)

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
  const [state, setState] = useState<AppState>(() => ({
    firstname: 'Roman',
    lastname: 'Tokar',
    position: 'Middle Fullstack Developer',
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
    interests: ['playing volleyball', 'learning English', 'going to a gym'],
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
      'HTML',
      'CSS',
      'JavaScript',
      'Typescript',
      'Rust',
      'React',
      'Svelte',
      'React-JSS',
      'Styled components',
      'Redux and Redux-Toolkit',
      'React query',
      'Mobx',
      'RxJS',
      'Formik',
      'React-hook-form',
      'Yup',
      'Material UI',
      'Ant Design',
      'Storybook',
      'NextJS',
      'Node.js',
      'Express.js',
      'NestJS',
      'MongoDB',
      'MySQL',
      'Rest API',
      'GraphQL',
      'Unit and integration testing',
      'Git and Github',
      'Docker',
      'AWS',
      'Firebase',
    ],
    personalSkills: [
      'hard-working',
      'attention to detail',
      'perseverance',
      'time management',
      'problem-solving',
    ],
    workExperience: [
      {
        time: { start: '08/2020', end: '08/2021' },
        description: [
          'React, React-JSS, Storybook, Microfrontend, Writing React UI components',
        ],
        company: 'Inforce',
        position: 'Junior Frontend Developer',
      },
      {
        time: { start: '09/2021', end: 'Present' },
        description: ['React, Node.js, Antd, Mysql, Docker'],
        company: 'Ukeess',
        position: 'Middle Fullstack Developer',
      },
    ],
  }))

  useEffect(() => {
    // const state = localStorage.getItem('state')
    //
    // if (!state) return
    //
    // setState(JSON.parse(state))
  }, [])

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  )
}
