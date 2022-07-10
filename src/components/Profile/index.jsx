import { LocationMarkerIcon } from '@heroicons/react/outline'

export function Profile({ icon, textIcon }) {
  return (
    <div className="md:flex rounded-xl p-8 md:p-0 dark:bg-slate-800 mt-6">
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
    </div>
  )
}
