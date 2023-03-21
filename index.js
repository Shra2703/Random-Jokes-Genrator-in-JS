const joke = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

// const getJoke =  () =>{
//     const setHeader = {
//         headers:{
//             Accept : "application/json"
//         }
//     }

//     console.log(typeof(setHeader));
//     fetch('https://icanhazdadjoke.com', setHeader)
//     .then((res) =>  res.json()).then((data) =>{
//         joke.innerHTML = data.joke;
//     }).catch((error)=>{
//         console.log(error);
//     })
// }

const getJoke = async () => {
  try {
    const setHeader = {
      headers: {
        Accept: "application/json",
      },
    };

    const res = await fetch("https://icanhazdadjoke.com", setHeader);
    const data = await res.json();
    joke.innerHTML = data.joke;
  } catch (err) {
    console.log(`the error is ${err}`);
  }
};

jokeBtn.addEventListener("click", getJoke);
getJoke();
