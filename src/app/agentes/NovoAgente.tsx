interface agentsProps {
  nome: string
  img: string
  iconeCategoria: string
  categoria: string
  descricao: string
}

export default function NovoAgente({
  nome,
  img,
  iconeCategoria,
  categoria,
  descricao,
}: agentsProps) {
  return (
    <div className="sm:w-96 h-full bg-dark text-white shadow border-y-2 border-red-500 rounded-lg sm:rounded-2xl font-inconsolata font-bold transition sm:hover:scale-105 relative sm:grayscale hover:grayscale-0">
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={nome} />
      </div>
      <div className="absolute top-3 w-10 right-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={iconeCategoria} alt={categoria} />
      </div>
      <p className="text-center text-4xl text-red-500 my-5">{nome}</p>
      <div>
        <p className="mb-2">
          <span className="ml-7 text-red-400 underline decoration-2">
            Categoria:
          </span>{' '}
          {categoria}
        </p>
      </div>
      <p className="px-7 mb-5">{descricao}</p>
      <div></div>
    </div>
  )
}
