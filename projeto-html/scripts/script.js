var imgGatos = document.getElementById('imgGatos');
var button = document.getElementById('buttonChangeCat');

const getData = async (el) => {
    let response = await fetch('https://thatcopy.pw/catapi/rest/')
    let dataJson = await response.json()

    el.src = dataJson.url
}
button.addEventListener('click', e => {
    getData(imgGatos)
})



