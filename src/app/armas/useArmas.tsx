import { useEffect, useState } from 'react'
import axios from 'axios'

interface weaponsProps {
	displayName: string
	displayIcon: string
	shopData: {
		cost: number
		categoryText: string
	}
}

export const useArmas = () => {
	const [weaponsData, setWeaponsData] = useState<weaponsProps[]>([])

	const apiWeaponUrl = 'https://valorant-api.com/v1/weapons?language=pt-BR'

	useEffect(() => {
		const axiosData = async () => {
			try {
				const res = await axios.get(apiWeaponUrl)
				const data: { data: weaponsProps[] } = await res.data

				setWeaponsData(data.data)
			} catch (error) {
				console.error('Erro ao buscar dados:', error)
			}
		}

		axiosData()
	}, [])

	return {
		weaponsData,
	}
}
