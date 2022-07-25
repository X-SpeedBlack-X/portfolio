import {
  DiGit,
  DiCss3Full,
  DiJavascript1,
  DiReact,
  DiNodejs,
} from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import {
  SiChakraui,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const SKILL_CARD = [
  {
    id: 1,
    icon: AiFillHtml5,
  },

  {
    id: 2,
    icon: DiCss3Full,
  },

  {
    id: 3,
    icon: DiJavascript1,
  },

  {
    id: 4,
    icon: SiTypescript,
  },

  {
    id: 5,
    icon: DiReact,
  },

  {
    id: 6,
    icon: DiNodejs,
  },

  {
    id: 7,
    icon: DiGit,
  },

  {
    id: 8,
    icon: SiTailwindcss,
  },

  {
    id: 9,
    icon: SiStyledcomponents,
  },

  {
    id: 10,
    icon: SiChakraui,
  },
];

function SkillCardProject({ icon: Icon }) {
  return (
    <div className="m-4 p-3 border-[1px] border-[#c889e6a2] rounded-md shadow-lg shadow-purple-500/30 lg:opacity-40 hover:opacity-80 hover:scale-110 hover:border-purple-200 hover:border-2 flex justify-center items-center transition-all">
      <Icon size={90} />
    </div>
  );
}

export function SkillCard() {
  return (
    <div className="grid lg:grid-cols-5 grid-cols-2 w-2/3">
      {SKILL_CARD.map((skill) => (
        <SkillCardProject icon={skill.icon} key={skill.id} />
      ))}
    </div>
  );
}
