import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
    /* State that will store the search term */
    const [searchTerm, setSearchTerm] = useState('');

    /* Function that will be called to update the search term */
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