import './Main.css';
import Calculator from '../../components/Calculator/Calculator.js';

function Main() {
  return (
    <main>
      <Calculator calculatorName='Calculadora 01'/>
      <Calculator calculatorName='Calculadora 02' />
      <Calculator calculatorName='Calculadora 03' />
      <Calculator calculatorName='Calculadora 04' />
    </main>
  )
}

export default Main;