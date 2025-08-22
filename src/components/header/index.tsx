import NormalWord from '../../assets/musics/normal-world.mpeg'
import { useEffect, useState } from 'react';
import Logo from '../../assets/images/banner/logo.svg'

export const Header = () => {

  const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        window.addEventListener('click', function() {
            const audio: any = document.getElementById('music');
            audio.play();
            audio.volume = 0.2;
        });

        switchTheme()

    }, [darkTheme]);


    function switchTheme() {

        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');

        document.body.setAttribute('aria-label', 'Trocando o tema');

        const theme = document.body.classList[0];
        const music = theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg'

        const audio: any = document.getElementById('music');
        audio.src = `assets/musics/${music}`;
        audio.play();
        audio.volume = 0.2;
    }

  return (
    <div className='headerClass'>
      <audio id="music" autoPlay>
        <source src={NormalWord} aria-details="Audio do site" />
      </audio>
      <div className="header-content">
        <img className="invert-element" src={Logo} alt="Imagem principal Mundo Invertido. Semana Frontend DIO." />
        <p className="invert-element" role="text">
          Uma jornada para quem não tem medo do desconhecido. O caminho para o
          Mundo invertido é incerto, repleto de obstáculos e perigos. Porém, a
          recompensa é grande: salvar Hawkings e o mundo todo das garras de
          Vecna. Você está preparado? Então clique no botão abaixo para entrar
          no Mundo Invertido!
        </p>
        <button id="switch-theme-button" onClick={() => setDarkTheme((prev) => !prev)}>Inverter Mundos</button>
      </div>

      <div id="top-characters" className="world-characters"></div>
    </div>
  )
}
