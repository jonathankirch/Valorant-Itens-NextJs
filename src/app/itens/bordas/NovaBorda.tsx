interface bordaProps {
  nome: string
  lvl: number
  levelAparence: string
  cardAparence: string
}

export default function NovaBorda({nome, lvl, levelAparence, cardAparence}: bordaProps) {
  return (
    <div className="border-y-2 border-red-500 rounded-2xl p-16 bg-dark text-white font-inconsolata font-bold transition sm:hover:scale-105 sm:grayscale hover:grayscale-0">
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mx-auto mb-4" src={levelAparence} alt={nome} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mx-auto mb-10" src={cardAparence} alt={nome} />
      </div>
      <p className="text-center text-red-500 text-xl">{nome}</p>
      <p>Level necessário: {lvl}</p>
    </div>
  )
}