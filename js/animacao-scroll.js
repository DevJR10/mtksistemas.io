const jsScroll = document.querySelectorAll(".js-scroll")
const windowMetade = window.innerHeight * 0.75

function animaScroll(){
   console.log('sdjbjc')
   jsScroll.forEach((item) => {
      const topo = item.getBoundingClientRect().top
      const valorWindow = (topo - windowMetade) < 0
      if(valorWindow){
         item.classList.add('ativo')
      }
   })
}

window.addEventListener('scroll', animaScroll)

//Anima scroll (conte conosco)
const jsScrollConteConosco = document.querySelectorAll(".js-scroll-conte-conosco")
const windowMetadeConteConosco = window.innerHeight * 0.8

function animaScrollConteConosco(){
   console.log('sdjbjc')
   jsScrollConteConosco.forEach((item) => {
      const topo = item.getBoundingClientRect().top
      const valorWindow = (topo - windowMetadeConteConosco) < 0
      if(valorWindow){
         item.classList.add('ativo')
      }
   })
}

window.addEventListener('scroll', animaScrollConteConosco)

//Anima scroll (contato)
const jsScrollContato = document.querySelectorAll(".js-scroll-contato")
const windowMetadeContato = window.innerHeight * 0.7

function animaScrollContato(){
   console.log('sdjbjc')
   jsScrollContato.forEach((item) => {
      const topo = item.getBoundingClientRect().top
      const valorWindow = (topo - windowMetadeContato) < 0
      if(valorWindow){
         item.classList.add('ativo')
      }
   })
}

window.addEventListener('scroll', animaScrollContato)


//Anima scroll (falam de nós)
const jsScrollFalamNos = document.querySelectorAll(".js-scroll-falam-nos")
const windowMetadeFalamNos = window.innerHeight * 0.75

function animaScrollFalamNos(){
   console.log('sdjbjc')
   jsScrollFalamNos.forEach((item) => {
      const topo = item.getBoundingClientRect().top
      const valorWindow = (topo - windowMetadeFalamNos) < 0
      if(valorWindow){
         item.classList.add('ativo')
      }
   })
}

window.addEventListener('scroll', animaScrollFalamNos)

