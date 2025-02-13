import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './Main.css';

import Playlist1 from '../../assets/playlist/1.jpeg';
import Playlist2 from '../../assets/playlist/2.png';
import Playlist3 from '../../assets/playlist/3.jpeg';
import Playlist4 from '../../assets/playlist/4.jpeg';
import Playlist5 from '../../assets/playlist/5.jpeg';
import Playlist6 from '../../assets/playlist/6.jpeg';
import Playlist7 from '../../assets/playlist/7.jpeg';
import Playlist8 from '../../assets/playlist/8.jpeg';
import Playlist9 from '../../assets/playlist/9.jpeg';
import Playlist10 from '../../assets/playlist/10.jpeg';
import Playlist11 from '../../assets/playlist/11.jpeg';
import Playlist12 from '../../assets/playlist/12.jpeg';
import Playlist13 from '../../assets/playlist/13.jpeg';
import Playlist14 from '../../assets/playlist/14.jpeg';
import Playlist15 from '../../assets/playlist/15.jpeg';

import artistsData from '../../api-artists/artists.json'; /* Importing the JSON file with artists */

const Main = ({ searchTerm }) => {
    const [filteredArtists, setFilteredArtists] = useState([]); /* State to store filtered artists */
    const [noResults, setNoResults] = useState(false); 
    /* State to check if there are no results */

    useEffect(() => {
        /* When the search term changes, filter the artists */
        if (searchTerm === '') {
            setFilteredArtists([]); /* If the field is empty, do not filter */
            setNoResults(false); /* Does not show the message "Nothing was found" */
        } else {
            const filtered = artistsData.artists.filter((artist) =>
                artist.name.toLowerCase().startsWith(searchTerm.toLowerCase())
            );
            setFilteredArtists(filtered); /* Update filtered artists */

            if (filtered.length === 0) {
                setNoResults(true); /* If there are no results, show the message "Nothing was found" */
            } else {
                setNoResults(false); /* If there are results, hide the message */
            }
        }
    }, [searchTerm]);

    return (
        <div className="playlist-container">
            {/* Welcome messages or "Nothing was found" message */}
            {searchTerm === '' && !noResults && (
                <div className="playlist">
                    <h1 id="greeting">Boas vindas</h1>
                    <h2 className="session">Navegar por todas as seções</h2>
                </div>
            )}

            {noResults && (
                <div className="playlist">
                    <h1 id="greeting">"Nada foi encontrado!"</h1>
                    <h2 className="session">Tente novamente com outra letra.</h2>
                </div>
            )}

            {/* Show 15 initial images when there are no search results or when the search is empty */}
            <div id="result-playlists" className={noResults || searchTerm === '' ? '' : 'hidden'}>
                <div className="offer__scroll-container">
                    <div className="offer__list">
                        <section className="offer__list-item">
                            <a href="#" className="cards">
                                <div className="cards card1">
                                    <img src={Playlist1} alt="Boas festas" />
                                    <span>Boas festas</span>
                                </div>
                            </a>
                            <a href="#" className="cards">
                                <div className="cards card2">
                                    <img src={Playlist2} alt="Feitos para você" />
                                    <span>Feitos para você</span>
                                </div>
                            </a>
                            <a href="#" className="cards">
                                <div className="cards card3">
                                    <img src={Playlist3} alt="Lançamentos" />
                                    <span>Lançamentos</span>
                                </div>
                            </a>
                            <a href="#" className="cards">
                                <div className="cards card4">
                                    <img src={Playlist4} alt="Creators" />
                                    <span>Creators</span>
                                </div>
                            </a>
                            <a href="#" className="cards">
                                <div className="cards card5">
                                    <img src={Playlist5} alt="Para treinar" />
                                    <span>Para treinar</span>
                                </div>
                            </a>
                            <a href="#" className="cards">
                                <div className="cards card6">
                                    <img src={Playlist6} alt="Podcasts" />
                                    <span>Podcasts</span>
                                </div>
                            </a>
                            <a href="#" className="cards">
                                <div className="cards card7">
                                    <img src={Playlist7} alt="Sertanejo" />
                                    <span>Sertanejo</span>
                                </div>
                            </a>
                            <a href="#" className="cards">
                                <div className="cards card8">
                                    <img src={Playlist8} alt="Samba e pagode" />
                                    <span>Samba e pagode</span>
                                </div>
                            </a>
                            <a href="#" className="cards">
                                <div className="cards card9">
                                    <img src={Playlist9} alt="Funk" />
                                    <span>Funk</span>
                                </div>
                            </a>
                            <a href="#" className="cards">
                                <div className="cards card10">
                                    <img src={Playlist10} alt="MPB" />
                                    <span>MPB</span>
                                </div>
                            </a>
                            <a href="#" className="cards">
                                <div className="cards card11">
                                    <img src={Playlist11} alt="Rock" />
                                    <span>Rock</span>
                                </div>
                            </a>
                            <a href="#" className="cards">
                                <div className="cards card12">
                                    <img src={Playlist12} alt="Hip Hop" />
                                    <span>Hip Hop</span>
                                </div>
                            </a>
                            <a href="#" className="cards">
                                <div className="cards card13">
                                    <img src={Playlist13} alt="Indie" />
                                    <span>Indie</span>
                                </div>
                            </a>
                            <a href="#" className="cards">
                                <div className="cards card14">
                                    <img src={Playlist14} alt="Relax" />
                                    <span>Relax</span>
                                </div>
                            </a>
                            <a href="#" className="cards">
                                <div className="cards card15">
                                    <img src={Playlist15} alt="Música Latina" />
                                    <span>Música Latina</span>
                                </div>
                            </a>
                        </section>
                    </div>
                </div>
            </div>

            {/* If there are filtered artists, show them */}
            <div id="result-artist" className={filteredArtists.length === 0 && !noResults ? 'hidden' : ''}>
                <div className="grid-container">
                    {filteredArtists.map((artist) => (
                        <div key={artist.id} className="artist-card">
                            <div className="card-img">
                                <img className="artist-img" src={artist.urlImg} alt={artist.name} />
                                <div className="play">
                                    <FontAwesomeIcon icon={faPlay} />
                                </div>
                            </div>
                            <div className="card-text">
                                <a href="#" className="vst">
                                    <span className="artist-name">{artist.name}</span>
                                    <span className="artist-categorie">{artist.genre}</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Main;