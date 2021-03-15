//Assingment part 1*********
//random number returns a promise
async function getRandomNumber() {
  let promise= new Promise(resolve => {//assigns it to a new promise and sets to resolve funct.
        setTimeout(() => {
          resolve(Math.random());//gets random math num.
        }, 500);//waits for 5 secs
      });
 let result= await promise;//assings the await to result variable.
 alert(result);//sets alert.
}
getRandomNumber();//calls function.

//assingment part 2 */

async function city(cityName) {
  // create a variable that goes ahead and fetches the link  (sub value indicated through ${})
  const response = await fetch(`https://geocode.xyz/${cityName}?json=1`)
  // create a variable that awaits its conversion to a json file
  const info = await response.json();
  //print out a line that has text and coords
  console.log("\nThe latitude is: " + info.longt + ".\n\nThe longitude is: " + info.latt);
}
//input a city!
city("omaha");