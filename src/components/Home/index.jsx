import { Socials } from '../Socials'
import { Typewriter } from '../TypeWrite'

export function HomeContainer() {
  return (
    <>
      <div className="lg:flex mt-16 lg:justify-between text-center items-center">
        <div className="flex flex-col p-[45px]">
          <div className="lg:flex  mb-2 text-4xl gap-2 ">
            <h1>Hello, Friend </h1>
            <span className="inline-block  animate-wave">👋🏼</span>
          </div>

          <div className="lg:flex text-4xl gap-2">
            <h2>Eu sou</h2>
            <strong className="text-purple-500">Isaque de Sousa</strong>
          </div>

          <strong className="lg:text-4xl lg:flex text-lg mt-9">
            <Typewriter />
          </strong>
        </div>

        <div className="flex justify-center">
          <img
            src="/assets/home-main.svg"
            alt="image de uma pessoa programando"
            className="w-64 h-64 lg:w-80 lg:h-80 mt-9"
          />
        </div>
      </div>

      <div className="flex flex-col text-center items-center  justify-around mt-60 mb-10 gap-5">
        <img
          src="assets/avatar.png"
          alt="foto do avatar"
          className="w-44 h-44 rounded-full "
        />

        <div>
          <h2 className="text-4xl block ">
            DEIXA EU ME <span className="text-purple-500 ">APRESENTAR</span>{' '}
            PARA VOCÊS
          </h2>
        </div>

        <div className="text-lg">
          <p>
            Eu conheci e me apaixonei pela programação quando eu estava no meu
            ensino. E deste então não consigo me ver sem ela. Fazer o quê, né?
            🤷‍♂️
          </p>
          <p>
            Eu amo as linguagens:{' '}
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
        <Socials />
      </div>
    </>
  )
}
