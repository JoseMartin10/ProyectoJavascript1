

let name1 = document.getElementById('name1')
let nameContent1 = document.getElementById('nameContent1')


name1.addEventListener('click', function(){
let answerName1 = prompt('Escribe el nombre del artista')
nameContent1.innerText = answerName1
localStorage.setItem('answerUserName1', answerName1)
})

let famousSong1 = document.getElementById('famousSong1')
let famousSongContent1 = document.getElementById('famousSongContent1')

famousSong1.addEventListener('click', function(){
    let answerFamous1 = prompt('Escribe la canción más famosa del artista')
    famousSongContent1.innerText = answerFamous1 
    localStorage.setItem('answerUserFamous1', answerFamous1)
})


let favoriteSong1 = document.getElementById('favoriteSong1')
let favoriteSongContent1 = document.getElementById('favoriteSongContent1')

favoriteSong1.addEventListener('click', function() {
    let answerFavorite1 = prompt ('Escribe tu canción favorita del artista')
    favoriteSongContent1.innerText = answerFavorite1
    localStorage.setItem('answerUserFavorite1', answerFavorite1)
})

let name2 = document.getElementById('name2')
let nameContent2 = document.getElementById('nameContent2')


name2.addEventListener('click', function(){
let answerName2 = prompt('Escribe el nombre del artista')
nameContent2.innerText = answerName2
localStorage.setItem('answerUserName2', answerName2)
})

let famousSong2 = document.getElementById('famousSong2')
let famousSongContent2 = document.getElementById('famousSongContent2')

famousSong2.addEventListener('click', function(){
    let answerFamous2 = prompt('Escribe la canción más famosa del artista')
    famousSongContent2.innerText = answerFamous2
    localStorage.setItem('answerUserFamous2', answerFamous2)
})

let favoriteSong2 = document.getElementById('favoriteSong2')
let favoriteSongContent2 = document.getElementById('favoriteSongContent2')

favoriteSong2.addEventListener('click', function() {
    let answerFavorite2 = prompt ('Escribe tu canción favorita del artista')
    favoriteSongContent2.innerText = answerFavorite2
    localStorage.setItem('answerUserFavorite2', answerFavorite2)
})

let name3 = document.getElementById('name3')
let nameContent3 = document.getElementById('nameContent3')


name3.addEventListener('click', function(){
let answerName3 = prompt('Escribe el nombre del artista')
nameContent3.innerText = answerName3
localStorage.setItem('answerUserName3', answerName3)
})

let famousSong3 = document.getElementById('famousSong3')
let famousSongContent3 = document.getElementById('famousSongContent3')

famousSong3.addEventListener('click', function(){
    let answerFamous3 = prompt('Escribe la canción más famosa del artista')
    famousSongContent3.innerText = answerFamous3
    localStorage.setItem('answerUserFamous3', answerFamous3)
})

let favoriteSong3 = document.getElementById('favoriteSong3')
let favoriteSongContent3 = document.getElementById('favoriteSongContent3')

favoriteSong3.addEventListener('click', function() {
    let answerFavorite3 = prompt ('Escribe tu canción favorita del artista')
    favoriteSongContent3.innerText = answerFavorite3
    localStorage.setItem('answerUserFavorite3', answerFavorite3)
})

let refresh = document.getElementById('refresh')
refresh.addEventListener('click', function(){
    nameContent1.innerText = ''
    nameContent2.innerText = ''
    nameContent3.innerText = ''
    famousSongContent1.innerText = ''
    famousSongContent2.innerText = ''
    famousSongContent3.innerText = ''
    favoriteSongContent1.innerText = ''
    favoriteSongContent2.innerText = ''
    favoriteSongContent3.innerText = ''
})

const dataSavedName1 = localStorage.getItem('answerUserName1')
const dataSavedName2 = localStorage.getItem('answerUserName2')
const dataSavedName3 = localStorage.getItem('answerUserName3')
const dataSavedFamous1 = localStorage.getItem('answerUserFamous1')
const dataSavedFamous2 = localStorage.getItem('answerUserFamous2')
const dataSavedFamous3 = localStorage.getItem('answerUserFamous3')
const dataSavedFavorite1 = localStorage.getItem('answerUserFavorite1')
const dataSavedFavorite2 = localStorage.getItem('answerUserFavorite2')
const dataSavedFavorite3 = localStorage.getItem('answerUserFavorite3')
nameContent1.innerText = dataSavedName1
nameContent2.innerText = dataSavedName2
nameContent3.innerText = dataSavedName3
famousSongContent1.innerText = dataSavedFamous1
famousSongContent2.innerText = dataSavedFamous2
famousSongContent3.innerText = dataSavedFamous3
favoriteSongContent1.innerText = dataSavedFavorite1
favoriteSongContent2.innerText = dataSavedFavorite2
favoriteSongContent3.innerText = dataSavedFavorite3
