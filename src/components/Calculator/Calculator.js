import {useState} from 'react';
import axios from 'axios';

function Calculator(props) {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState('');

  async function handleSubmit() {
    const api = axios.create({baseURL: 'http://localhost:3000/'});

    const response = await api.get(`/calculate/${operation}?n1=${n1}&n2=${n2}`);

    setResult(response.data.result);
  }

  function onChangeRadio(e) {
    setOperation(e.target.value)
  }

  return (
    <>
      {props.calculatorName}

      <div>
        <div>Number 01: <input type='number'  onChange={(e) => setN1(e.target.value)} /></div>
        <div>Number 02: <input type='number' onChange={(e) => setN2(e.target.value)}/></div>
        Operation: 
        <div onChange={onChangeRadio}>
          Add <input name='operation' type='radio' value='add' />
          Sub <input name='operation' type='radio' value='sub' />
          Multi <input name='operation' type='radio' value='multi' />
          Div <input name='operation' type='radio' value='div' />
        </div>
        <div>
          <button onClick={handleSubmit}>Calculate</button>
        </div>

        <div>
          {`Result: ${result}`}
        </div>
      </div>
    </>
  )
}

export default Calculator;