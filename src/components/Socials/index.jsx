import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const SOCIALLINKS = [
  {
    id: 1,
    icon: GithubLogo,
    href: 'https://github.com/x-speedblack-x',
    target: '_blank',
    variant: 'black',
  },

  {
    id: 2,
    icon: LinkedinLogo,
    href: 'https://linkedin.com/in/isaque-de-sousa',
    target: '_blank',
  },

  {
    id: 2,
    icon: InstagramLogo,
    href: 'https://instagram.com/_isaque.s_',
    target: '_blank',
    variant: 'secondary',
  },
];

const Variants = {
  primary: 'hover:bg-blue-600',
  secondary: 'hover:bg-instagramBg ',
  black: 'hover:bg-black-200',
};

function SocialLinks({ icon: Icon, href, target, variant = 'primary' }) {
  return (
    <i
      className={clsx(
        'flex justify-center items-center transition-colors  bg-purple-500 rounded-full w-11 h-11',
        Variants[variant]
      )}
    >
      <a href={href} target={target}>
        <Icon size={32} weight="regular" />
      </a>
    </i>
  );
}

export function Socials() {
  return (
    <motion.div
      animate="visible"
      initial="hidden"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
      }}
      className=" flex flex-col text-center justify-center mt-11  "
    >
      <h2 className="text-3xl">Como me encontrar</h2>

      <p>
        Sinta-se à vontade para se
        <span className="text-purple-500"> conectar </span>comigo
      </p>

      <div className="flex justify-center gap-5 mt-4 hover:backgro ">
        {SOCIALLINKS.map((social) => (
          <SocialLinks
            key={social.id}
            icon={social.icon}
            href={social.href}
            target={social.target}
            variant={social.variant}
          />
        ))}
      </div>
    </motion.div>
  );
}
