interface NovoMapaProps {
  nome: string
  img: string
  img2: string
}

export default function NovoMapa({ nome, img, img2 }: NovoMapaProps){
  return (
    <div className="border-y-2 mx-auto sm:w-96 grayscale-0 sm:grayscale py-5 sm:py-10 rounded-lg sm:rounded-2xl bg-dark text-white font-bold border-red-500 transition sm:hover:scale-105 hover:grayscale-0 underline-offset-4
      decoration-red-500 hover:underline hover:decoration-red-500 shadow">
      <div className="flex flex-wrap w-5/6 mx-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="rounded" src={img} alt={nome} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-2/3 sm:w-1/2 mx-auto" src={img2} alt={nome} />
      </div>
      <h1 className="text-center mt-3 text-3xl font-inconsolata">{nome}</h1>
    </div>
  )
}