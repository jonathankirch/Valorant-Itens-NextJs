"use client"

import NovaBorda from './NovaBorda'
import { useBordas } from './useBordas'

export default function Bordas() {
  const { bordasData } = useBordas()

  return (
    <div className="flex flex-wrap gap-10 sm:gap-y-20 justify-center bg-neutral-900 sm:px-10 py-16">
      {bordasData.length > 0 ? (
        bordasData.map((item, index) => (
          <div key={index}>
            <NovaBorda
              nome={item.displayName}
              lvl={item.startingLevel}
              levelAparence={item.levelNumberAppearance}
              cardAparence={item.smallPlayerCardAppearance}
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