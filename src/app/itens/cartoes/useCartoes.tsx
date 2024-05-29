import { useEffect, useState } from 'react'
import axios from 'axios'

interface cartaoProps {
	displayName: string
	displayIcon: string
	wideArt: string
	largeArt: string
}

export const useCartoes = () => {
	const [cartaoData, setCartaoData] = useState<cartaoProps[]>([])

	const apiCartaoUrl = 'https://valorant-api.com/v1/playercards?language=pt-BR'

	useEffect(() => {
		const axiosData = async () => {
			try {
				const res = await axios.get(apiCartaoUrl)
				const data: { data: cartaoProps[] } = await res.data

				setCartaoData(data.data)
			} catch (error) {
				console.error('Erro ao buscar dados:', error)
			}
		}

		axiosData()
	}, [])

	return {
		cartaoData,
	}
}
