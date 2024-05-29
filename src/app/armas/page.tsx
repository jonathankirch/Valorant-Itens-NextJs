'use client'

import NovaArma from './NovaArma'
import { useArmas } from './useArmas'

export default function  Armas(){
  const { weaponsData } = useArmas()

  return (
    <div className="py-16 bg-neutral-900 flex flex-wrap justify-center gap-10 sm:gap-y-20">
      {weaponsData.length > 0 ? (
        weaponsData.map((item, index) => (
          <div key={index}>
            {item.shopData && (
              <NovaArma
                nome={item.displayName}
                img={item.displayIcon ?? 'https://placehold.co/224x43/000000/FFF?text=Imagem+Indisponível'}
                categoria={item.shopData.categoryText}
                valor={item.shopData.cost}
              />
            )}
          </div>
        ))
      ) : (
        <div className="flex mx-auto justify-center mt-10 bg-white rounded px-5 pt-2 h-10">
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-900"></div>
          <p className="ml-4">Carregando...</p>
        </div>
      )}
    </div>
  )
}