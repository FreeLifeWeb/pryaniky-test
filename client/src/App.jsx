import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Login } from './components/Login/Login';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main/Main';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}

export default App;
