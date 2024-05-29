import { ReactNode } from 'react'

import NavBar from './NavBar'

interface MainContainerProps {
  children: ReactNode
}

export default function MainContainer({ children }: MainContainerProps) {
  return (
    <>
      <NavBar />
      <hr />
      <main>
        {children}
      </main>
      <footer className="bg-neutral-900 border-t p-10 sm:pl-40 font-inconsolata">
        <h2 className="text-3xl font-bold">Contato</h2>
        <ul className="ml-3 mt-3 ">
          <li className="underline decoration-2">
            <a target="_blank" href="https://github.com/jonathankirch">
              GitHub
            </a>
          </li>
          <li className="underline decoration-2 my-1">
            <a target="_blank" href="mailto:jonathankirch@gmail.com">
              E-mail
            </a>
          </li>
          <li className="underline decoration-2">
            <a target="_blank" href="https://wa.me/5551996449577">
              Whatsapp
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}