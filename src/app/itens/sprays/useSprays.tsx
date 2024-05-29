import { useEffect, useState } from 'react'
import axios from 'axios'

interface sprayProps {
	displayName: string
	fullTransparentIcon: string
}

export const useSprays = () => {
	const [spraysData, setSpraysData] = useState<sprayProps[]>([])

	const apiSprayUrl = 'https://valorant-api.com/v1/sprays?language=pt-BR'

	useEffect(() => {
		const axiosData = async () => {
			try {
				const res = await axios.get(apiSprayUrl)
				const data: { data: sprayProps[] } = await res.data

				setSpraysData(data.data)
			} catch (error) {
				console.error('Erro ao buscar dados:', error)
			}
		}

		axiosData()
	}, [])

	return {
		spraysData,
	}
}
