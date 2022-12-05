import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Teste1 from './pages/Teste1';
import Teste3 from './pages/Teste3';
import Teste2 from './pages/Teste2';
import Home from './pages/Home';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/teste1" element={<Teste1 />} />
                <Route path="/teste2" element={<Teste2 />} />
                <Route path="/teste3" element={<Teste3 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;