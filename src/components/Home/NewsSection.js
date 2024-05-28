import React from 'react';
import img1 from '../../assets/news1.jpg'
import img2 from '../../assets/news2.jpg'

const news = [
  {
    title: 'Un nouveau départ immobilier',
    description: 'À Toulouse, la notaire Michèle accompagne un jeune couple enthousiaste dans les démarches d\'achat de leur première maison, symbolisant un nouveau départ dans leur vie commune.',
    img: img1,
    link: '/actualite-1'
  },
  {
    title: 'La sécurité dans la succession',
    description: 'Patrick, notaire à Toulouse, rencontre un homme âgé chez lui pour sécuriser son testament, assurant une transmission sereine de son héritage dans un cadre intime et respectueux.',
    img: img2,
    link: '/actualite-2'
  },
  // Ajoutez d'autres actualités ici
];

const NewsSection = () => {
  return (
    <section className="news-section">
      <div className="wrapper_el">
        <div className="inner-news">
          <h3 className="section-label">News</h3>
          <h2>Les actualités de l'Étude</h2>
          <div className="news-cards">
            {news.map((article, index) => (
              <div key={index} className="news-card">
                <img src={article.img} alt={article.title} />
                <div className="news-content">
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <a href={article.link} className="read-more">Lire la suite</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="view-more">
        <a href="/publications" className="snd-cta">Plus d'actualités</a>
      </div>
    </section>
  );
};

export default NewsSection;
