import React, { useState } from 'react';

export default (props)=>{
    const [numeros, setNumeros] = useState(Array(props.qtdeNumero).fill(0))

    function gerarNumeroNaoContido(array){
        const min =1
        const max =60
        const novoNumero = parseInt(Math.random()*(max -min) + min)
        return array.includes(novoNumero) ? gerarNumeroNaoContido(array) : novoNumero
    }

    
    function gerarNumeros(){
        const novoArray = Array(props.qtdeNumero)
        .fill(0)
        .reduce(a => [...a, gerarNumeroNaoContido(a)], [])
        .sort((a, b) => a -b)
        setNumeros(novoArray)
    }

    return (
        <div>
            <h3>Números Sorteados</h3>
            <h3>{numeros.join(' ')}</h3>
            <button onClick={gerarNumeros}>Gerar Números</button>
        </div>
    );
};