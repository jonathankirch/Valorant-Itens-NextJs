// import Image from 'next/image'

interface NovaArmaProps {
  nome: string
  img: string
  categoria: string
  valor: number
}

export default function NovaArma({ nome, img, categoria, valor }: NovaArmaProps){
  return (
    <div className="bg-dark shadow border-y-2 border-red-500 rounded-2xl text-white p-10 font-bold font-inconsolata sm:grayscale transition hover:grayscale-0 sm:hover:scale-105">
      <div className="w-56 h-64 my-auto pt-16 mx-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mt-1/2 mb-1/2 " src={img} alt={nome} />
      </div>
      <h1 className="text-3xl text-center mb-3 text-red-500">{nome}</h1>
      <p>Categoria: {categoria}</p>
      <p>Valor: {valor}</p>
    </div>
  )
}