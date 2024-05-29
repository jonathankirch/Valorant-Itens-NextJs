interface cartaoProps {
  nome: string
  icon: string
  wideImg: string
  largeImg: string
}

export default function NovoCartao({nome, icon, wideImg, largeImg}: cartaoProps) {
  return (
    <div className="px-16 pt-10 w-80 m-4 h-full shadow bg-dark text-white font-inconsolata font-bold border-y-2 border-red-500 rounded-2xl transition sm:grayscale group hover:grayscale-0 sm:hover:scale-105">
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mx-auto" src={icon} alt={nome} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="py-4" src={wideImg} alt={nome} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={largeImg} alt={nome} />
      </div>
      <p className="text-center text-2xl mt-10 group-hover:underline group-hover:decoration-red-500 group-hover:decoration-2">{nome}</p>
    </div>
  )
}