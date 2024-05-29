import { useEffect, useState } from 'react'
import axios from 'axios'

interface modosProps {
  displayName: string
  duration: string
  displayIcon: string
  listViewIconTall: string
}
export const useModos = () => {
  const [modosData, setModosData] = useState<modosProps[]>([])

  const apiModosUrl = 'https://valorant-api.com/v1/gamemodes?language=pt-BR'

  useEffect(() => {
    const axiosData = async () => {
      try {
        const res = await axios.get(apiModosUrl)
        const data: { data: modosProps[] } = await res.data

        setModosData(data.data)
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }

    axiosData()
  }, [])

  return {
    modosData,
  }
}
