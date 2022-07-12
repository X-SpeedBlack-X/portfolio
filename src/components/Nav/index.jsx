import {
  HomeIcon,
  UserCircleIcon,
  DesktopComputerIcon,
  MailIcon,
  PresentationChartLineIcon,
  MenuAlt3Icon,
  XIcon
} from '@heroicons/react/outline'
import { GitFork, Star } from 'phosphor-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function Nav() {
  const [toggle, setToggle] = useState(false)
  return (
    <motion.header
      animate="visible"
      initial="hidden"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } }
      }}
      className="border-b border-b-gray-300/30"
    >
      <nav className=" flex items-center  justify-between m-2 h-16 p-7 text-lg ">
        <span className=" text-4xl text-purple-200  animate-pulse ">
          <Link to="/">&lt;IS &#47;&gt;</Link>
        </span>

        <button
          className="block w-12 h-12 lg:hidden "
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <XIcon className="text-white" />
          ) : (
            <MenuAlt3Icon className="text-white" />
          )}
        </button>

        <ul className="hidden lg:flex lg:items-center h-14 gap-9 p-6">
          <li className="hover:text-purple-200 transition-colors ">
            <Link to="/" className="flex gap-1">
              <HomeIcon className="w-6 h-6" /> Home
            </Link>
          </li>
          <li className="hover:text-purple-200 transition-colors">
            <Link to="/about" className="flex gap-1">
              <UserCircleIcon className="w-6 h-6" /> Sobre mim
            </Link>
          </li>
          <li className="hover:text-purple-200 transition-colors">
            <Link to="/projects" className="flex gap-1">
              <DesktopComputerIcon className="w-6 h-6" /> Projetos
            </Link>
          </li>
          <li className="hover:text-purple-200 transition-colors">
            <Link to="/experience" className="flex gap-1">
              {' '}
              <PresentationChartLineIcon className="w-6 h-6" /> Experiência
            </Link>
          </li>
          <li className="hover:text-purple-200 transition-colors">
            <Link to="/contact" className="flex gap-1">
              <MailIcon className="w-6 h-6" /> Contato
            </Link>
          </li>

          <i
            className="flex justify-center bg-purple-800 hover:bg-purple-200 
          hover:top-[-3px] relative transition-colors w-20 h-9  rounded-md"
          >
            <a
              href="https://github.com/x-speedblack-x/portfolio"
              className="flex items-center justify-center gap-1"
              target="_blank"
            >
              {' '}
              <GitFork size={25} weight="duotone" />
              <Star size={25} weight="duotone" />
            </a>
          </i>
        </ul>
      </nav>
    </motion.header>
  )
}
