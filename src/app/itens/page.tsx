import Link from 'next/link'

export default function ItensJogador() {
	return (
		<div className='bg-neutral-900 h-screen sm:h-screen font-inconsolata font-bold pt-10'>
			<div className='sm:w-2/3 mx-auto'>
				<h1 className='text-5xl ml-10 text-white opacity-50'>Itens: </h1>
				<ul className='flex flex-wrap gap-y-5 my-5 sm:grid sm:grid-cols-2 justify-center'>
					<Link href='/itens/pingentes'>
						<li className='border bg-red-500 text-center text-2xl rounded-2xl p-5 mx-5 sm:w-5/6 w-80'>Pingente de Armas</li>
					</Link>
					<Link href='itens/bordas'>
						<li className='border bg-red-500 text-center text-2xl rounded-2xl p-5 mx-5 sm:w-5/6 w-80'>Bordas de Níveis</li>
					</Link>
					<Link href='/itens/cartoes'>
						<li className='border bg-red-500 text-center text-2xl rounded-2xl p-5 mx-5 sm:w-5/6 w-80'>Cartão de Jogador</li>
					</Link>
					<Link href='/itens/skins'>
						<li className='border bg-red-500 text-center text-2xl rounded-2xl p-5 mx-5 sm:w-5/6 w-80'>Skins de Armas</li>
					</Link>
					<Link href='/itens/sprays'>
						<li className='border bg-red-500 text-center text-2xl rounded-2xl p-5 mx-5 sm:w-5/6 w-80'>Sprays</li>
					</Link>
				</ul>
			</div>
		</div>
	)
}