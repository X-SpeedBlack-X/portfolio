import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'

export function Socials() {
  return (
    <>
      <div className="text-3xl mt-11 ">
        <h2>Como me encontrar</h2>
      </div>

      <p>
        Sinta-se à vontade para se
        <span className="text-purple-500"> conectar </span>comigo
      </p>

      <div className="flex gap-5 ">
        <i className="flex justify-center items-center transition-colors bg-purple-500 hover:bg-purple-900 rounded-full w-11 h-11">
          <a href="https://github.com/x-speedblack-x">
            {' '}
            <GithubLogo size={32} weight="regular" />
          </a>
        </i>

        <i className="flex justify-center items-center transition-colors bg-purple-500 hover:bg-purple-900 rounded-full w-11 h-11">
          <a href="https://linkedin.com/in/isaque-de-sousa">
            <LinkedinLogo size={32} weight="regular" />
          </a>
        </i>

        <i className="flex justify-center items-center transition-colors bg-purple-500 hover:bg-purple-900 rounded-full w-11 h-11">
          <a href="https://instagram.com/_isaque.s_">
            <InstagramLogo size={32} weight="regular" />
          </a>
        </i>
      </div>
    </>
  )
}
