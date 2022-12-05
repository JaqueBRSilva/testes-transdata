import { useState } from "react";
import Header from "../../components/Header";
import './styles.css';

const Teste1 = () => {

   const [amount, setAmount] = useState(null);
   const [results, setResults] = useState();

   const handleLessAmountOfNotes = (value) => {

      var counter20 = 0;
      var counter10 = 0;
      var counter5 = 0;
      var counter1 = 0;

      if (value !== 0) {
         for (; value >= 20;) {
            counter20++
            value -= 20;
         }

         for (; value >= 10;) {
            counter10++
            value -= 10;
         }

         for (; value >= 5;) {
            counter5++
            value -= 5;
         }

         for (; value >= 1;) {
            counter1++
            value -= 1;
         }
      }
      setResults(`${counter20} x 20 | ${counter10} x 10 | ${counter5} x 5 | ${counter1} x 1 `)
   }

   return (
      <div>
         <Header
            title="Teste 1"
         />

         <h4 className="Test-statement">
            Considere um Caixa Eletrônico com cédulas disponíveis nos valores 20, 10, 5 e 1 escreva
            um programa em Javascript ou ReactJS em que o usuário preenche um valor numérico qualquer
            (número inteiro), realiza os cálculos necessários, e apresenta o resultado com a menor
            quantidade de notas, dos diferentes valores disponíveis, que são necessárias para retornar
            o valor numérico recebido.
         </h4>

         <h2 className="App">Cédulas Disponíveis</h2>

         <div className="Bank-notes">
            <h3 className='Notes'>20</h3>
            <h3 className='Notes'>10</h3>
            <h3 className='Notes'>5</h3>
            <h3 className='Notes'>1</h3>
         </div>

         <div className="App">
            <h2>Retirada de Notas</h2>
            <p className="Result-board">{results}</p>
         </div>

         <div className="Input-number">
            <label htmlFor="">Digite um valor</label>
            <input
               type="number"
               min={1}
               onChange={e => setAmount(e.target.value)}
               value={amount}
            />

            {(amount === null || amount === '') ?
               <button disabled>
                  Calcular
               </button>
               :
               <button className="Button-active" onClick={() => handleLessAmountOfNotes(amount)}>
                  Calcular
               </button>
            }
         </div>

      </div>
   )
}

export default Teste1;