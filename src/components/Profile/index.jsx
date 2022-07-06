import { LocationMarkerIcon, MailIcon } from '@heroicons/react/outline'

export function Profile({ icon, textIcon, mail, ...rest }) {
  return (
    <div className="w-[22rem] h-80 bg-gray-700 rounded-lg m-8 flex flex-col items-center text-center justify-center">
      <img
        className="w-32 mb-4 rounded-full border-green-400 border-2"
        src="assets/img.jpeg"
        alt="foto de perfil"
      />
      <div {...rest}>
        <h1>Isaque de Sousa</h1>
        <span className="opacity-40 text-green-300">Front-end Developer</span>
        <span className="flex items-center justify-center text-center gap-1 mt-2">
          {(icon = <LocationMarkerIcon className="w-4 h-4" />)}
          {(textIcon = 'Brasil')}
        </span>
      </div>
    </div>
  )
}

{
  /* <span className="flex items-center text-center gap-2 mt-2 ">
{(icon = <MailIcon className="w-4 h-4" />)}
{(mail = 'isaque.error404@gmail.com')}
</span> */
}
