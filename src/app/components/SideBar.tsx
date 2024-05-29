"use client";

import { useState } from 'react'
import Link from 'next/link'

import { TbBrandValorant } from 'react-icons/tb'
import { RiMenu2Line } from 'react-icons/ri'
import { IoClose } from 'react-icons/io5'
import { TbMapShare } from 'react-icons/tb'
import { GiThrownKnife } from 'react-icons/gi'
import { BsFillPeopleFill } from 'react-icons/bs'
import { ImCoinDollar } from 'react-icons/im'
import { IoInvertModeSharp } from 'react-icons/io5'
import { VscSparkleFilled } from 'react-icons/vsc'
import { TiHome } from 'react-icons/ti'

export default function SideBar() {
  const [isActive, setIsActive] = useState(false)

  const active = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      {!isActive ? (
        <div className="absolute top-6 left-3 text-white z-50 ">
          <button onClick={active}>
            <RiMenu2Line size={30} />
          </button>
        </div>
      ) : (
        <div className="fixed text-white z-50 top-6 left-52 md:left-80 h-screen w-full">
          <button className="flex w-full h-full" onClick={active}>
            <div>
              <IoClose size={40} />
            </div>
          </button>
        </div>
      )}

      {isActive && (
        <div className="fixed flex bg-neutral-900 text-white pt-6 h-screen w-2/3 sm:w-1/3 border-r-2 font-inconsolata">
          <div className="flex uppercase text-xl opacity-50 ml-5 h-1">
            <TbBrandValorant size={40} />
            <p className="mt-2 ml-2">Menu</p>
          </div>
          <ul className="-ml-20 mt-14">
            <hr className="text-white opacity-50" />
            <Link href="/" onClick={active}>
              <li className="p-3 flex text-lg mb-2">
                <TiHome size={25} className="mr-3 opacity-50" />
                Home
              </li>
            </Link>
            <Link href="/mapas" onClick={active}>
              <li className="p-3 flex text-lg mb-2">
                <TbMapShare size={25} className="mr-3 opacity-50" />
                Mapas
              </li>
            </Link>
            <Link href="/armas" onClick={active}>
              <li className="p-3 flex text-lg mb-2">
                <GiThrownKnife size={25} className="mr-3 opacity-50" />
                Armas
              </li>
            </Link>
            <Link href="/modos" onClick={active}>
              <li className="p-3 flex text-lg mb-2">
                <IoInvertModeSharp size={25} className="mr-3 opacity-50" />
                Modos de Jogo
              </li>
            </Link>
            <Link href="/agentes" onClick={active}>
              <li className="p-3 flex text-lg mb-2">
                <BsFillPeopleFill size={25} className="mr-3 opacity-50" />
                Agentes
              </li>
            </Link>
            <Link href="/moedas" onClick={active}>
              <li className="p-3 flex text-lg mb-2">
                <ImCoinDollar size={25} className="mr-3 opacity-50" />
                Moedas
              </li>
            </Link>
            <Link href="/itens" onClick={active}>
              <li className="p-3 flex text-lg mb-2">
                <VscSparkleFilled size={25} className="mr-3 opacity-50" />
                Itens de Jogador
              </li>
            </Link>
          </ul>
        </div>
      )}
    </>
  )
}