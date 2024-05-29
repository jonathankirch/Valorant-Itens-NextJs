interface novoModoProps {
  nome: string
  duracao: string
  icone: string
  banner: string
}

export default function NovoModo({
  nome,
  duracao,
  icone,
  banner,
}: novoModoProps) {
  return (
    <div className="sm:w-96 shadow g-10 border-y-2 border-red-500 rounded-lg sm:rounded-2xl bg-dark text-white py-5 font-bold font-inconsolata sm:grayscale transition hover:grayscale-0 sm:hover:scale-105">
      <div className="grid gap-y-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg-dark mx-auto mb-5 w-1/3" src={icone} alt={nome} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-1/2 mx-auto rounded-2xl" src={banner} alt={nome} />
      </div>
      <p className="text-center text-3xl mb-4 text-red-500">{nome}</p>
      <p className="ml-5">Duração: {duracao}</p>
    </div>
  )
}
