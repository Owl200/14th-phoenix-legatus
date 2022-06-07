import React from 'react'
import ImgCard from './ImgCard'
import granja from './images/granja.png'
import establo from './images/establo.png'

const House = () => {
  return (
    <>
        <h2>En nuestra casa contamos con:</h2>
        <ImgCard img={granja} alternate={false} alt={'Nuestra granja'} title={'Nuestra cosecha'} info={'Si quieres siempre tener las cebollas mas frescas, este es el sitio ideal para ti!'} />
        <br/>
        <ImgCard img={establo} alternate={true} alt={'Nuestra establo'} title={'Nuestros chocobos'} info={'Quieres darle a tu chocobo los mejores cuidados, nosotros amamos los chocobos ajenos tanto como los nuestros. Siempre estara siendo entrenado con nosotros!'} />
    </>
  )
}

export default House