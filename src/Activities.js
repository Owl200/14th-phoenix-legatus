import React from 'react'
import ImgCard from './ImgCard'
import daily from './images/daily.png'
import farmeo from './images/farmeo.png'
import mapas from './images/mapas.png'
import ultimate from './images/ultimate.jpg'
import unknown from './images/unknown.png'

const Activities = () => {



  return (
    <div>
        <h2>Algunas de nuestras actividades semanales</h2>
        <ImgCard img={daily} alternate={false} title={'Daily Roulettes'} info={'Si estas cansado de tener que esperar en queue para cada una de tus ruletas, cada dia nosotros hacemos las ruletas diarias para evitarnos el queue.'} />
        <br/>
        <ImgCard img={farmeo} alternate={true} title={'Farmeo/Learning de extremes (entre martes y viernes)'} info={'Podras evitar tener que entrar al party finder con la esperanza de que todo el team ya se sepa la pelea a la perfeccion.'} />
        <br/>
        <ImgCard img={mapas} alternate={false} title={'Mapas (se organiza en discord)'} info={'Podras traer tus mapas para hacerlos junto a gente de confianza y tu mismo puedes poner tus reglas de looteo.'} />
        <br/>
        <ImgCard img={ultimate} alternate={true} title={'Ultimates (sabado y domingo)'} info={'Si eres de las personas a las que les gusta retarse a si mismos de la manera mas extrema, tenemos los fines de semana donde se hacer progreso de Ultimates.'} />
        <br/>
        <ImgCard img={unknown} alternate={false} title={'???????'} info={'Necesitas ayuda en algun trial, extreme o tienes dudas con alguna cosa? No dudes en pregutar! Siempre habra alguien dispuesto a ayudar con lo que requieras.'} />
    </div>
  )
}

export default Activities