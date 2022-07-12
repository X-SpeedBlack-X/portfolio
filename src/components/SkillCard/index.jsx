import { Footer } from '../Footer'

export function SkillCard() {
  return (
    <>
      <div className="grid grid-rows-4  grid-cols-5 gap-8 w-auto p-[45px] ">
        <div>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
            alt="Foto do html"
            width={100}
            height={100}
            className="border-2 rounded-md border-purple-200 shadow-lg shadow-purple-500/30 p-2"
          />
        </div>

        <div>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
            alt=""
            width={100}
            height={100}
            className="border-2 rounded-md border-purple-200 shadow-lg shadow-purple-500/30 p-2"
          />
        </div>
        <div>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
            alt=""
            width={100}
            height={100}
            className="border-2 rounded-md border-purple-200 shadow-lg shadow-purple-500/30 p-2"
          />
        </div>

        <div>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            alt=""
            width={100}
            height={100}
            className="border-2 rounded-md border-purple-200 shadow-lg shadow-purple-500/30 p-2"
          />
        </div>

        <div>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
            alt=""
            width={100}
            height={100}
            className="border-2 rounded-md border-purple-200 shadow-lg shadow-purple-500/30 p-2"
          />
        </div>

        <div>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt=""
            width={100}
            height={100}
            className="border-2 rounded-md border-purple-200 shadow-lg shadow-purple-500/30 p-2"
          />
        </div>

        <div>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt=""
            width={100}
            height={100}
            className="border-2 rounded-md border-purple-200 shadow-lg shadow-purple-500/30 p-2"
          />
        </div>

        <div>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
            alt=""
            width={100}
            height={100}
            className="border-2 rounded-md border-purple-200 shadow-lg shadow-purple-500/30 p-2"
          />
        </div>
      </div>
    </>
  )
}
