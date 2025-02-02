import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
    // Estado para armazenar o termo de busca
    const [searchTerm, setSearchTerm] = useState('');

    // Função que será chamada para atualizar o termo de pesquisa
    const handleSearchChange = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    return (
        <div>
            <Header onSearchChange={handleSearchChange} />
            <Main searchTerm={searchTerm} />
            <Sidebar />
            <Footer />
        </div>
    );
}

export default App;
