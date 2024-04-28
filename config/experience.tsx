import { Link } from '@chakra-ui/react'

export type Company = 'Deloitte' | 'SCG' | 'Blotocol'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Deloitte: {
    name: 'national informatics centre chhattisgarh',
    longName: 'Deloitte Consulthing Phils. Delivery Center',
    subDetail: '',
    url: 'https://www.nic.in/',
    position: 'project trainee (System Design and Development)',
    duration: 'Jan 2023 - july 2024',
    logo: {
      light: '/worked_at_logos/NIC/nic_logo.png',
      dark: '/worked_at_logos/NIC/nic_logo.png',
    },
    roles: [
      <>
        Contributed to the design and development of a comprehensive Akansha portal Web Application is a comprehensive platform designed to bridge the gap between job seekers Candidates and employers,
        providing a seamless and user- friendly experience for both parties.
        The application aims to streamline the job search and recruitment process, offering a centralized hub for job listings, candidate profile and application management.
      </>,
    ],
  }
}

export const ExperiencesList = [
  Experiences.Deloitte,
]
