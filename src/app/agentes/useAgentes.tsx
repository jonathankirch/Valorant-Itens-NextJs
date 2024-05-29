import { useState, useEffect } from 'react'
import axios from 'axios'

interface agentsProps {
  displayName: string
  description: string
  bustPortrait: string
  role: {
    displayName: string
    displayIcon: string
  }
}

export const useAgentes = () => {
  const [agents, setAgents] = useState<agentsProps[]>([])

  const apiAgentsUrl =
    'https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR'

  useEffect(() => {
    const axiosData = async () => {
      try {
        const res = await axios.get(apiAgentsUrl)
        const data: { data: agentsProps[] } = await res.data

        setAgents(data.data)
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }

    axiosData()
  }, [])

  return {
    agents,
  }
}
