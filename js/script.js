// CHECK JS LINK
console.log('JS OK');


//! TESTO 
/*
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come ispirandovi alla foto allegata. Se volete cambiare la grafica siete liberi di farlo.

Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico:
 costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra,
 l'immagine attiva diventerà visibile assieme al suo titolo e testo.

Milestone 2:
Aggiungere il "ciclo infinito" del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia
 verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura 
 se l'utente clicca la freccia verso sinistra.

BONUS 1:
Aggiungere le thumbnails (sotto forma di miniatura) ed al click attivare l’immagine corrispondente.

BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) 
l’immagine attiva dovrà cambiare alla successiva.

BONUS 3:
Aggiungere bottoni di start/stop  del meccanismo di autoplay.
 */
//? INIZIALIZZO ARRAY

const data = [
    {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
  ];

  //todo FUNZIONI ------------------------------------------

    const changeImg = target =>{
        image[actualActiveIndex].classList.remove('active');
        text[actualActiveIndex].classList.remove('active');
        title[actualActiveIndex].classList.remove('active');
        thumbnailsImage[actualActiveIndex].classList.remove('selected');

        if (target === 'next'){
           actualActiveIndex++
           if(actualActiveIndex === image.length){
           actualActiveIndex = 0;
           }
        }
        else if (target === 'prev'){
            actualActiveIndex--;
            if(actualActiveIndex < 0){
                actualActiveIndex = image.length - 1;
             }
        }
        else{
            
            actualActiveIndex = target;
            
        }

        image[actualActiveIndex].classList.add('active');
        text[actualActiveIndex].classList.add('active');
        title[actualActiveIndex].classList.add('active');
        thumbnailsImage[actualActiveIndex].classList.add('selected');

    }
 


  //? RECUPERO ELEMENTI DAL DOM

  const gallery = document.querySelector('.gallery');
  const thumbnails = document.querySelector('.thumbnails');

  //Inizializzo valori
  let galleryContent = `
  <i class="fa-solid fa-arrow-left" id="prev"></i>
  <i class="fa-solid fa-arrow-right" id="next"></i>
  `;
  let thumbnailsContent ='';
 //Preparo elmenti da inserire in pagina
  data.forEach(element =>{
    galleryContent +=  `
    <img src="${element.image}" alt="${element.title}">
    <h1>${element.title}</h1>
    <p> ${element.text}</p>
    `
    thumbnailsContent +=  `
    <img src="${element.image}" alt="${element.title}">`
  });

  // innesto html nel dom
  gallery.innerHTML = galleryContent;
  thumbnails.innerHTML = thumbnailsContent;

  //Recupero gli elementi inseriti nel dom
  const image = document.querySelectorAll('.gallery img');
  const title = document.querySelectorAll('.gallery h1');
  const text = document.querySelectorAll('.gallery p');
  const thumbnailsImage = document.querySelectorAll('.thumbnails img');

  //rendo i thumbnails cliccabili

  thumbnailsImage.forEach((element,i)=>{
   
    element.addEventListener('click', ()=> {
        changeImg(i);
    });

  });

  //recupero pulsanti
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  //Metto i primi elementi in visibilità

  let actualActiveIndex = 0;
  image[actualActiveIndex].classList.add('active');
  text[actualActiveIndex].classList.add('active');
  title[actualActiveIndex].classList.add('active');
  thumbnailsImage[actualActiveIndex].classList.add('selected');

  next.addEventListener('click' , () => {
    changeImg('next');
  });

  prev.addEventListener('click' , () => {
    changeImg('prev');
  });




