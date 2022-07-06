import { Nav } from '../Nav'
import { Profile } from '../Profile'

export function Header() {
  return (
    <div>
      <Nav />
      <Profile />

      <div className="flex-1 flex flex-col items-center absolute top-24 right-[30rem] mt-8">
        <h2 className="text-3xl">Hello, Friend</h2>
        <p>Seja bem-vindo ao meu portfolio</p>
      </div>
    </div>
  )
}
