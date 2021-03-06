import {
  UserCircleIcon,
  DesktopComputerIcon,
  MailIcon,
  PresentationChartLineIcon,
  MenuAlt3Icon,
  XIcon,
  HomeIcon,
} from '@heroicons/react/outline';
import { GitFork, Star } from 'phosphor-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NAVLINKS = [
  {
    id: 1,
    href: '/',
    icon: HomeIcon,
    text: 'Home',
  },
  {
    id: 2,
    href: '/about',
    icon: UserCircleIcon,
    text: 'Sobre mim',
  },

  {
    id: 3,
    href: '/projects',
    icon: DesktopComputerIcon,
    text: 'Projetos',
  },

  {
    id: 4,
    href: '/experience',
    icon: PresentationChartLineIcon,
    text: 'Experiencia',
  },

  {
    id: 5,
    href: '/contact',
    icon: MailIcon,
    text: 'Contato',
  },
];
function NavLink({ href, icon: Icon, text, ...rest }) {
  return (
    <li className="hover:text-purple-200 hover:border-b-4 hover:border-b-purple-200 transition-colors">
      <Link to={href} className="flex gap-1" {...rest}>
        <Icon className="w-6 h-6" /> {text}
      </Link>
    </li>
  );
}

export function Nav() {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.header
      animate="visible"
      initial="hidden"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
      }}
      className="border-b border-b-gray-300/30"
    >
      {toggle && (
        <div className="flex flex-col h-2/4 lg:hidden z-50">
          <div className="flex items-center justify-center w-full h-3/5 bg-navBg fixed z-40 pt-6  mt-8 overflow-hidden ">
            <ul className="space-y-6 text-xl mt-4">
              {NAVLINKS.map((link) => (
                <NavLink
                  href={link.href}
                  icon={link.icon}
                  text={link.text}
                  key={link.id}
                  onClick={() => setToggle(!toggle)}
                />
              ))}
            </ul>
          </div>
        </div>
      )}

      <nav className="flex items-center justify-between fixed w-full h-16 px-7 text-lg opacity-95 z-50 bg-[url('assets/home-bg.jpg')] bg-cover bg-no-repeat">
        <span className=" text-4xl text-purple-200 animate-pulse">
          <Link to="/">&lt;IS &#47;&gt;</Link>
        </span>

        <button
          type="button"
          className="block w-12 h-12 lg:hidden "
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <XIcon className="text-purple-200" />
          ) : (
            <MenuAlt3Icon className="text-purple-200" />
          )}
        </button>

        <ul className="hidden lg:flex lg:items-center h-14 gap-9 p-6">
          {NAVLINKS.map((link) => (
            <NavLink
              href={link.href}
              icon={link.icon}
              text={link.text}
              key={link.id}
            />
          ))}

          <i
            className="flex justify-center bg-purple-800 hover:bg-purple-200
          hover:top-[-3px] relative transition-colors w-20 h-9  rounded-md"
          >
            <a
              href="https://github.com/x-speedblack-x/portfolio"
              className="flex items-center justify-center gap-1"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              <GitFork size={25} weight="duotone" />
              <Star size={25} weight="duotone" />
            </a>
          </i>
        </ul>
      </nav>
    </motion.header>
  );
}
