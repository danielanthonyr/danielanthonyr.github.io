import AOS from 'aos'
import Layout from '../scripts/layout'
import Parallax from 'parallax-js'
import { jarallax } from 'jarallax'
import I18n from '../scripts/i18n'
import TextScramble from './scramble'
import 'parsleyjs'

import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/scrollspy'

import '../styles/_index.scss'

import '../scripts/particles'

export default class App {
  run() {
    AOS.init();
    new Layout().render();
    this._initSmoothScrolling();
    this._initParallax();
    this._initParsley();
    this._initJarallax();
    this._initHideNavMenuOnCLickOnMobile();
    this._initThemeSwitcher();
    new I18n().init();
    new TextScramble(
      'textScramble',
      ['Daniel Romero', 'Full Stack Developer', 'iOS Developer' ,'Android Developer', 'Software Engineer'],
      5,
      100,
      1500
    );
    const particlesJS = window.particlesJS;

    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 30,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 10,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 80,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 300,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 2
        },
        "move": {
          "enable": true,
          "speed": 4,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 800,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 800,
            "size": 80,
            "duration": 2,
            "opacity": 0.8,
            "speed": 3
          },
          "repulse": {
            "distance": 400,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }

  _initSmoothScrolling = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault()
        const hrefAttr = this.getAttribute('href')
        if (hrefAttr !== '#') {
          document.querySelector(hrefAttr).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          })
        }
      })
    })
  }

  _initParallax = () => {
    let parallax = new Parallax(document.getElementById('scene'))
    document.querySelector('a[href="#skills"]').addEventListener('click', e => {
      // disable parallax when scrolling down for performance reason
      e.preventDefault()
      parallax.disable()
      setTimeout(() => parallax.enable(), 1000)
    })
  }

  // doesn't work without jquery
  _initParsley = () => {
    // eslint-disable-next-line no-undef
    $('#contact-form')
      .parsley()
      .on('field:validated', () => {
        // eslint-disable-next-line no-undef
        var ok = $('.parsley-error').length === 0
        // eslint-disable-next-line no-undef
        $('.parsley-errors-list').toggleClass('vibrate-button', !ok)
        setTimeout(
          // eslint-disable-next-line no-undef
          () => $('.parsley-errors-list').removeClass('vibrate-button'),
          1000
        )
      })
  }

  _initJarallax = () => {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.5
    })
  }

  _initHideNavMenuOnCLickOnMobile = () => {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault()
        document.querySelector('#navbarNav').classList.replace('show', 'hide')
      })
    })
  }

  _initThemeSwitcher = () => {
    const lightBtn = document.getElementById('light-mode-btn')
    const darkBtn = document.getElementById('dark-mode-btn')
    const body = document.querySelector('body')
    const divText = document.getElementById("about-me");

    const vibrateLightBtn = () => {
      lightBtn.classList.toggle('vibrate')
    };
    vibrateLightBtn();
    let interval = setInterval(() => {
      vibrateLightBtn();
      darkBtn.classList.toggle('vibrate')
    }, 2000);
    window.addEventListener(
      'load',
      () => {
        interval
      },
      false
    )

    body.classList.add('dark-mode')
    lightBtn.addEventListener('click', e => {
      e.preventDefault()
      clearInterval(interval)
      body.classList.remove('dark-mode')
      body.classList.add('light-mode')
      divText.style.color = 'black';
      darkBtn.style.color = 'black';


      $.each(pJSDom[0].pJS.particles.array, function(i,p){
        pJSDom[0].pJS.particles.array[i].color.value = 808080;
        pJSDom[0].pJS.particles.array[i].color.rgb = hexToRgb(808080);
        pJSDom[0].pJS.particles.line_linked.color_rgb_line = hexToRgb(808080);
      });
    });
    darkBtn.addEventListener('click', e => {
      e.preventDefault()
      clearInterval(interval)
      body.classList.remove('light-mode')
      body.classList.add('dark-mode')
      divText.style.color = 'white';
      darkBtn.style.color = 'white';
    });

    function hexToRgb(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }
  }
}
