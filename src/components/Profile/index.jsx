import { motion } from 'framer-motion'
import { HandPointing } from 'phosphor-react'
import { Footer } from '../Footer'
import { SkillCard } from '../SkillsCards'
import { SkillCalendar } from '../SkillsCards/SkillCalendar'
import { SkillTools } from '../SkillsCards/SkillTools'

export function Profile({ icon, textIcon }) {
  return (
    <>
      <motion.div
        animate="translateEnd"
        initial="translateInitial"
        transition={{ duration: 0.5 }}
        variants={{
          translateEnd: { translateY: 0 },
          translateInitial: { translateY: 290 }
        }}
        className="flex flex-col lg:flex-row items-center lg:justify-around p-[45px]"
      >
        <div className="space-y-4 text-lg w-[90%]">
          <h2 className="text-4xl text-center p-7">
            Sobre <span className="text-purple-200">mim</span>
          </h2>

          <p className="text-lg w-2/3">
            Olá a todos, Eu sou{' '}
            <span className=" text-purple-200">Isaque de sousa</span>. Moro em
            Fortaleza - CE. Sou um dev junior que busca sempre aprender e a
            melhorar minha habilidades de programação.
          </p>

          <div>
            <p>Coisas que eu gosto de fazer:</p>
            <i className="flex items-center gap-1 ">
              {(icon = <HandPointing weight="duotone" className="rotate-90" />)}
              {(textIcon = 'Gosto de jogar')}
            </i>
            <i className="flex items-center gap-1">
              {(icon = <HandPointing weight="duotone" className="rotate-90" />)}
              {(textIcon = 'Estudar programação')}
            </i>
            <i className="flex items-center gap-1">
              {(icon = <HandPointing weight="duotone" className="rotate-90" />)}
              {(textIcon = 'Assistir filmes e séries')}
            </i>
          </div>
        </div>

        <div>
          <img
            src="assets/about.png"
            alt=""
            className="w-64 h-64 lg:w-80 lg:h-200 mt-9"
          />
        </div>
      </motion.div>

      <motion.div
        animate="translateEnd"
        initial="translateInitial"
        transition={{ duration: 0.5 }}
        variants={{
          translateEnd: { translateY: 0 },
          translateInitial: { translateY: 290 }
        }}
      >
        <div className="flex justify-center text-4xl mt-40 gap-2">
          <h2 className="flex gap-2">
            Minhas
            <span className="text-purple-200">skills</span>
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <SkillCard />
        </div>

        <div className="flex justify-center text-4xl mt-40 gap-2">
          <h2>
            <span className="text-purple-200">Ferramentas</span> de uso
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <SkillTools />{' '}
        </div>

        <div className="flex justify-center text-4xl mt-40 gap-2">
          <h2 className="flex gap-2 mb-5">
            Dias dos
            <span className="text-purple-200">commits</span>
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <SkillCalendar />
        </div>
      </motion.div>

      <Footer />
    </>
  )
}
