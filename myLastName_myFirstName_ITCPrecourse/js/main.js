let p = new Promise((resolve, reject)=> {
  let a = 1 + 2;
  if(a==2) {
    resolve('sucess')
  }
  reject('failed')
})

p.then((message)=> {
  console.log('This is in the then ' + message)
}).catch((message)=> {
  console.log('This is in the catch ' + message)
})



//replace with your user:
const GITHUB_URL = "https://api.github.com/users/belbcode";

const img = document.querySelector('img')
const navbar = document.getElementsByClassName('nav-bar')[0].children

let navAppend = [
  "<i class=\"fa-solid fa-house\"></i>",
  "<i class=\"fa-solid fa-address-card\"></i>",
  "<i class=\"fa-solid fa-person-circle-question\">"
]

let cardAppend = [
  "<i class=\"fa-brands fa-github fa-2x\">",
  "<i class=\"fa-brands fa-linkedin fa-2x\">",
  "<i class=\"fa-brands fa-stack-overflow fa-2x\"></i>"
]

//animation specs
const spiralSpinning = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const duration = 2000;

const spiralTiming = {
  duration: duration,
  iterations: 1,
}

function changeNav(elementArray, newElements, i) {
  if(i < elementArray.length) {
    elementArray[i].innerHTML = newElements[i]
  }
}

function animateNav(elementArray, i) {
  elementArray[i].animate(spiralSpinning, spiralTiming)
  return 1
}

let i = 0;
img.addEventListener('click', ()=> {
  const myPromise = new Promise((resolve, reject) => {
    let pass = animateNav(navbar, i)
    if(pass === 1) {
      resolve("success")
    }
  })
  myPromise.then((message)=> {
    changeNav(navbar, navAppend, i)
    i++
    console.log(i, message)
  })


    
})

// const screenWipe = (element, onclickElements) => {
//   let i = 0;
//   element.addEventListener('click', ()=> {
   
//       const fn1 = () => {
//       setTimeout(()=> {
//         if(i < onclickElements.length) {
//           onclickElements[i].innerHTML = navAppend[i]
//           i++
//       }
//     }, duration)
//     }

//     const fn2 = () => {
//       onclickElements[i].animate(spiralSpinning, spiralTiming)
//     }
//     fn2()
//     fn1()
//   })
// }


// screenWipe(img, navbar)

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    const profileName = document.getElementById("profile-name");
    // update the profileImage and profileName with the information retrieved.
    profileImage.src = data.avatar_url;
    profileName.innerText = data.login;
  });
