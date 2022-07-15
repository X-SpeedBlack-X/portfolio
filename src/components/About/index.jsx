import { HandPointing } from 'phosphor-react';
import { SkillCard } from '../SkillsCards';
import { SkillCalendar } from '../SkillsCards/SkillCalendar';
import { SkillTools } from '../SkillsCards/SkillTools';
import { Motion } from '../Motion';

const ICONHAND = [
  {
    id: 1,
    text: 'Gosto de jogar',
  },

  {
    id: 2,
    text: 'Estudar programação',
  },
  {
    id: 3,
    text: 'Assistir séries e filmes',
  },
];

function IconHand({ textIcon }) {
  return (
    <i className="flex items-center gap-1 ">
      <HandPointing className="rotate-90" /> {textIcon}
    </i>
  );
}

export function AboutContainer() {
  return (
    <>
      <Motion
        className="flex flex-col lg:flex-row items-center lg:justify-around
        p-[45px]"
      >
        <div className="space-y-4 text-lg w-[90%]">
          <h2 className="text-4xl text-center p-7">
            Sobre <span className="text-purple-200">mim</span>
          </h2>

          <p className="text-lg lg:w-2/3">
            Olá a todos, Eu sou{' '}
            <span className=" text-purple-200">Isaque de Sousa</span>. Moro em
            Fortaleza - CE. Sou um dev junior que busca sempre aprender e a
            melhorar minha habilidades de programação.
          </p>

          <div>
            <p>Coisas que eu gosto de fazer:</p>
            <i className="flex flex-col ">
              {ICONHAND.map((icons) => (
                <IconHand key={icons.id} textIcon={icons.text} />
              ))}
            </i>
          </div>
        </div>

        <div>
          <img
            src="assets/about.png"
            alt="imagem de uma pessoa no computador"
            className="w-full h-64 lg:w-80 lg:h-200 mt-9"
          />
        </div>
      </Motion>

      <Motion>
        <div className="flex justify-center text-4xl mt-40 gap-2">
          <h2 className="flex gap-2 mb-5">
            Minhas
            <span className="text-purple-200">habilidades</span>
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <SkillCard />
        </div>

        <div className="flex justify-center text-4xl mt-40 gap-2">
          <h2 className="mb-5">
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
      </Motion>
    </>
  );
}
