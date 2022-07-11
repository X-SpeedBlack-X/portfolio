import { Socials } from '../Socials'
import { Typewriter } from '../TypeWrite'
import { motion } from 'framer-motion'
import { Footer } from '../Footer'

export function HomeContainer() {
  return (
    <>
      <motion.div
        animate="visible"
        initial="hidden"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1 } }
        }}
        className="lg:flex mt-16 lg:justify-between text-center items-center"
      >
        <div className="flex flex-col p-[45px]">
          <div className="lg:flex  mb-2 text-4xl gap-2 ">
            <h1>Hello, Friend </h1>
            <span className="inline-block  animate-wave">👋🏼</span>
          </div>

          <div className="lg:flex text-4xl gap-2">
            <h2>Eu sou</h2>
            <strong className="text-purple-500">Isaque de Sousa</strong>
          </div>

          <p className="mt-9">
            <Typewriter />
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="/assets/home-main.svg"
            alt="image de uma pessoa programando"
            className="w-64 h-64 lg:w-80 lg:h-80 mt-9"
          />
        </div>
      </motion.div>

      <motion.div
        animate="visible"
        initial="hidden"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1 } }
        }}
        className="flex flex-col lg:flex-row items-center lg:justify-around p-[45px] mt-36  "
      >
        <div className="space-y-4 text-lg w-2/3 ">
          <h2 className="uppercase text-center text-4xl">
            Deixa eu me<span className="text-purple-500"> apresentar</span> para
            vocês
          </h2>

          <p>
            {' '}
            Eu conheci e me apaixonei pela programação quando eu estava no meu
            ensino. E deste então não consigo me ver sem ela. Fazer o quê, né?
            🤷‍♂️
          </p>

          <p>
            Eu amo as linguagens e tenho interesse:{' '}
            <span className="text-purple-500">
              JavaScript, Python, HTML, CSS e PHP{' '}
            </span>
          </p>
          <p>
            Sempre estou utilizando meus{' '}
            <span className="text-purple-500">frameworks</span> e minhas{' '}
            <span className="text-purple-500">biblioteca</span> preferidas:
            <span className="text-purple-500">
              {' '}
              ReactJS, React Native, NextJS, TailwindCSS, Chakra UI, Styled
              Components
            </span>
          </p>
        </div>

        <div className="flex justify-center items-center lg:mt-0 mt-12">
          <img
            src="assets/avatar.png"
            alt="foto do avatar"
            className="w-44 h-44 rounded-full "
          />
        </div>
      </motion.div>
      <Socials />
      <Footer />
    </>
  )
}
