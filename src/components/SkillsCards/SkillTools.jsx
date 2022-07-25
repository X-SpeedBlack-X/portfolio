import { DiLinux } from 'react-icons/di';
import { SiVisualstudiocode, SiVercel, SiHeroku } from 'react-icons/si';

const SKILL_TOOLS = [
  {
    id: 1,
    icon: SiVisualstudiocode,
  },

  {
    id: 2,
    icon: SiVercel,
  },

  {
    id: 3,
    icon: DiLinux,
  },

  {
    id: 4,
    icon: SiHeroku,
  },
];

function SkillToolsProjects({ icon: Icon }) {
  return (
    <div className="m-4 p-3 border-[1px] border-[#c889e6a2] rounded-md shadow-lg shadow-purple-500/30 lg:opacity-40 hover:opacity-80 hover:scale-110 hover:border-purple-200 hover:border-2 flex justify-center items-center transition-all">
      <Icon size={90} />
    </div>
  );
}

export function SkillTools() {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 w-2/3">
      {SKILL_TOOLS.map((skill) => (
        <SkillToolsProjects key={skill.id} icon={skill.icon} />
      ))}
    </div>
  );
}
