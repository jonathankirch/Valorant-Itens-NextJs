"use client"

import NovoModo from './NovoModo'
import { useModos } from './useModos'

export default function Modos() {
  const { modosData } = useModos()

  return (
    <div className="flex flex-wrap justify-center py-16 gap-10 sm:gap-y-20 bg-neutral-900">
      {modosData.length > 0 ? (
        modosData.map((item, index) => (
          <div key={index}>
            <NovoModo
              nome={item.displayName ?? 'Nome Indisponível'}
              duracao={item.duration ?? 'Duração indisponível'}
              icone={
                item.displayIcon ??
                'https://placehold.co/129x129/white/black?text=Sem+Icone'
              }
              banner={
                item.listViewIconTall ??
                'https://placehold.co/193x380/white/black?text=Sem+Banner'
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