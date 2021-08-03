import React from 'react';
import Card from './card';
import mobile from '../images/mobile-post.png';
import neighborhood from '../images/our-neighborhood.png';
import random from '../images/random-thoughts.png';
import alert from '../images/alert.png';

export default function Body() {

  const cards = [
    {
      image: mobile,
      title: 'CSU Chancellor',
      description: 'Message Against Racism',
      path: 'pathurl',
    },
    {
      image: neighborhood,
      title: 'President Covino',
      description: 'Message Against Racism',
      path: 'pathurl',
    },
    {
      image: random,
      title: 'BLM RESOURCES',
      description: 'Action plans that center our commitment to and support of Black lives',
      path: 'pathurl',
    },
    {
      image: alert,
      title: 'COVID-19 RESOURCES',
      description: 'How to deal with your new tracking chip',
      path: 'pathurl',
    },
  ]
  return (
    <main className="container mx-auto grid sm:grid-cols-1 md:grid-cols-7 gap-4 font-sans border-t-2 border-yellow-400 my-4">
      <div className="flex flex-col col-span-2 p-8">
        <div className="self-end">
          <h1>
            Decouvrez toutes
            nos solutions.
          </h1>
          <p>Que vous soyez proprietaire deparking, operateur de mobilite, gestionnaire de flotte automobile ouacteur de la ville, decouvrez tous nosservices</p>
          <button className="bg-yellow-400 text-white border-2 border-yellow-400 hover:bg-white hover:text-yellow-400 px-4 py-2 rounded-xl font-bold">
            Contact Us!
          </button>
        </div>
      </div>
      <div className="grid col-span-5 sm:grid-cols-1 md:grid-cols-2 gap-2">
        {
          cards.map(card => (
            <div className="p-8">
              <Card {...card} />
            </div>
          ))
        }
      </div>
    </main>
  )
}