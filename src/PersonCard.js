import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './PersonCard.css'


const PersonCard = (props) => {

    const {ref, inView} = useInView({ threshold: 0.2 })
    const animation = useAnimation()
  
    useEffect( _ => {
      inView ? animation.start({
        x: 0, 
        opacity: 1,
        transition: {
            type: 'spring', 
            duration: 0.5 
        }
      }) :
      animation.start({
        x: -400, 
        opacity: 0,
      })
  
    }, [inView, animation])

    //data for the cards
    const data = {
        thumbnail: props.person.thumbnail,
        name: props.person.name,
        phrase: props.person.phrase,
        jobs: [...props.person.jobs],
        interests: [...props.person.interests],
        trials: [...props.person.trials],
        dungeons: [...props.person.dungeons],
        raids: [...props.person.raids],
        description: props.person.description
    }


  return (
    <div className='person-card'>
        <div ref={ref} className='person-card__image-wrapper'>
            <motion.div  animate={animation}  className='person-card__image-mask'>
                <motion.img  animate={{x: 0}} initial={{x: 0}} className='person-card__img' src={data.thumbnail} alt={`${data.name.split(' ')[0]} thumbnail`}/>
            </motion.div>
        </div>
        <div className='person-card__info'>
            <h2>{data.name}</h2>
            <h3 className='person-card__info-phrase'>{data.phrase}</h3>
            <div/>
            <ul className='person-card__ul'>
                <li><span className='person-card__span'>Mis Jobs favoritos: </span>{data.jobs.join(', ')}</li>
                <li><span className='person-card__span'>Mis intereses: </span>{data.interests.join(', ')}</li>
                <li><span className='person-card__span'>Mis trials favoritos: </span>{data.trials.join(', ')}</li>
                <li><span className='person-card__span'>Mis dungeons favoritos: </span>{data.dungeons.join(', ')}</li>
                <li><span className='person-card__span'>Mis raids favoritos: </span>{data.raids.join(', ')}</li>
            </ul>
            <p>{data.description}</p>
        </div>
    </div>
  )
}

export default PersonCard