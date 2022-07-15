import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';
import { motion } from 'framer-motion';

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

      <div className="flex justify-center gap-5 mt-4 ">
        <i className="flex justify-center items-center transition-colors  bg-purple-500 hover:bg-black-200 rounded-full w-11 h-11">
          <a href="https://github.com/x-speedblack-x">
            {' '}
            <GithubLogo size={32} weight="regular" />
          </a>
        </i>

        <i className="flex justify-center items-center transition-colors bg-purple-500 hover:bg-blue-600 rounded-full w-11 h-11">
          <a href="https://linkedin.com/in/isaque-de-sousa">
            <LinkedinLogo size={32} weight="regular" />
          </a>
        </i>

        <i className="flex justify-center items-center transition-colors bg-purple-500 hover:bg-instagramBg rounded-full w-11 h-11">
          <a href="https://instagram.com/_isaque.s_">
            <InstagramLogo size={32} weight="regular" />
          </a>
        </i>
      </div>
    </motion.div>
  );
}
