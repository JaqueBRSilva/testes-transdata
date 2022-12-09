import { useState } from "react";
import Header from "../../components/Header";

const Teste2 = () => {

    const [word, setWord] = useState('');
    const [calculatePercentage, setCalculatePercentage] = useState([0])
    const [lettersList, setLettersList] = useState(['',])
    const [totalCount, setTotalCount] = useState([0]);
    const [wordSize, setWordSize] = useState(0);

    const validateStringOnlyLetters = (word) => {
        let regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$/;
        return regex.test(word);
    }

    const handleCalculateCharactersFrequency = (wordReceived) => {

        if (validateStringOnlyLetters(wordReceived) === false) {
            alert("PALAVRA INVÁLIDA\nDeve haver apenas letras - sem números ou caracteres especiais")
            setWord('');
            return
        }

        setWordSize(wordReceived.length)
        let wordConvertedToLowerCase = wordReceived.toLowerCase()

        const arrayLetters = new Map();

        for (let letter of wordConvertedToLowerCase) {
            let count = arrayLetters.get(letter) || 0;
            arrayLetters.set(letter, count + 1);

            setTotalCount(...arrayLetters.values())

            let sumToPercentage = ((totalCount / 100) / wordSize * 100 * 100)
            setCalculatePercentage([`${sumToPercentage.toFixed()}`])
        }

        setLettersList([...arrayLetters.keys()], [...calculatePercentage])
    }

    return (
        <div>
            <Header
                title="Teste 2"
            />

            <h4 className="Test-statement">
                Escreva programa em Javascript ou ReactJS capaz de identificar
                a(s) letra(s) mais frequente(s) em uma cadeia de caracteres.
                A entrada será uma cadeia de caracteres sem espaços de no máximo
                1000 caracteres. A saída deverá ser uma lista com as letra(s)
                seguida por sua porcentagem com duas casas decimais, deve ser
                ordenada pela porcentagem do maior para o menor.
                Deve-se desconsiderar diferenças de maiúsculas e minúsculas.
                Qualquer outro caractere que não seja uma letra de A a Z deverá
                ser desconsiderado.
                <br />
                Exemplo:
                <blockquote>
                    Entrada: Arara <br />
                    Saída: a = 60% r = 40%.
                </blockquote>
            </h4>

            <div className="Input-number">
                <label htmlFor="">
                    Digite uma palavra para calcular frequência
                </label>

                <div className="App">
                    {lettersList.map((item, key) =>
                        <p className="Result-board" id={key}>
                            {`${item} = ${calculatePercentage}%`}
                        </p>
                    )}
                </div>

                <input
                    type="text"
                    autoFocus
                    maxLength={1000}
                    value={word.trim()}
                    onChange={e => setWord(e.target.value)}
                />

                {(word === '') ?
                    <button disabled>
                        Exibir Porcentagem
                    </button>
                    :
                    <button className="Button-active" onClick={() => handleCalculateCharactersFrequency(word)}>
                        Exibir Porcentagem
                    </button>
                }
            </div>
        </div>
    )
}

export default Teste2;