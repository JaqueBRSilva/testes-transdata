import { Link } from "react-router-dom";
import '../../App.css';
import logo from '../../logo.svg';

const Home = () => {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <h1 className="Titles">TESTES TRANSDATA</h1>

            <div className="Container-links">
                <Link to="/teste1" className="Links">TESTE 1</Link>
                <Link to="/teste2" className="Links">TESTE 2</Link>
                <Link to="/teste3" className="Links">TESTE 3</Link>
            </div>
        </div>
    )
}

export default Home;