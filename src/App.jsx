import { useEffect, useState } from 'react'
import Header from './components/Header'
import Resultado from './components/Resultado'

function App() {
  //Hooks- useState- manipula o estado da váriavel

  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [mostrarresultado, setMostrarResultado] = useState(false);
  

  //FUNÇÃO CALCULAR IMC
  const calcularImc=()=>{
    if(peso>0 && altura>0){
      const imc = peso/(altura*altura);
      setResultado(imc)
    }else{
      alert("Insira valores válidos")
    }
  }


  //EFEITO COLATERAL PARA MOSTRAR O RESULTADO
  useEffect(()=>{
    //condicional ternaria, se o resultado for maior que zero mostra na tela
    resultado>0 ? setMostrarResultado (true) : setMostrarResultado (false)
    //o efeito só executa quando a variavel resultado for alterado 
  },[resultado])




  return (
    <section className="container">
      <div className="box">
        <Header/>
        <form>
          <div>
            <label htmlFor="altura">Altura<span>(ex:1.80)</span></label>
            <input 
            id="altura"
            type="nunmber"
            step="0.01" //permite o uso de ponto/virgula (casa decimais)
            placeholder="Digite sua altura"
            onChange={({target})=>setAltura(parseFloat(target.value))}
            />
          </div>
          <div>
            <label htmlFor="peso">Altura<span>(ex: 80kg)</span></label>
            <input 
            id="peso"
            type="nunmber"
            step="0.01" //permite o uso de ponto/virgula (casa decimais)
            placeholder="Digite seu peso"
            onChange={({target})=>setPeso(parseFloat(target.value))}
            />
          </div>
          <button type="button" onClick={calcularImc}>Calcular</button>    
        </form>
     
      </div>
      {mostrarresultado &&(
        //ENVIA O VALOR FORMATADO COM 2 CASA DECIMAIS VIA PROPS PARA O COMPONENTE RESULTADO
        <Resultado resultado={resultado.toFixed(2)}/>
      )}

    </section>
  )
}

export default App
