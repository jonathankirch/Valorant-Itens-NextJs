'use client'

import NovoAgente from './NovoAgente'
import { useAgentes } from './useAgentes'

export default function Agentes() {
  const { agents } = useAgentes()

  return (
    <div className="flex flex-wrap bg-neutral-900 py-16 justify-center gap-10 sm:gap-y-20">
      {agents.length > 0 ? (
        agents.map((item, index) => (
          <div key={index}>
            <NovoAgente
              nome={item.displayName}
              img={item.bustPortrait}
              iconeCategoria={item.role.displayIcon}
              categoria={item.role.displayName}
              descricao={item.description}
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
