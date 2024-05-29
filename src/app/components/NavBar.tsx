import Link from 'next/link'
import SideBar from './SideBar'

import { TbBrandValorant } from 'react-icons/tb'

export default function NavBar() {
  return (
    <header className="relative w-full z-10">
      <nav className="transition-all">
          <SideBar />
       <ul className="flex justify-center gap-5 bg-dark text-white py-5 font-inconsolata">
          <Link href="/">
            <li className="mx-5">
              <TbBrandValorant
                size={40}
                className="hover:text-red-500 transition duration-300"
              />
            </li>
          </Link>
        </ul> 
      </nav>
    </header>
  )
}