import React from 'react';

const news = [
  {
    title: 'Actualité 1',
    description: 'Description de l\'actualité 1.',
    img: 'https://via.placeholder.com/450',
    link: '/actualite-1'
  },
  {
    title: 'Actualité 2',
    description: 'Description de l\'actualité 2.',
    img: 'https://via.placeholder.com/450',
    link: '/actualite-2'
  },
  // Ajoutez d'autres actualités ici
];

const NewsSection = () => {
  return (
    <section className="news-section">
      <div className="wrapper_1110">
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
