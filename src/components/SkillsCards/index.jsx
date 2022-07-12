import {
  DiGit,
  DiCss3Full,
  DiJavascript1,
  DiReact,
  DiNodejs
} from 'react-icons/di'
import { AiFillHtml5 } from 'react-icons/ai'
import { SiTypescript } from 'react-icons/si'

export function SkillCard() {
  return (
    <>
      <div className="grid lg:grid-cols-4 grid-cols-2 w-2/3">
        <div className="m-4 p-3 border-[1px] border-[#c889e6a2] rounded-md shadow-lg shadow-purple-500/30 lg:opacity-40 hover:opacity-80 hover:scale-110 hover:border-purple-200 hover:border-2 flex justify-center items-center transition-all">
          <AiFillHtml5 size={90} />
        </div>

        <div className="m-4 p-3 border-[1px] border-[#c889e6a2] rounded-md shadow-lg shadow-purple-500/30 lg:opacity-40 hover:opacity-80 hover:scale-110 hover:border-purple-200 hover:border-2 flex justify-center items-center transition-all">
          <DiCss3Full size={90} />
        </div>

        <div className="m-4 p-5 border-[1px] border-[#c889e6a2] rounded-md shadow-lg shadow-purple-500/30 lg:opacity-40 hover:opacity-80 hover:scale-110 hover:border-purple-200 hover:border-2 flex justify-center items-center transition-all">
          <DiJavascript1 size={90} />
        </div>

        <div className="m-4 p-3 border-[1px] border-[#c889e6a2] rounded-md shadow-lg shadow-purple-500/30 lg:opacity-40 hover:opacity-80 hover:scale-110 hover:border-purple-200 hover:border-2 flex justify-center items-center transition-all">
          <SiTypescript size={90} />
        </div>

        <div className="m-4 p-3 border-[1px] border-[#c889e6a2] rounded-md shadow-lg shadow-purple-500/30 lg:opacity-40 hover:opacity-80 hover:scale-110 hover:border-purple-200 hover:border-2 flex justify-center items-center transition-all">
          <DiReact size={90} />
        </div>

        <div className="m-4 p-3 border-[1px] border-[#c889e6a2] rounded-md shadow-lg shadow-purple-500/30 lg:opacity-40 hover:opacity-80 hover:scale-110 hover:border-purple-200 hover:border-2 flex justify-center items-center transition-all">
          <DiNodejs size={90} />
        </div>

        <div className="m-4 p-3 border-[1px] border-[#c889e6a2] rounded-md shadow-lg shadow-purple-500/30 lg:opacity-40 hover:opacity-80 hover:scale-110 hover:border-purple-200 hover:border-2 flex justify-center items-center transition-all">
          <DiGit size={90} />
        </div>
      </div>
    </>
  )
}
