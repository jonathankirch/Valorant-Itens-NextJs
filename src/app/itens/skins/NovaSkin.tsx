interface skinProps {
  nome: string
  img: string
  variante: boolean
}

export default function NovaSkin({ nome, img, variante = false }: skinProps) {
  return (
    <div className="bg-dark w-full sm:w-96 h-full border-y-2 border-red-500 rounded-2xl text-white p-10 font-bold font-inconsolata sm:grayscale transition hover:grayscale-0 sm:hover:scale-105">
      <div className="my-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={nome} />
      </div>
      <h1 className="text-2xl w-5/6 mx-auto text-center mb-3 text-red-500">{nome}</h1>
      {variante ? (
        <>
          <p>Variante: Disponível</p>
        </>
      ) : (
        <p>Variante: Sem Variante</p>
      )}
    </div>
  )
}