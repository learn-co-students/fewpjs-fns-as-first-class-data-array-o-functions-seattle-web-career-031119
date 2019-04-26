function wakeDog(dogName, dogBreed) {
  let strrr = `Wake ${dogName} the ${dogBreed}`
  console.log(strrr);
  return strrr
}

function leashDog(dogName, dogBreed) {
  let strrr = `Leash ${dogName} the ${dogBreed}`
  console.log(strrr);
  return strrr
}

function walkToPark(dogName, dogBreed) {
  let strrr = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log(strrr);
  return strrr
}

function throwFrisbee(dogName, dogBreed) {
  let strrr = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(strrr);
  return strrr
}

function walkHome(dogName, dogBreed) {
  let strrr = `Walk home with ${dogName} the ${dogBreed}`
  console.log(strrr);
  return strrr
}

function unleashDog(dogName, dogBreed) {
  let strrr = `Unleash ${dogName} the ${dogBreed}`
  console.log(strrr);
  return strrr
}

var routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
  var rrr = []
  routine.forEach(dogMethod => {
    rrr.push(dogMethod(dogName, dogBreed))
  })
  return rrr
}
