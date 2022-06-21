import React from 'react'
import PersonCard from './PersonCard'
import owli from './images/owli.png'
import luna from './images/luna.png'
import raynie from './images/raynie.png'
import velkan from './images/velkan.png'
import arturya from './images/arturya.png'
import cirilla from './images/cirilla.png'
import laguna from './images/laguna.jpg'
import kida from './images/kida1.png'
import ryonia from './images/ryonia.png'
import hans from './images/hans.png'

const About = () => {
  
  const person = [
    {      
      thumbnail: ryonia,
      name: 'Ryo Nya (Fenix Flammer)',
      phrase: '"SUCH DEVASTATION... "',
      jobs: ['Warrior', 'Dancer', 'White Mage', 'Scholar'],
      interests: ['Hacer la mayor cantidad de contenido disponible'],
      trials: [`Minstrel Ballad: Shinryu's domain`, `Tsukuyomi's Pain`],
      dungeons: [`The Tam-Tara Deepcroft (Hard)`,  `The Twinning`],
      raids: ['Eden, todos!'],
      description: `Descubri que me gustan los MMO con este juego, siempre jugué sola y ahora disfruto jugar con más gente ♥`
    }, 
    {      
      thumbnail: cirilla,
      name: 'Cirilla Falka (Fawkes)',
      phrase: '"Ours is the wisdom to weave the fabric of reality. Ours is the power to create!"',
      jobs: ['Red Mage', 'Dragoon', 'White Mage', 'Astrologian', 'Dark Knight'],
      interests: ['raids', 'savage raids', 'trials', 'roulettes', 'ultimates'],
      trials: [`The Final Day`, `The Seat of Sacrifice`, `The Dying Gasp`, `Castrum Fluminis`, `Thok ast Thok`],
      dungeons: ['The Dead Ends', `Amaurot, Matoya's Relict`, `The Ghimlyt Dark`, `Sohr Khai`],
      raids: ['Nier Raids', 'Eden Raids', 'Ivalice Raids', 'Alphascape Raids'],
      description: `The world needs more love and care in it. I try to bring a little of both every day I'm on. If it is within my power to do so I will help you as best as I can. I enjoy raiding and endgame content. I like to say I adapt and learn quickly. Treasure maps are also a fun activity and glam is the true endgame. Smile and love those around you.`
    }, 
    {      
      thumbnail: luna,
      name: `Luna D'igazi (Fawkes)`,
      phrase: '"Forge ahead. May all our tomorrows be blessed with joy."',
      jobs: ['Dragoon', 'Red Mage', 'Sage', 'Reaper', 'Gunbreaker'],
      interests: ['High-end duty', 'Extreme trials', 'Daily roulettes', 'mapas'],
      trials: [`Urth's Fount`, `Nidhogg's Rage`, `Shinryu's Domain`, 'The Wreath of Snakes', 'todo SHB y EW (hasta el momento).'],
      dungeons: ['Mt. Gulg', 'Amarout', 'The Twinning', `todos los dungeons de Endwalker`],
      raids: ['The Second Coil of Bahamut - Turn 4', 'Alexander - The Soul of the Creator', `Alphascape V4.0 Savage`, `Eden's Promise: Eternity`, 'Nier Raid', 'Aglaia', 'Pandaemonium Savage'],
      description: 'Pensé que iba a ser aburrido ya que sería mi primer MMO, pero no, ahora es mi juego favorito. :)'
    }, 
    {      
      thumbnail: velkan,
      name: 'Velkan Daryn (Fawkes)',
      phrase: '"Man should fight for the joy of it. To live, to eat, to breed—lesser beasts snap and howl at one another for this. Only man has the wisdom and the clarity to embrace violence for its own sake. For we who are born into this merciless, meaningless world, have but one candle of life to burn."',
      jobs: ['Dark Knight', 'Gunbreaker', 'Paladin', 'Ninja', 'Samurai', 'Bard'],
      interests: ['Savage', 'extreme trials', 'ultimates', 'mapas', 'RP'],
      trials: ['The Mothercrystal', 'The Dancing Plague', 'The Seat of Sacrifice', 'The Cloud Deck', 'Memoria Miseria', 'The Jade Stoa', 'The Final Steps of Faith', 'The Singularity Reactor'],
      dungeons: ['Pharos Sirius', 'The Tam-Tara Deepcroft (Hard)', 'The Great Gubal Library', `Bardam's Mettle`, 'Amaurot', 'Smileton'],
      raids: [`The Tower at Paradigm's Breach`, `Eden's Promise: Eternity`, `Alphascape V4.0`, `Alphascape V2.0`, `Sigmascape V4.0`, `The Royal City of Rabanastre`, `The Orbone Monastery`, `Dun Scaith`, `Alexander - The Soul of the Creator`],
      description: 'Vine por la historia y el gameplay, me quedé por el glamour y Savage content. Yoshi-P, danos esos 800 slots del armario. Primer aviso.'
    }, 
    {      
      thumbnail: kida,
      name: 'Kida Kash (Fenix+)',
      phrase: '"A smile better suits a hero."',
      jobs: ['White Mage', 'Warrior', 'Dancer', 'Summoner', 'Dragoon'],
      interests: ['I enjoy trying out everything in-game honestly. My favorite stuff is questing and exploring, along with gathering though.'],
      trials: [`The Striking Tree', 'Hildebrand trials', 'Thok ast Thok', 'The Final Steps of Faith', 'Emanation', 'Castrum Fluminus', 'The Dying Gasp', 'The Final Day`],
      dungeons: ['Pharos Sirius', 'Saint Mociannes Arbortium', `Bardam's Mettle`, 'Amaurot', 'The Dead Ends', 'Smileton'],
      raids: ['The Final Coil of Bahamut Turn 3', 'Alexander: The Burden of the Son', 'Alphascape V4.0', `Eden's Verse: Fulmination`, `Asphodelos Third Circle`, `NieR`, `Agalia`],
      description: 'I enjoy healing and helping people figure out the game! Let me know if you ever need help or want a healer that fits in your pocket! 🌸'
    },
    {      
      thumbnail: laguna,
      name: 'Laguna Leonhop (Fenix+)',
      phrase: '"I do not consider you to be truly alive. Ergo, I will not be guilty of murder if I kill you."',
      jobs: ['Gunbreaker', 'Machinist'],
      interests: ['Chocobo Racing', 'Golden Saucer', 'Glamour', 'Housing', 'Roulettes'],
      trials: ['Thok ast Thok', 'Thornmarch', 'The Chrysalis', 'Battle on the Big Bridge', `The Drago's Neck`, `Battle in the Big Keep`, `Castrum Fluminis`, `The Great Hunt`],
      dungeons: ['Haukke Manor', 'Snowcloak', `The Wanderer's Palace`, `The Vault`, `Saint Mociannes Arboretum`, `Baelsars Wall`, `Dohn Mheg`, `The Qitana Ravel`],
      raids: ['Ivalice Raids', 'Nier Raids', 'Eden Raids', 'Sigmascape'],
      description: `I am a very casual player that is taking my sweet time to get through the story. Too many distractions in this and other games to finish it quickly. I love housing and the Golden Saucer. I have decorated my apartment, Kida Kash's large house, Cirilla Falka's small house, and the second floor of our medium FC house. If you want me to decorate your residence it's no problem, my commissions are open and discounted for FC members.`
    }, 
    {      
      thumbnail: arturya,
      name: `Arturya D'igazi (Fenix)`,
      phrase: `"I'll kill your god if I have to. Heck, even if I don't have to."`,
      jobs: ['Samurai', 'Dark Knight', 'Paladin'],
      interests: ['trials', 'savage', 'ultimate'],
      trials: ['Emanation','The Royal Menagerie', 'Hells Kier' ,'P1T6', 'Dancing Plague'],
      dungeons: ['Amaurot', 'The Twinning', 'The Antitower', 'Pharos Sirius'],
      raids: [`Eden's Verse: Refulgence`, `The Weeping City`, `Bahamut turn 4`],
      description: 'Soy culpable del vicio de muchos'
    }, 
    {      
      thumbnail: hans,
      name: 'Hanstein Zlatasch (Fenix)',
      phrase: `"Hear - the song at creation's end. Feel - the agony of hope's demise. Think - and find your way in the darkness. "`,
      jobs: ['Summoner', 'Black Mage', 'Gunbreaker', 'Samurai', 'Monk', 'Machinist', 'Astrologian'],
      interests: ['MSQ, Lore, RP, Daily Roulette, Maps, Trials, Dungeons, etc.'],
      trials: ['The Final Day', 'The Mothercrystal', 'The Dark Inside', 'The Seat of Sacrifice', 'The Dying Gasp', 'The Singularity Reactor'],
      dungeons: [`The Dead Ends`, `Amaurot`, `The Aitiascope`, `Ktisis Hyperboreia`, `The Heroes' Gauntlet`, `The Twinning`],
      raids: ['Aglaia', 'Omega: Sigmascape', 'Ivalice Raids', 'Omega Raids', 'Alexander Raids'],
      description: `Vivo por la historia y el lore pero mi disfrute es compartir con los amigos que hice en el camino.`
    },
    {      
      thumbnail: owli,
      name: 'Owli Yggdra (Fenix)',
      phrase: '"Remember us... remember that we once lived..."',
      jobs: ['Reaper', 'Red Mage', 'Warrior', 'Sage', 'Ninja', 'Samurai'],
      interests: ['daily roulettes', 'cualquier trial', 'mapas'],
      trials: ['The Dark Inside', 'The Dying Gasp', `Castrum Fluminis`, 'Containment Bay P1T6', 'The Striking Tree'],
      dungeons: ['Pharos Sirius', 'The Tam-Tara Deepcroft (Hard)', 'The Great Gubal Library', `Bardam's Mettle`, 'Amaurot', 'Smileton'],
      raids: ['The Burden of the Son', 'Alphascape V2.0', `Eden's Gate: Sepulture`, `Eden's Promise: Eternity`, 'Asphodelos: The Fourth Circle'],
      description: 'Empece solo queriendo probar un MMO. Termine jugando la historia completa en solo unos meses, con 2000 horas xD '
    }, 
    {      
    thumbnail: raynie,
    name: 'Raynie Valeska (Fenix)',
    phrase: '"Herein I commit the chronicle of the traveler. Shepherd to the stars in the dark. Though the world be sundered and our souls set adrift, where you walk, my dearest friend, fate shall surely follow."',
    jobs: ['Red Mage', 'Dark Knight', 'Astrologian', 'Ninja', 'Machinist', 'Samurai'],
    interests: ['daily roulettes', 'mapas'],
    trials: [`TMB: Shinryu's Domain`, `TMB: Hades' Elegy`, `The Seat of Sacrifice`, `The Mothercrystal`, `The Final Day`],
    dungeons: ['Amaurot', 'The Grand Cosmos', 'The Twinning', 'The Tower of Babil', 'The Altiascope', 'The Dead Ends', 'Smileton'],
    raids: ['Sigmascape V4.0', `The Tower at Paradigm's Breach`, `Eden's Verse: Refulgence`, 'Aglaia', 'Asphodelos: The Fourth Circle'],
    description: 'Nunca me alegre tanto de ser una refugiada del wow'
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