import { useEffect, useState } from 'react';
import { Motion } from '../Motion';

export function ProjectsContainer() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/X-SpeedBlack-X/repos').then(
      async (response) => {
        const projectGitHub = await response.json();
        setProjects(projectGitHub);
      }
    );
  }, []);

  return (
    <Motion className="mt-10 p-[45px]">
      <div className="flex flex-col justify-center items-center text-center mt-16">
        <h2 className="text-4xl">
          Meus <span className="text-purple-200">projetos</span>
        </h2>
        <p className="text-lg p-4">
          Aqui estão alguns projetos em que trabalhei
        </p>
      </div>
      <div className="flex justify-center">
        <img
          className="animate-float "
          src="assets/computerFloat.png"
          alt="Foto de um notebook"
          width={200}
          height={200}
        />
      </div>
      <div className="grid grid-cols-3 grid-rows-3">
        <div className="bg-green-500">
          {projects.map((project) => (
            <p key={project.id}>{project.name}</p>
          ))}
        </div>

        <div className='m-4 p-3 border-[1px] border-[#c889e6a2] rounded-md shadow-lg shadow-purple-500/30 lg:opacity-40 hover:opacity-80 hover:scale-110 hover:border-purple-200 hover:border-2 flex justify-center items-center transition-all"'>
          <div>
            {' '}
            {projects.map((project) => (
              <p key={project.id[2]}>{project.name}</p>
            ))}
          </div>
        </div>
      </div>
    </Motion>
  );
}
