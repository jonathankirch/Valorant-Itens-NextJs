interface pingenteProps {
  nome: string
  img: string
}

export default function NovoPingente({nome, img}: pingenteProps) {
  return (
    <div className="border-y-2 shadow border-red-500 rounded-2xl p-10 h-full w-80 sm:w-96 bg-dark text-white font-inconsolata font-bold group sm:grayscale transition hover:grayscale-0 sm:hover:scale-105">
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mx-auto w-1/2" src={img} alt={nome} />
      </div>
      <p className="text-3xl text text-center mt-10 group-hover:decoration-red-500 group-hover:underline underline-offset-4">{nome}</p>
    </div>
  )
}