import { useEffect, useState } from 'react'
import axios from 'axios'

interface pingenteProps {
	displayName: string
	displayIcon: string
}

export const usePingentes = () => {
	const [pingenteData, setPingenteData] = useState<pingenteProps[]>([])

	const apiPingenteUrl = 'https://valorant-api.com/v1/buddies?language=pt-BR'

	useEffect(() => {
		const axiosData = async () => {
			try {
				const res = await axios.get(apiPingenteUrl)
				const data: { data: pingenteProps[] } = await res.data

				setPingenteData(data.data)
			} catch (error) {
				console.error('Erro ao buscar dados:', error)
			}
		}

		axiosData()
	}, [])

	return {
		pingenteData,
	}
}
