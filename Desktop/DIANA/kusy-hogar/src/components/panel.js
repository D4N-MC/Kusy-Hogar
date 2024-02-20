import React, { useState, useEffect } from 'react';

function Panel() {
  const images = [
    'https://scontent.flim2-1.fna.fbcdn.net/v/t39.30808-6/420425270_983514353220828_6533008576621762632_n.png?_nc_cat=108&ccb=1-7&_nc_sid=783fdb&_nc_ohc=F5emUxYneQsAX-9dJRT&_nc_ht=scontent.flim2-1.fna&oh=00_AfCzCmu_3UP3-nkmIL-29omHnM1dQM2dFM1z4YTwaaKs4A&oe=65D8A646',
    'https://scontent.flim2-2.fna.fbcdn.net/v/t39.30808-6/320224139_465490082404665_6055881770956796093_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=3uwfD3tKwKwAX9ooRAM&_nc_ht=scontent.flim2-2.fna&oh=00_AfAYaLk9MN17FZBaTyl-BJD9pXMWuT2zISwoQkwgTn3Fkg&oe=65D9E0E3',
    'https://www.oberlo.com/media/1603891299-productos-chinos-novedosos-baratos-para-importar-2020-min-scaled.jpg',
    'https://muchosnegociosrentables.com/wp-content/uploads/2018/08/Porta-vasos-de-crochet.jpg',
    'https://www.informador.mx/__export/1661217414285/sites/elinformador/img/2022/08/22/spacejoy-q3qd86sfaou-unsplash.jpg_674994428.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const slideToRight = () => {
    if (currentIndex < images.length - 1) {
      const slider = document.querySelector('.slider');
      const newPosition = currentIndex + 1;
      setCurrentIndex(newPosition);
      const displacement = newPosition * -64; // Valor de desplazamiento deseado en vw
      slider.style.transform = `translateX(${displacement}vw)`;
      console.log("slideToRight llamado");
    } else {
      const slider = document.querySelector('.slider');
      const newPosition = 0;
      setCurrentIndex(newPosition);
      const displacement = newPosition * -64; // Valor de desplazamiento deseado en vw
      slider.style.transform = `translateX(${displacement}vw)`;
      console.log("slideToRight llamado - Volviendo al inicio");
    }
  };
  
  const slideToLeft = () => {
    if (currentIndex > 0) {
      const slider = document.querySelector('.slider');
      const newPosition = currentIndex - 1;
      setCurrentIndex(newPosition);
      const displacement = newPosition * -64; // Valor de desplazamiento deseado en vw
      slider.style.transform = `translateX(${displacement}vw)`;
      console.log("slideToLeft llamado");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      slideToRight();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleSlideRight = () => {
    slideToRight();
  };

  const handleSlideLeft = () => {
    slideToLeft();
  };

  return (
    <>
      <div className="panel">
        <ul className="slider">
          {images.map((image, index) => (
            <li key={index} className="slide">
              <img src={image} alt={`Slide ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
      <div className="panel-complement">
        <div className="L-side"></div>
        <div className="R-side"></div>
        <button className="slide-L" onClick={handleSlideLeft} disabled={currentIndex === 0} style={{ opacity: currentIndex === 0 ? 0 : 1, cursor: currentIndex === 0 ? 'default' : 'pointer' }}>
          <p className="slide-icon">&lt;</p>
        </button>
        <button className="slide-R" onClick={handleSlideRight} disabled={currentIndex === images.length - 1} style={{ opacity: currentIndex === images.length - 1 ? 0 : 1, cursor: currentIndex === images.length - 1 ? 'default' : 'pointer' }}>
          <p className="slide-icon">&gt;</p>
        </button>
      </div>
    </>
  );
}

export default Panel;