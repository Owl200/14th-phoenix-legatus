import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './imgcard.css'

const ImgCard = (props) => {
  const {ref, inView} = useInView({ threshold: 0.2 })
  const animation = useAnimation()

  useEffect( _ => {
    inView ? animation.start('visible') :
    animation.start('hidden')

  }, [inView, animation])

  //initial variations for each card image 
  const leftVariations = {
    hidden: {
        x: -50,
        rotate: -5,
        opacity: 0,
        aspectRatio: 1/1,
    },
    visible: {
        x: 0,
        rotate: 0,
        opacity: 1,
        aspectRatio: 1/1,
        transition: {
          x: { stiffness: 500, velocity: 100 }
        }
    }
}

//variations for each card image
const rightVariations = {
    hidden: {
        x: 50,
        rotate: 5,
        opacity: 0,
        aspectRatio: 1/1,
    },
    visible: {
        x: 0,
        rotate: 0,
        opacity: 1,
        aspectRatio: 1/1,
        transition: {
          x: { stiffness: 500, velocity: -100 }
        }
    }
}

  return (
    <motion.div ref={ref} className={props.alternate ? 'card--alternate' : 'card'}>
        <motion.div animate={animation} variants={props.alternate ? rightVariations : leftVariations} ClassName={props.alternate ? 'card__img-wrapper--alternate' : 'card__img-wrapper'}>
            <div className={props.alternate ? 'card__img-container--alternate' : 'card__img-container'}>
                <img className='card__img-container__img' src={props.img} alt={props.alt}/>
            </div>
        </motion.div>
        <div className={props.alternate ? 'card__info-container--alternate' : 'card__info-container'}>
            <h3>{props.title}</h3>
            <p>{props.info}</p>
        </div>
    </motion.div>
  )
}

export default ImgCard
