import { useState, useEffect } from 'react'
import axios from 'axios'

interface mapasProps {
  displayName: string
  narrativeDescription: string
  splash: string
  displayIcon: string
}

export const useMapas = () => {
  const [mapasData, setMapasData] = useState<mapasProps[]>([])

  const apiMapasUrl = 'https://valorant-api.com/v1/maps?language=pt-BR'

  useEffect(() => {
    const axiosData = async () => {
      try {
        const res = await axios.get(apiMapasUrl)
        const data: { data: mapasProps[] } = await res.data

        setMapasData(data.data)
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }

    axiosData()
  }, [])

  return {
    mapasData,
  }
}
