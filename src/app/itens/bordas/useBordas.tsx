import { useEffect, useState } from 'react'
import axios from 'axios'

interface bordasProps {
	displayName: string
	startingLevel: number
	levelNumberAppearance: string
	smallPlayerCardAppearance: string
}

export const useBordas = () => {
	const [bordasData, setBordasData] = useState<bordasProps[]>([])

	const apiBordaUrl = 'https://valorant-api.com/v1/levelborders?language=pt-BR'

	useEffect(() => {
		const axiosData = async () => {
			try {
				const res = await axios.get(apiBordaUrl)
				const data: { data: bordasProps[] } = await res.data

				setBordasData(data.data)
			} catch (error) {
				console.error('Erro ao buscar dados:', error)
			}
		}

		axiosData()
	}, [])

	return {
		bordasData,
	}
}
