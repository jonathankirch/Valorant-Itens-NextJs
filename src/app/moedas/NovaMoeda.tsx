interface novaMoedaProps {
  nome: string
  img: string
}

export default function NovaMoeda({nome, img}: novaMoedaProps) {
  return (
    <div className="border-y-2 shadow border-red-500 bg-dark text-white font-inconsolata font-bold rounded-2xl p-10 transition sm:hover:scale-105 md:grayscale hover:grayscale-0">
      <p className="text-red-500 text-3xl">{nome}</p>
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg-dark mx-auto mt-5" src={img} alt={nome} />
      </div>
    </div>
  )
}