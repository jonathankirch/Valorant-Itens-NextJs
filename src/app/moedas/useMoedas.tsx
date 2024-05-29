import { useState, useEffect } from "react"
import axios from 'axios'

interface moedasProps {
  displayName: string
  displayIcon: string
}

export const useMoedas = () => {

  const [moedasData, setMoedasData] = useState<moedasProps[]>([])

  const apiMoedasUrl = 'https://valorant-api.com/v1/currencies?language=pt-BR'

  useEffect(() => {
    const axiosData = async () => {
      try{
        const res = await axios.get(apiMoedasUrl)
        const data: {data: moedasProps[]} = await res.data

        setMoedasData(data.data)
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }

    axiosData()
  }, [])

  return {
    moedasData,
  }
}