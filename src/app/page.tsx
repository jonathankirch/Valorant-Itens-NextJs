import Link from 'next/link'
import Image from 'next/image'

import Info from './components/Info'

import { FaArrowDownLong } from 'react-icons/fa6'
import { FaDiscord } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <div className="relative h-screen">
        <Image
          src="/imgs/HeaderImgSmall.jpg"
          alt="Background Valorant Mobile"
          width={640}
          height={1080}
          className="-z-10 block sm:hidden bg-center bg-cover"
        />
        <Image
          src="/imgs/HeaderImgMedium.jpg"
          alt="Background Valorant Tablet"
          width={768}
          height={1080}
          className="-z-10 hidden sm:block md:hidden bg-center bg-cover"
        />
        <Image
          src="/imgs/HeaderImg.jpg"
          alt="Background Valorant Desktop"
          width={1920}
          height={0}
          className="-z-10 hidden md:block bg-center bg-cover h-full mx-auto"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center backdrop-blur-md bg-dark/80 p-5 rounded-xl transition duration-150 sm:hover:scale-105 mt-56 sm:mt-96 mx-2 sm:mx-auto sm:w-1/2">
            <h1 className="font-bold text-3xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-gray-50 pointer-events-none">
              Saiba mais sobre o jogo!
            </h1>
            <Link href="#sobre">
              <div>
                <FaArrowDownLong
                  size={40}
                  color="#fba5a4"
                  className="mx-auto mt-5"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <section id="sobre" className="my-24">
        <div className="bg-[url('/imgs/SobreImg.png')] bg-cover py-12 shadow-inner">
          <h1 className="text-center text-4xl font-oswald uppercase font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {' '}
            - Sobre -{' '}
          </h1>
          <p className="text-center px-2 md:w-1/2 mx-auto mt-10 sm: font-inconsolata">
            Valorant é um jogo de tiro em primeira pessoa gratuito e competitivo
            que combina elementos de tática, estratégia e ação. Os jogadores
            assumem o papel de agentes com habilidades únicas e lutam em
            partidas 5x5 em diferentes mapas. O objetivo do jogo é eliminar o
            time adversário e completar objetivos específicos.
          </p>
        </div>
      </section>

      <section className="font-inconsolata grid md:grid-cols-2 md:w-2/3 mx-5 md:mx-auto gap-y-10">
        <div className="my-auto">
          <h1 className="text-4xl font-bold text-center mb-10 font-oswald uppercase">
            Primeiras Versões
          </h1>
          <p className="text-justify">
            Em 2 de junho de 2020, o mundo presenciou o lançamento oficial do
            Valorant. O jogo rapidamente se tornou um fenômeno global,
            conquistando milhões de jogadores e quebrando recordes de
            visualizações na Twitch. A combinação de jogabilidade frenética,
            personagens memoráveis e um cenário competitivo vibrante impulsionou
            o sucesso do Valorant.
          </p>
        </div>
        <div className="md:mx-3 my-auto">
          <Image
            src="/imgs/Valorant-Antigo.png"
            alt="Imagem Valorant Antigo"
            width={550}
            height={0}
            className="bg-center bg-cover h-full mx-auto rounded"
          />
        </div>
      </section>

      <hr className="my-16 w-2/3 mx-auto" />

      <section className="font-inconsolata flex flex-col-reverse md:grid md:grid-cols-2 md:w-2/3 mx-5 md:mx-auto">
        <div className="mx-auto my-auto">
          <a
            className="group"
            href="https://discord.com/invite/valorant-br"
            target="_blank"
          >
            <FaDiscord
              className="transition sm:group-hover:scale-110"
              size={150}
              color="#5463e4"
            />
            <p className="text-center text-neutral-500 font-bold sm:group-hover:text-white transition sm:group-hover:scale-110">
              Entre no Discord
            </p>
          </a>
        </div>
        <div className="my-auto row-auto">
          <h1 className="text-4xl font-oswald uppercase font-bold mb-10 text-center">
            Comunidade
          </h1>
          <p className="text-justify mb-5 md:mb-0">
            Jogadores e fãs produzem uma grande variedade de conteúdo, desde
            streams e vídeos de gameplay até fanarts, memes e histórias. Essa
            criatividade contribui para a riqueza do universo Valorant e
            fortalece o senso de comunidade entre os jogadores.
          </p>
        </div>
      </section>

      <hr className="my-16 w-2/3 mx-auto" />

      <section className="font-inconsolata md:grid-cols-2 md:w-2/3 md:mx-auto">
        <div className="my-auto">
          <h1 className="text-4xl font-bold mb-10 text-center font-oswald uppercase">
            Cenário Competitivo
          </h1>
          <p className="md:w-1/2 md:mx-auto md:text-center text-justify mx-5">
            O cenário competitivo de Valorant é um dos mais empolgantes da
            atualidade. Torneios nacionais e internacionais atraem milhões de
            espectadores, enquanto jogadores profissionais competem pelo título
            de melhores do mundo. A comunidade acompanha as competições com
            paixão, vibrando com as jogadas épicas e se inspirando nos melhores
            jogadores.
          </p>
          <div className="mx-auto flex justify-center mt-10 font-oswald">
            <a href="https://valorantesports.com/" target="_blank">
              <p className="text-xl text-center ring ring-red-500 border-red-500 transition hover:bg-red-500 hover:ring-offset-4 p-3">
                Acompanhe aqui
              </p>
            </a>
          </div>
        </div>
      </section>

      <hr className="mt-16 mb-24 w-2/3 mx-auto" />

      <Info />

      <hr className="mt-24 mb-16 w-2/3 mx-auto" />

      <section className="text-center mb-36">
        <h1 className="text-4xl font-oswald font-bold uppercase mb-3">
          Baixe Valorant Gratuitamente!
        </h1>
        <h2 className="text-3xl font-oswald mb-5">
          Instale e divirta-se com seus amigos!
        </h2>
        <p className="font-inconsolata">Baixe no site oficial do Valorant</p>
        <div className="mx-auto flex justify-center mt-10">
          <a href="https://playvalorant.com/pt-br/download/" target="_blank">
            <p className="text-xl text-center font-oswald font-bold uppercase border-2 ring ring-neutral-50 transition bg-red-500 sm:hover:bg-neutral-50 sm:hover:text-dark sm:hover:border-neutral-900 p-3">
              Jogue Agora!
            </p>
          </a>
        </div>
      </section>
    </>
  )
}
