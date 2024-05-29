"use client"

import NovoSpray from './NovoSpray'
import { useSprays } from './useSprays'

export default function Sprays() {
  const { spraysData } = useSprays()

  return (
    <div className="flex flex-wrap justify-center py-16 bg-neutral-900 gap-10 sm:gap-y-20">
      {spraysData.length > 0 ? (
        spraysData.map((item, index) => (
          <div key={index}>
            <NovoSpray
              nome={item.displayName ?? 'Nome Indisponível'}
              img={
                item.fullTransparentIcon ??
                'https://placehold.co/600x600/white/black?text=Sem+Imagem'
              }
            />
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