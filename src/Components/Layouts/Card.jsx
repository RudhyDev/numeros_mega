import './Card.css'
import React from 'react';

export default props => //Para criar classes CSS no react usa-se o className
    <div className='Card'>
        
        <div className='Titulo'> {/*Essa div renderiza o titulo do componente Card do index */}
            {props.titulo}
        </div>

        <div className='Conteudo'> {/*Essa div renderiza o conteudo que está dentro da div Card lá no index  */}
            {props.children}
        </div>
        
    </div>