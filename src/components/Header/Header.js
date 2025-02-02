import React from 'react';
import './Header.css';
import smallArrowRight from '../../assets/icons/small-right.png';
import smallArrowLeft from '../../assets/icons/small-left.png';
import search from '../../assets/icons/search.png';

const Header = ({ onSearchChange }) => {
    // Função que captura o valor do input e chama o onSearchChange do App.js
    const handleInputChange = (event) => {
        onSearchChange(event.target.value);
    };

    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallArrowLeft} alt="Seta esquerda" />
                </button>
                <button className="arrow-right">
                    <img src={smallArrowRight} alt="Seta direita" />
                </button>
            </div>
            <div className="header__search">
                <img src={search} alt="Buscar"/>
                <input 
                    id="search-input" 
                    maxLength="800" 
                    autoCorrect="off" 
                    autoCapitalize="off" 
                    spellCheck="false"
                    placeholder="O que você quer ouvir?"
                    onChange={handleInputChange} // Chama a função para passar o valor da pesquisa para o App
                />
            </div>
            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    );
};

export default Header;