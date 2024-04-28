import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  // FaStackOverflow,
  FaTwitter,
  // FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/Ghanaram04',
    icon: FaTwitter,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/b_u_n_n_y14/',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ghanaram-tandan-549903290',
    icon: FaLinkedin,
  },
  // {
  //   label: 'StackOverflow',
  //   href: 'https://stackoverflow.com/users/3867490/keysl',
  //   icon: FaStackOverflow,
  // },
  // {
  //   label: 'Youtube',
  //   href: 'https://www.youtube.com/channel/UCV-MiUVsKJrKJKKfUK58nhg',
  //   icon: FaYoutube,
  // },
  {
    label: 'Github',
    href: 'https://github.com/ghanaram',
    icon: FaGithub,
  },
  {
    label: 'Dev.to',
    href: 'https://dev.to/ghanaram',
    icon: FaDev,
  },
]
