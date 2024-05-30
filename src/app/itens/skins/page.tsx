"use client"

import { useState } from "react";
import NovaSkin from "./NovaSkin";
import { useSkin } from "./useSkins";

const armasDisponiveis = ["Todos", "Vandal", "Phantom", "Operator", "Sheriff", "Shorty", "Frenzy", "Ghost", "Classic", "Bucky", "Judge", "Ares", "Odin", "Bulldog", "Guardian", "Stinger", "Spectre", "Marshal", "Outlaw"];

export default function SkinsArmas() {
  const { skinData } = useSkin();
  const [filtroArma, setFiltroArma] = useState<string>(""); // Estado para armazenar o filtro selecionado

  // Função para atualizar o filtro de arma
  const atualizarFiltro = (arma: string) => {
    setFiltroArma(arma);
  };

  // Função para verificar se o displayName começa com a palavra do filtro
  const filtroPorArma = (displayName: string) => {
    return filtroArma === "Todos" || displayName.toLowerCase().startsWith(filtroArma.toLowerCase());
  };

  return (
    <div className="bg-neutral-900 pt-5 pb-16 flex flex-wrap gap-10 sm:gap-y-20 justify-center">
      <div className="grid grid-cols-3 md:grid-cols-8 mb-7 gap-2 sm:gap-5 relative w-full mx-5">
        {armasDisponiveis.map((arma, index) => (
          <button
            key={index}
            className={`mr-4 px-4 py-2 rounded mx-auto w-full transition font-inconsolata font-bold ${
              filtroArma === arma ? "bg-red-500 text-dark" : "bg-dark text-white border border-red-500"
            }`}
            onClick={() => atualizarFiltro(arma)}
          >
            {arma}
          </button>
        ))}
      </div>
      {skinData.length > 0 ? (
        skinData.map((item, index) => (
          filtroPorArma(item.displayName) && (
            <div key={index}>
              <NovaSkin
                nome={item.displayName}
                img={item.displayIcon ?? "https://placehold.co/295x295/white/black?text=Imagem+Indisponível"}
                variante={item.chromas && item.chromas.length > 1 ? true : false}
              />
            </div>
          )
        ))
      ) : (
        <div className="flex mx-auto justify-center mt-10 bg-white rounded px-5 pt-2 h-10">
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-900"></div>
          <p className="ml-4 text-white">Carregando...</p>
        </div>
      )}
    </div>
  );
};