import { useEffect, useState } from 'react';
import axios from 'axios';

interface Chroma {
}

interface SkinProps {
  displayName: string;
  displayIcon: string;
  chromas?: Chroma[];
}

export const useSkin = () => {
  const [skinData, setSkinData] = useState<SkinProps[]>([]);

  const apiSkinsUrl = 'https://valorant-api.com/v1/weapons/skins?language=pt-BR';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(apiSkinsUrl);
        const data: { data: SkinProps[] } = await res.data;

        setSkinData(data.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  return {
    skinData,
  };
};
