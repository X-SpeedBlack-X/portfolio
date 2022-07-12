import { LocationMarkerIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import { HandPointing } from 'phosphor-react'
import { Footer } from '../Footer'
import { SkillCard } from '../SkillCard'

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

          <div className="">
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
        <h1 className="flex justify-center text-4xl mt-40 gap-2">
          Minhas
          <span className="text-purple-200">skills</span>
        </h1>
        <div className="flex justify-center">
          <SkillCard />
        </div>
      </motion.div>

      <Footer />

      {/*     <q className="mt-40">
        Se você for tentar, tente de verdade. Caso contrário nem comece. Isso
        pode significar perder tudo. E talvez até sua cabeça. Isso pode
        significar não comer nada por três ou quatro dias. Isso pode significar
        congelar num banco de praça. Isso pode significar escárnio, isolamento.
        Isolamento é uma dádiva. Todo o resto é teste da sua resistência. De
        quanto você realmente quer fazer isso. E você vai fazer isso,
        enfrentando rejeições das piores espécies. E isso será melhor do que
        qualquer coisa que você já imaginou. Se você for tentar, tente de
        verdade. Não há outro sentimento melhor que isso. Você estará sozinho
        com os deuses. E as noites vão arder em chamas. Você levará sua vida
        direto para a risada perfeita. Esta é a única briga boa que existe.
      </q> */}
    </>
  )
}

/* 
      <motion.div
        animate="translateEnd"
        initial="translateInitial"
        transition={{ duration: 0.5 }}
        variants={{
          translateEnd: { translateY: 0 },
          translateInitial: { translateY: 290 }
        }}
        className="md:flex rounded-xl p-11 md:p-0 border-2 border-purple-500 mt-6"
      >
        <img
          className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="assets/img.jpeg"
          alt=""
          width="384"
          height="512"
        />

        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <p className="text-lg text-gray-200 font-medium">
            Sou um desenvolvedor Front-end em{' '}
            <span className="text-sky-500">ReactJS</span>. Focado em aprender,
            resolver problemas e a passar a melhor qualidade possível. Sou um
            entusiasta da tecnologia, principalmente da programação.
          </p>

          <figcaption className="font-medium">
            <div className="text-gray-200">Isaque de Sousa</div>
            <span className="opacity-40 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Front-end Developer
            </span>

            <div className="flex items-center justify-center md:justify-start text-gray-200 mt-3 gap-1">
              {(icon = <LocationMarkerIcon className="w-4 h-4 " />)}
              {(textIcon = 'Brasil')}
            </div>
          </figcaption>
        </div>
      </motion.div> */
