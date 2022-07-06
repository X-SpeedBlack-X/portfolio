export function Nav() {
  return (
    <div>
      <nav>
        <ul className="flex items-center justify-center bg-gray-700 w-screen h-14 gap-5">
          <li className="hover:text-gray-400">
            <a href="">Home</a>
          </li>
          <li className="hover:text-green-600">
            <a href="">Sobre mim</a>
          </li>
          <li className="hover:text-green-600">
            <a href="">Projetos</a>
          </li>
          <li className="hover:text-green-600">
            <a href="">Experiência</a>
          </li>
          <li className="hover:text-green-600">
            <a href="">Contato</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
