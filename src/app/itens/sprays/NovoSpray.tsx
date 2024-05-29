interface sprayProps {
  nome: string
  img: string
}

export default function NovoSpray({ nome, img }: sprayProps) {
  return (
    <div className="border-y-2 border-red-500 shadow rounded-2xl px-16 py-10 w-full sm:w-96 h-full bg-dark text-white font-inconsolata font-bold grayscale transition group hover:grayscale-0 hover:scale-105">
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="rounded-xl" src={img} alt={nome} />
      </div>
      <p className="text-center text-2xl mt-10 group-hover:underline group-hover:decoration-red-500 group-hover:decoration-2">
        {nome}
      </p>
    </div>
  )
}