import React from 'react'
import ImgCard from './ImgCard'
import granja from './images/granja.png'
import establo from './images/establo.png'
import mesas from './images/mesas.png'
import dummy from './images/dummy.png'
import bar from './images/bar.png'
import saucer from './images/saucer.png'
import workshop from './images/workshop.png'


const House = () => {


  return (
    <>
        <h2>En nuestra casa contamos con:</h2>
        <ImgCard img={workshop} alternate={false} alt={'nuestra workshop'} title={'Workshop'} info={'Ven a craftear junto con nosotros mientras escuchas nuestra amplia gama de canciones en la rocola'} />
        <br/>
        <ImgCard img={saucer} alternate={true} alt={'nuestra sala de entretenimento'} title={'Gold Saucer'} info={'Cansado de toda la multitud de personas en el Gold Saucer? Ven a farmear ese MGP con nosotros!'} />
        <br/>
        <ImgCard img={granja} alternate={false} alt={'nuestra granja'} title={'Jardineria'} info={'Si quieres siempre tener las cebollas mas frescas, este es el sitio ideal para ti!'} />
        <br/>
        <ImgCard img={establo} alternate={true} alt={'nuestra establo'} title={'Establo'} info={'Quieres darle a tu chocobo los mejores cuidados? Nosotros amamos los chocobos ajenos tanto como los nuestros. Siempre estara siendo entrenado con nosotros!'} />
        <br/>
        <ImgCard img={mesas} alternate={false} alt={'nuestra cafeteria al aire libre'} title={'Cafeteria al aire libre'} info={'Cansado de haber raideado por 8 horas? Ven a tomar un juguito en nuestra cafeteria al aire libre, donde podras disfrutar del hermoso panorama de Empyreum!'} />
        <br/>
        <ImgCard img={dummy} alternate={true} alt={'nuestro dummy'} title={'Dummy'} info={'Quieres pegarle a algo? Claro que tenemos un dummy propio!'} />
        <br/>
        <ImgCard img={bar} alternate={false} alt={'bar'} title={'Bar'} info={'Perfecto para recibir djs y disfrutar del fin de semana (o no tan fin de semana)'} />
    </>
  )
}

export default House