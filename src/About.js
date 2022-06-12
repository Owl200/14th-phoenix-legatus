import React from 'react'
import PersonCard from './PersonCard'
import owli from './images/owli.png'

const About = () => {

  const person = [
    {      
      thumbnail: owli,
      name: 'Owli Yggdra',
      phrase: 'Remember us... remember that we once lived...',
      jobs: ['Reaper', 'Red Mage', 'Warrior', 'Sage', 'Ninja', 'Samurai'],
      interests: ['daily roulettes', 'cualquier trial', 'mapas'],
      trials: ['The Dark Inside', 'The Dying Gasp', `Castrum Fluminis`, 'Containment Bay P1T6', 'The Striking Tree'],
      dungeons: ['Pharos Sirius', 'The Tam-Tara Deepcroft (Hard)', 'The Great Gubal Library', `Bardam's Mettle`, 'Amaurot', 'Smileton'],
      raids: ['The Burden of the Son', 'Alphascape V2.0', `Eden's Gate: Sepulture`, `Eden's Promise: Eternity`, 'Asphodelos: The Fourth Circle'],
      description: 'Empece solo queriendo probar un MMO. Termine jugando la historia completa en solo unos meses, con 2000 horas xD '
    }, 
    {      
      thumbnail: owli,
      name: 'Owli Yggdra',
      phrase: 'Remember us... remember that we once lived...',
      jobs: ['Reaper', 'Red Mage', 'Warrior', 'Sage', 'Ninja', 'Samurai'],
      interests: ['daily roulettes', 'cualquier trial', 'mapas'],
      trials: ['The Dark Inside', 'The Dying Gasp', `Castrum Fluminis`, 'Containment Bay P1T6', 'The Striking Tree'],
      dungeons: ['Pharos Sirius', 'The Tam-Tara Deepcroft (Hard)', 'The Great Gubal Library', `Bardam's Mettle`, 'Amaurot', 'Smileton'],
      raids: ['The Burden of the Son', 'Alphascape V2.0', `Eden's Gate: Sepulture`, `Eden's Promise: Eternity`, 'Asphodelos: The Fourth Circle'],
      description: 'Empece solo queriendo probar un MMO. Termine jugando la historia completa en solo unos meses, con 2000 horas xD '
    }, 
    {      
      thumbnail: owli,
      name: 'Owli Yggdra',
      phrase: 'Remember us... remember that we once lived...',
      jobs: ['Reaper', 'Red Mage', 'Warrior', 'Sage', 'Ninja', 'Samurai'],
      interests: ['daily roulettes', 'cualquier trial', 'mapas'],
      trials: ['The Dark Inside', 'The Dying Gasp', `Castrum Fluminis`, 'Containment Bay P1T6', 'The Striking Tree'],
      dungeons: ['Pharos Sirius', 'The Tam-Tara Deepcroft (Hard)', 'The Great Gubal Library', `Bardam's Mettle`, 'Amaurot', 'Smileton'],
      raids: ['The Burden of the Son', 'Alphascape V2.0', `Eden's Gate: Sepulture`, `Eden's Promise: Eternity`, 'Asphodelos: The Fourth Circle'],
      description: 'Empece solo queriendo probar un MMO. Termine jugando la historia completa en solo unos meses, con 2000 horas xD '
    }, 
  ]

  const personsToRender = person.map((e, i) => <PersonCard key={i} person={e} />)

  return (
    <div>
      <h2>Conoce a algunos de nuestros integrantes:</h2>
      {personsToRender}
    </div>
  )
}

export default About