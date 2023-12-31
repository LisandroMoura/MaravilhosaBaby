// import { useState } from 'react'
import './App.css'
import './assets/sass/Header.scss'

import { FaFacebook,  FaLinkedinIn, FaPinterest } from 'react-icons/fa';


function App() {
// const [count, setCount] = useState(0)

    //look the posts
    const posts = document.querySelectorAll('.gallery-item');

    posts.forEach(post => {
        post.addEventListener('click', () => {
            //Get original image URL
            //O método split() divide uma String em uma lista ordenada de substrings,
            // no caso abaixo, foi pego a url as src da imagem sem os parâmetros finais de URL
            const imgUrl = post.firstElementChild.src.split("?")[0];

            //Open image in new tab
            window.open(imgUrl, '_blank');
        });
    });

    return (
    <>

        <header className='headerSass'>
            

            <div className="container">

                <div className="profile">

                    <div className="profile-image">

                        <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
                            alt="" />

                    </div>

                    <div className="profile-user-settings">

                        <h1 className="profile-user-name">AmaravilhosaBaby_</h1>

                        {/* <button className="btn profile-edit-btn">Comente</button> */}

                        <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog"
                                aria-hidden="true"></i></button>

                    </div>

                    <div className="profile-stats">

                        <ul>
                            <li><span className="profile-stat-count">164</span> fotos</li>
                            <li><span className="profile-stat-count">12</span> comentários</li>
                            <li><span className="profile-stat-count">1222</span> Likes</li>
                        </ul>

                    </div>

                    <div className="profile-bio">

                        <p>A <span className="profile-real-name">maravilhosa Baby</span> está esperando por você, deixe seu like, mande seu recado para esta fofura 📷✈️🏕️</p>

                    </div>

                </div>

                <div className="socials">
                    <ul className='socialIcons'>
                        <li>
                            <FaFacebook />
                        </li>
                        <li>
                            <FaPinterest />
                        </li>
                        <li>
                            <FaLinkedinIn />
                        </li>
                    </ul>
                </div>
            </div>

        </header>

        <main>

            <div className="container">

                <div className="gallery">

                    <div className="gallery-item" tabIndex="0">

                        <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
                            className="gallery-image" alt="" />

                        <div className="gallery-item-info">

                            <ul>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i
                                        className="fas fa-heart" aria-hidden="true"></i> 56</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i
                                        className="fas fa-comment" aria-hidden="true"></i> 2</li>
                            </ul>

                        </div>

                    </div>

                    <div className="gallery-item" tabIndex="0">

                        <img src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop"
                            className="gallery-image" alt="" />

                        <div className="gallery-item-info">

                            <ul>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i
                                        className="fas fa-heart" aria-hidden="true"></i> 89</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i
                                        className="fas fa-comment" aria-hidden="true"></i> 5</li>
                            </ul>

                        </div>

                    </div>

                    <div className="gallery-item" tabIndex="0">

                        <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop"
                            className="gallery-image" alt="" />

                        <div className="gallery-item-type">

                            <span className="visually-hidden">Gallery</span><i className="fas fa-clone"
                                aria-hidden="true"></i>

                        </div>

                        <div className="gallery-item-info">

                            <ul>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i
                                        className="fas fa-heart" aria-hidden="true"></i> 42</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i
                                        className="fas fa-comment" aria-hidden="true"></i> 1</li>
                            </ul>

                        </div>

                    </div>

                    <div className="gallery-item" tabIndex="0">

                        <img src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop"
                            className="gallery-image" alt="" />

                        <div className="gallery-item-type">

                            <span className="visually-hidden">Video</span><i className="fas fa-video"
                                aria-hidden="true"></i>

                        </div>

                        <div className="gallery-item-info">

                            <ul>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i
                                        className="fas fa-heart" aria-hidden="true"></i> 38</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i
                                        className="fas fa-comment" aria-hidden="true"></i> 0</li>
                            </ul>

                        </div>

                    </div>

                    <div className="gallery-item" tabIndex="0">

                        <img src="https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop"
                            className="gallery-image" alt="" />

                        <div className="gallery-item-type">

                            <span className="visually-hidden">Gallery</span><i className="fas fa-clone"
                                aria-hidden="true"></i>

                        </div>

                        <div className="gallery-item-info">

                            <ul>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i
                                        className="fas fa-heart" aria-hidden="true"></i> 47</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i
                                        className="fas fa-comment" aria-hidden="true"></i> 1</li>
                            </ul>

                        </div>

                    </div>

                    <div className="gallery-item" tabIndex="0">

                        <img src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop"
                            className="gallery-image" alt="" />

                        <div className="gallery-item-info">

                            <ul>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i
                                        className="fas fa-heart" aria-hidden="true"></i> 94</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i
                                        className="fas fa-comment" aria-hidden="true"></i> 3</li>
                            </ul>

                        </div>

                    </div>

                    <div className="gallery-item" tabIndex="0">

                        <img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop"
                            className="gallery-image" alt="" />

                        <div className="gallery-item-type">

                            <span className="visually-hidden">Gallery</span><i className="fas fa-clone"
                                aria-hidden="true"></i>

                        </div>

                        <div className="gallery-item-info">

                            <ul>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i
                                        className="fas fa-heart" aria-hidden="true"></i> 52</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i
                                        className="fas fa-comment" aria-hidden="true"></i> 4</li>
                            </ul>

                        </div>

                    </div>

                    <div className="gallery-item" tabIndex="0">

                        <img src="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop"
                            className="gallery-image" alt="" />

                        <div className="gallery-item-info">

                            <ul>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i
                                        className="fas fa-heart" aria-hidden="true"></i> 66</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i
                                        className="fas fa-comment" aria-hidden="true"></i> 2</li>
                            </ul>

                        </div>

                    </div>

                    <div className="gallery-item" tabIndex="0">

                        <img src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop"
                            className="gallery-image" alt="" />

                        <div className="gallery-item-type">

                            <span className="visually-hidden">Gallery</span><i className="fas fa-clone"
                                aria-hidden="true"></i>

                        </div>

                        <div className="gallery-item-info">

                            <ul>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i
                                        className="fas fa-heart" aria-hidden="true"></i> 45</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i
                                        className="fas fa-comment" aria-hidden="true"></i> 0</li>
                            </ul>

                        </div>

                    </div>

                    <div className="gallery-item" tabIndex="0">

                        <img src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop"
                            className="gallery-image" alt="" />

                        <div className="gallery-item-info">

                            <ul>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i
                                        className="fas fa-heart" aria-hidden="true"></i> 34</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i
                                        className="fas fa-comment" aria-hidden="true"></i> 1</li>
                            </ul>

                        </div>

                    </div>

                    <div className="gallery-item" tabIndex="0">

                        <img src="https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop"
                            className="gallery-image" alt="" />

                        <div className="gallery-item-info">

                            <ul>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i
                                        className="fas fa-heart" aria-hidden="true"></i> 41</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i
                                        className="fas fa-comment" aria-hidden="true"></i> 0</li>
                            </ul>

                        </div>

                    </div>

                    <div className="gallery-item" tabIndex="0">

                        <img src="https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop"
                            className="gallery-image" alt="" />

                        <div className="gallery-item-type">

                            <span className="visually-hidden">Video</span><i className="fas fa-video"
                                aria-hidden="true"></i>

                        </div>

                        <div className="gallery-item-info">

                            <ul>
                                <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i
                                        className="fas fa-heart" aria-hidden="true"></i> 30</li>
                                <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i
                                        className="fas fa-comment" aria-hidden="true"></i> 2</li>
                            </ul>

                        </div>

                    </div>

                </div>

                <div className="loader"></div>

            </div>

        </main>
    </>
    )
}

export default App
