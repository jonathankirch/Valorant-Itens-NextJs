"use client"

import NovoCartao from './NovoCartao'
import { useCartoes } from './useCartoes'

export default function Cartoes() {
  const { cartaoData } = useCartoes()

  return (
    <div className="flex flex-wrap justify-center bg-neutral-900 py-16 gap-10">
      {cartaoData.length > 0 ? (
        cartaoData.map((item, index) => (
          <div key={index}>
            <NovoCartao
              nome={item.displayName}
              icon={item.displayIcon}
              wideImg={item.wideArt}
              largeImg={item.largeArt}
            />
          </div>
        ))
      ) : (
        <div className="flex mx-auto justify-center mt-10 bg-white rounded px-5 pt-2 h-10">
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-900"></div>
          <p className="ml-4 text-white">Carregando...</p>
        </div>
      )}
    </div>
  )
}