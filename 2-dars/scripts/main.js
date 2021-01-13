


var personObj = {
   name: 'Temurbek',
   surname: 'Abdullayev',
   fullname: function (wifeName) {
     return `${wifeName} ${this.surname}a`
   }
};
console.log(personObj.name);
console.log(personObj.fullname('Asila'));





function hourToMinute(time) {
  time = time * 60;
  console.log(time)
}

hourToMinute(1.5)


function celcius(abc) {
  // console.log(abc); => 21

  let x = abc + 14;
  console.log(x);
}

celcius(35);

function selsiy(far) {
  console.log((far - 32) * 5 / 9);
}
selsiy(65);

function celsiy(far) {
  return (far - 32) * 5 / 9;
}
console.log(celsiy(56));


// Формула
// (°F− 32)× 5 / 9 = °C





// function kvadrat(params) {
//   console.log(params * params)
//   console.log((params * params) * params)
// }


// kvadrat(5)
function kvadrat(params) {
  console.log(`${params * params} ${(params * params) * params}`)
}


kvadrat(5)

var cars = [{
    mers: 's500',
    colors: 'red',
    probeg: 0,
    omborda: false,
    narhi: 50000,
  },
  {
    mers: 's600',
    colors: 'black',
    probeg: 0,
    omborda: true,
    narhi: 50000,
  },
  {
    mers: 'v-12',
    colors: 'blue',
    probeg: 0,
    omborda: true,
    narhi: 80000,
  },
  {
    model: 'r8',
    brand: 'Audi',
    omborda: true,
    narhi: 90000,
  },
  {
    brand: 'mers',
    model: 'x167',
    colors: 'black',
    probeg: 0,
    omborda: true,
    narhi: 95000,
  },

];

function carBrands(model) {
  if (model === cars[3].model) {
    console.log('Model:' + ' ' + cars[3].brand)
  } else {
    console.log('Tog\'ri model yoz')
  }
}

carBrands('r8')






cars.forEach(function (aylanib_chiq, modeli) {
  console.log(aylanib_chiq.mers + ' ' + modeli.mers);
  
});


function userNameEditor(fullName) {
  return alert('Assalomu Alekum' + ' ' + fullName)
}
userNameEditor('User');

function carsi(car) {
  carBr = 'Chevrolet';
  return car + ' ' + carBr;
}
console.log(carsi('Lasetti'));

// BMI = bpdy mass index 
// BMI = Weight / (height * height )
// bmi < 14.99 underweight; bu ozg'in degani.
//  14.99 < bmi > 24.99 normal; 
// 