import React from 'react'
import InverWord from  '../../assets/images/content/inverted-world.png'
import SerieImage01 from '../../assets/images/content/serie-image-01.png'
import SerieImage02 from '../../assets/images/content/serie-image-02.png'
import SerieImage03 from '../../assets/images/content/serie-image-03.png'

export const Main = () => {
  return (
    
    <div className='mainClass'>
      <div id="bottom-characters" className="world-characters"></div>

      <section id="section-inverted-world" className="container">
        <div className="section-texts">
          <h1>O Mundo Invertido</h1>
          <p role="text">
            O Mundo Invertido parece uma cópia do nosso mundo, mas com criaturas
            horrendas, tempestades assustadoras, muita escuridão e entidades
            malignas. Um reino controlado por Vecna, que tem planos de trazer
            tudo isso ao nosso mundo.
          </p>
        </div>

        <img
          className="invert-element"
          src={InverWord}
          alt="Image ilustrativa do Mundo Invertido"
        />
      </section>

      <section id="section-stranger-things-trailer" className="container">
        <div className="video-frame" aria-hidden="true">
          <iframe
            width="460"
            height="215"
            src="https://www.youtube.com/embed/SJ9EFhQ3ANQ?controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="section-texts">
          <h2>Stranger Things Vol. 4</h2>
          <p role="text">
            Mais experientes, os heróis de Stranger Things também precisam
            enfrentar desafios maiores do que nunca e fazer decisões que vão
            mudar suas vidas para sempre. Confira ao lado o trailer da quarta
            temporada.
          </p>
        </div>
      </section>

      <section id="section-stranger-things-gallery">
        <div className="container section-text">
          <h2>A segunda série mais assistida da Netflix</h2>
          <ul className="gallery-container" role="gallery">
            <li className="gallery-image invert-element">
              <img src={SerieImage01} alt="Imagem de Vecna" />
            </li>
            <li className="gallery-image invert-element">
              <img src={SerieImage02} alt="Imagem ilustrativa dos amigos de Eleven" />
            </li>
            <li className="gallery-image invert-element">
              <img src={SerieImage03} alt="Imagem Eleven assustada" />
            </li>
          </ul>
        </div>
      </section>

      <section id="section-form" className="container">
        <h2>O Clube Dungeons & Dragons</h2>
        <p>
          Para deter Vecna, os heróis de Stranger Things também precisam de
          você. O Clube de D&D mais famoso de Hawkings está com vagas abertas
          para sua próxima aventura. Se você é destemido, gosta de desafios e
          não tem medo de rodar o D20, chegou a hora de se inscrever para fazer
          parte da nova campanha.
        </p>

        <div className="form-content">
          <h3>Entre para o clube de D&D e tenha experiências de <span>outro mundo</span></h3>

          <div className="form-container">
            <form>
              <label htmlFor="name">Nome Completo</label>
              <input type="text" name="name" id="txtName"/>

              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="txtEmail"/>

              <label htmlFor="level">Level</label>
              <input type="text" name="level" id="txtLevel"/>

              <label htmlFor="character">Personagem</label>
              <textarea name="character" cols={30} rows={10} id="txtCharacter"></textarea>

              <button type="button" id="btnSubscribe">Me inscrever</button>
            </form>
            
          </div>
        </div>
      </section>
    </div>
  )
}
