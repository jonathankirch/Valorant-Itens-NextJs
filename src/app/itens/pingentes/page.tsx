 "use client"

import NovoPingente from './NovoPingente'
import { usePingentes } from './usePingentes'

export default function PingenteArma() {
  const { pingenteData } = usePingentes()

  return (
    <div className="flex flex-wrap justify-center bg-neutral-900 py-16 gap-10 sm:gap-y-20">
      {pingenteData.length > 0 ? (
        pingenteData.map((item, index) => (
          <div key={index}>
            <NovoPingente
              nome={item.displayName ?? 'Nome Indisponível'}
              img={
                item.displayIcon ??
                'https://placehold.co/600x400?text=Sem+Imagem'
              }
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