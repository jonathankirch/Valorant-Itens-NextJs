import Link from 'next/link'

import { TbMapShare } from 'react-icons/tb'
import { GiThrownKnife } from 'react-icons/gi'
import { BsFillPeopleFill } from 'react-icons/bs'
import { ImCoinDollar } from 'react-icons/im'
import { IoInvertModeSharp } from 'react-icons/io5'
import { VscSparkleFilled } from 'react-icons/vsc'

export default function Info() {
  return (
    <section className="sm:w-5/6 mx-auto">
      <h1 className="text-4xl text-center mb-16 font-oswald uppercase font-bold">
        Informações do Jogo
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 text-center uppercase font-inconsolata">
        <div className="border-y-2 group sm:hover:border-2 shadow-inner bg-neutral-900 w-5/6 sm:w-4/6 mx-auto h-52 sm:h-64 rounded-xl transition sm:hover:scale-110">
          <Link href="/mapas">
            <div className="h-1/2">
              <TbMapShare className="mx-auto mt-12" size={50} color="#11dbcf" />
            </div>
            <h3 className="font-bold text-xl sm:group-hover:underline sm:group-hover:decoration-2">Mapas</h3>
          </Link>
        </div>
        <div className="border-y-2 group sm:hover:border-2 shadow-inner bg-neutral-900 w-5/6 sm:w-4/6 mx-auto h-52 sm:h-64 rounded-xl transition sm:hover:scale-110 ">
          <Link href="/armas">
            <div className="h-1/2">
              <GiThrownKnife
                className="mx-auto mt-12"
                size={50}
                color="#ffa76f"
              />
            </div>
            <h3 className="font-bold text-xl sm:group-hover:underline sm:group-hover:decoration-2">Armas</h3>
          </Link>
        </div>

        <div className="border-y-2 group sm:hover:border-2 shadow-inner bg-neutral-900 w-5/6 sm:w-4/6 mx-auto h-52 sm:h-64 rounded-xl transition sm:hover:scale-110 ">
          <Link href="/agentes">
            <div className="h-1/2">
              <BsFillPeopleFill
                className="mx-auto mt-12"
                size={50}
                color="#47adff"
              />
            </div>
            <h3 className="font-bold text-xl sm:group-hover:underline sm:group-hover:decoration-2">Agentes</h3>
          </Link>
        </div>

        <div className="border-y-2 group sm:hover:border-2 shadow-inner bg-neutral-900 w-5/6 sm:w-4/6 mx-auto h-52 sm:h-64 rounded-xl transition sm:hover:scale-110 ">
          <Link href="/itens">
            <div className="h-1/2">
              <VscSparkleFilled
                className="mx-auto mt-12"
                size={50}
                color="#e80368"
              />
            </div>
            <h3 className="font-bold text-xl sm:group-hover:underline sm:group-hover:decoration-2">Itens de Jogador</h3>
          </Link>
        </div>
        <div className="border-y-2 group sm:hover:border-2 shadow-inner bg-neutral-900  w-5/6 sm:w-4/6  mx-auto h-52 sm:h-64 rounded-xl transition sm:hover:scale-110 ">
          <Link href="/moedas">
            <div className="h-1/2">
              <ImCoinDollar
                className="mx-auto mt-12"
                size={50}
                color="#ffba2c"
              />
            </div>
            <h3 className="font-bold text-xl sm:group-hover:underline sm:group-hover:decoration-2">Moedas</h3>
          </Link>
        </div>
        <div className="border-y-2 group sm:hover:border-2 shadow-inner bg-neutral-900  w-5/6 sm:w-4/6  mx-auto h-52 sm:h-64 rounded-xl transition sm:hover:scale-110 ">
          <Link href="/modos">
            <div className="h-1/2">
              <IoInvertModeSharp className="mx-auto mt-12" size={50} />
            </div>
            <h3 className="font-bold text-xl sm:group-hover:underline sm:group-hover:decoration-2">Modos de Jogo</h3>
          </Link>
        </div>
      </div>
    </section>
  )
}