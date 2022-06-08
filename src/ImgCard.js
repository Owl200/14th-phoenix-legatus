import React from 'react'
import './imgcard.css'

const ImgCard = (props) => {
  return (
    <div className={props.alternate ? 'card--alternate' : 'card'}>
        <div className={props.alternate ? 'card__img-wrapper--alternate' : 'card__img-wrapper'}>
            <div className={props.alternate ? 'card__img-container--alternate' : 'card__img-container'}>
                <img className='card__img-container__img' src={props.img} alt={props.alt}/>
            </div>
        </div>
        <div className={props.alternate ? 'card__info-container--alternate' : 'card__info-container'}>
            <h3>{props.title}</h3>
            <p>{props.info}</p>
        </div>
    </div>
  )
}

export default ImgCard

//9
// 1.30