let latitudes = [
    "-117.9976,33.6799,10.38", //HB
    "-118.3459,34.0614,8.79", //
    "-107.8691,37.2773,10.71",
    "34.7773,32.0813,10.74" //Tel Aviv
]

// const loading = (element) => {
//     let text = "Loading"
//     element.innerText = text
//     for(let i = 0; i < 3; i++) {
//         setTimeout(()=> {
//             text += "."
//         }, 500)
//     }

// }

const prevBtn = document.getElementById('prev')
const nxtBtn = document.getElementById('next')

let mapBox = document.getElementById('map')
accessToken = 'pk.eyJ1Ijoia2Fib2ItY2FzZSIsImEiOiJjbDVoZzFsMzgwN2xmM2NvMnk0aHM2dmh5In0.Q3-H3I1XsrzM3ayYVnH8Tw';

function getMap(i) {
    let url = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${latitudes[i]},0/300x200?access_token=${accessToken}`
    fetch(url)
    .then(response=> {
        mapBox.src=url
    })
    .catch(error=> {

    })
}

getMap(0)
let i = 0;

prevBtn.disabled = true;

prevBtn.addEventListener('click', ()=> {
    i--;
    getMap(i)
    if(i === 0) {
        prevBtn.disabled = true;
    }
    nxtBtn.disabled = false
})

nxtBtn.addEventListener('click', ()=> {
    i++;
    getMap(i)
    if(i === latitudes.length-1) {
        nxtBtn.disabled = true
    }
    prevBtn.disabled = false
})


// var map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/streets-v11'+ request
// });

let whatever 