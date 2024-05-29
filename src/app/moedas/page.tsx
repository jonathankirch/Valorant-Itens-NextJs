"use client"

import NovaMoeda from './NovaMoeda'
import { useMoedas } from './useMoedas'

export default function Moedas() {
  const { moedasData } = useMoedas()

  return (
    <div className="py-16 h-full md:h-screen flex flex-wrap justify-center bg-neutral-900 gap-10">
      {moedasData.length > 0 ? (
        moedasData.map((item, index) => (
          <div key={index}>
            <NovaMoeda nome={item.displayName} img={item.displayIcon} />
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