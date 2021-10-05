import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import photo from '../assets/images/photo_2.jpg'

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

const initialState = {
  profile:
    'Motivated and highly productive Backend Developer with a research background. Detail-oriented with strong skills in multi-tasking and efficient management of day-to-day office operations. Adept at building and maintaining effective working relationships with co-workers and clients through interpersonal skills.',
  firstname: 'Denis',
  lastname: 'Starzhevskyi',
  position: 'Junior Backend Developer',
  status: `I'm not failed... My success is just POSTPONED.`,
  photo,
  contacts: {
    email: 'denis.star02@gmail.com',
    phone: '+380957932859',
    location: 'Lviv, Ukraine',
    telegram: '@den_is_star',
    github: 'your_kovboy',
    skype: 'live:denis.star_3',
  },
  education: [
    {
      course: 'Third year student',
      direction: 'Computer Science',
      time: {
        start: '09/2019',
        end: 'Present',
      },
      establishment: 'Ivan Franko National University of Lviv',
    },
  ],
  interests: [
    'playing football',
    'playing the guitar',
    'keeping fit',
    'fishing',
    'skateboarding',
  ],
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
      level: 'Intermediate',
    },
  ],
  personalSkills: [
    'Interpersonal skills',
    'Adaptability',
    'Active listening',
    'Time management',
    'Problem-solving',
    'Transferable skills',
  ],
  technicalSkills: [
    'OOP',
    'Java Core',
    'Java Collections',
    'Multithreading',
    'Maven',
    'Gradle',
    'SQL',
    'MySQL',
    'JDBC',
    'Spring Boot',
    'Spring MVC',
    'Spring JPA',
    'Spring Security',
    'Hibernate',
    'AOP',
    'HTML',
    'CSS',
    'Javascript',
  ],
}
export const AppProvider: FC = ({ children }) => {
  const [state, setState] = useState<AppState>(initialState)
  // const state: AppState = {
  //   profile:
  //     'Motivated and highly productive Backend Developer with a research background. Detail-oriented with strong skills in multi-tasking and efficient management of day-to-day office operations. Adept at building and maintaining effective working relationships with co-workers and clients through interpersonal skills.',
  //   firstname: 'Denis',
  //   lastname: 'Starzhevskyi',
  //   position: 'Junior Backend Developer',
  //   status: `I'm not failed... My success is just POSTPONED.`,
  //   photo,
  //   contacts: {
  //     email: 'denis.star02@gmail.com',
  //     phone: '+380957932859',
  //     location: 'Lviv, Ukraine',
  //     telegram: '@den_is_star',
  //     github: 'your_kovboy',
  //     skype: 'live:denis.star_3',
  //   },
  //   education: [
  //     {
  //       course: 'Third year student',
  //       direction: 'Computer Science',
  //       time: {
  //         start: '09/2019',
  //         end: 'Present',
  //       },
  //       establishment: 'Ivan Franko National University of Lviv',
  //     },
  //   ],
  //   interests: [
  //     'playing football',
  //     'playing the guitar',
  //     'keeping fit',
  //     'fishing',
  //     'skateboarding',
  //   ],
  //   languages: [
  //     {
  //       language: 'Ukrainian',
  //       level: 'Native',
  //     },
  //     {
  //       language: 'Russian',
  //       level: 'Native',
  //     },
  //     {
  //       language: 'English',
  //       level: 'Intermediate',
  //     },
  //   ],
  //   personalSkills: [
  //     'Interpersonal skills',
  //     'Adaptability',
  //     'Active listening',
  //     'Time management',
  //     'Problem-solving',
  //     'Transferable skills',
  //   ],
  //   technicalSkills: [
  //     'OOP',
  //     'Java Core',
  //     'Java Collections',
  //     'Multithreading',
  //     'Maven',
  //     'Gradle',
  //     'SQL',
  //     'MySQL',
  //     'JDBC',
  //     'Spring Boot',
  //     'Spring MVC',
  //     'Spring JPA',
  //     'Spring Security',
  //     'Hibernate',
  //     'AOP',
  //     'HTML',
  //     'CSS',
  //     'Javascript',
  //   ],
  // }
  // const state: AppState = {
  //   firstname: 'Roman',
  //   lastname: 'Tokar',
  //   position: 'Middle Frontend Developer',
  //   status: 'Every difficulty is a new opportunity',
  //   photo: photo,
  //   contacts: {
  //     email: 'romantokar.biz@gmail.com',
  //     phone: '+380984164051',
  //     location: 'Lviv, Ukraine',
  //     skype: 'live:.cid.ddf6b47bce43bd13',
  //     telegram: '@roman_tokar',
  //     github: 'RomanTokar',
  //   },
  //   profile:
  //     'Highly motivated and skilled front end developer with a great knowledge of web development. Programming knowledge enhanced by constant research and professional development. Ability to work well under stress and with short deadlines. Enjoys being part of a productive team; equally comfortable working on own initiative.',
  //   education: [
  //     {
  //       course: 'Third year student',
  //       direction: 'Computer Science',
  //       time: {
  //         start: '09/2019',
  //         end: 'Present',
  //       },
  //       establishment: 'Lviv Politechnic National University',
  //     },
  //   ],
  //   interests: ['playing volleyball', 'learning English', 'keeping fit'],
  //   languages: [
  //     {
  //       language: 'Ukrainian',
  //       level: 'Native',
  //     },
  //     {
  //       language: 'Russian',
  //       level: 'Native',
  //     },
  //     {
  //       language: 'English',
  //       level: 'Upper-Intermediate',
  //     },
  //   ],
  //   technicalSkills: [
  //     'JavaScript',
  //     'Typescript',
  //     'SASS',
  //     'React',
  //     'React-JSS',
  //     'React-virtualized',
  //     'React-window',
  //     'Styled-components',
  //     'Storybook',
  //     'NextJS',
  //     'Git',
  //     'AWS-Cognito',
  //     'AWS-S3',
  //     'Firebase',
  //     'Redux',
  //     'Redux-toolkit',
  //     'RxJS',
  //     'Formik',
  //     'React-hook-form',
  //     'Yup',
  //     'Material UI',
  //     'React-beautiful-dnd',
  //   ],
  //   personalSkills: ['hard-working', 'attention to detail', 'perseverance', 'time management', 'problem-solving'],
  //   workExperience: [
  //     {
  //       time: { start: '12/2020', end: 'Present' },
  //       description: [
  //         `I was working on restaurant project which was written on NextJS in conjunction with redux`,
  //         `I was working mostly on monorepo project. We create reusable components and test them in storybook. We also create micro frontend which we use them in several our general projects`,
  //       ],
  //       company: 'Inforce',
  //       position: 'Junior Frontend Developer',
  //     },
  //   ],
  // }

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  )
}
