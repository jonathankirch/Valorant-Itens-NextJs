"use client"

import NovoMapa from './NovoMapa'
import { useMapas } from './useMapas'

export default function Mapas(){
  const { mapasData } = useMapas()

  return (
    <>
      <section className='grid gap-y-10 sm:gap-y-20 gap-x-2 sm:flex sm:flex-wrap sm:gap-10 py-16 justify-center bg-neutral-900'>
        {mapasData.length > 0 ? (
          mapasData.map((item, index) => (
            <div key={index}>
              <NovoMapa
                nome={item.displayName}
                img={
                  item.splash ?? 'https://placehold.co/600x400/000000/FFF?text=Imagem+Indisponível'
                }
                img2={item.displayIcon ?? "https://placehold.co/100x100/000000/FFF?text=Imagem+Indisponível"}
              />
            </div>
          ))
        ) : (
          <div className="flex mx-auto justify-center mt-10 bg-white rounded px-5 pt-2 h-10">
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-900"></div>
            <p className="ml-4 text-white">Carregando...</p>
          </div>
        )}
      </section>
    </>
  )
}