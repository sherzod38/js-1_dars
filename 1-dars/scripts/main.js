var userName = '2-ismi Bozorboy';
var userSurname = 'Foziljonov';
var useerAge = 30;

// {} = Object
// [] = ichidagi objectlarni tartib raqami bo'yicha ko'rsatib beradi

var siroj = {userName, userSurname, useerAge};

console.log(siroj);


// var mijoz = document.querySelector('#salomlashish');
// mijoz.innerHTML = userArray[0].userName;


var userArray = [
  {
    userName: 'Sardor',
    userSurname: 'Akbarov',
    userAge: 19,
    isUserMarried: false,
    // gender: male,
  },
  {
    userName: 'Abror',
    userSurname: 'Abdunabiev',
    userSurname: 26,
    isUserMarried: false,
    // gender: male,
  },
  {
    userName: 'Mashhura Suyunova',
    userSurname: 'Akbarov',
    userSurname: 20,
    isUserMarried: false,
    // gender: female
  },
  {
    userName: 'Sherzod',
    userSurname: 'Nadirov',
    userSurname: 38,
    isUserMarried: true,
    // gender: male,
  },
  {
    userName: 'Nozima',
    userSurname: 'Zairkulova',
    userAge: 20,
    isUserMarried: false,
    // gender: female,
  },

];



if (userArray[0].userAge < 27 && userArray[0].isUserMarried !== true) {
  console.log('Armiyaga borsa boladi.');
} else {
  console.log('Bormasa ham boladi.');
};

if (userArray[3].userAge < 27 && userArray[3].isUserMarried !== true) {
  console.log('Armiyaga borsa boladi.');
} else {
  console.log('Bormasa ham boladi.');
};





var cars = [
  {
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
    mers: 'vision',
    colors: 'black',
    probeg: 0,
    omborda: true,
    narhi: 90000,
  },
  {
    mers: 'x167',
    colors: 'black',
    probeg: 0,
    omborda: true,
    narhi: 95000,
  },

];

// klient  1 

if (cars[0].omborda === true && cars[0].narhi < 50001) {
  console.log('ombordan olib chiq.');
} else {
  console.log('zavoddan kelishini kuting.');
};

// klient  2 

if (cars[4].omborda === true && cars[4].narhi < 95001) {
  console.log('ombordan olib chiq.');
} else {
  console.log('zavoddan kelishini kting.');
};

// klient 3

if (cars[4].mers === 'x167' && cars[4].colors === 'white') {
  console.log('ombordan olib chiq')
}else {
  console.log('zavoddan buyurtma bersa boladi')
}

// klient 4









cars.forEach(function(aylanib_chiq){
  console.log(aylanib_chiq);
 
});


cars.forEach(function(aylanib_chiq){
  console.log(aylanib_chiq.mers);
 
});


cars.forEach(function(aylanib_chiq){
  console.log(aylanib_chiq.mers + '_narhi ' + aylanib_chiq.narhi + ' ' + aylanib_chiq.colors + ' ' + aylanib_chiq.omborda);
 
});

cars.forEach(function(aylanib_chiq){
  console.log(aylanib_chiq.mers, aylanib_chiq.omborda)
});






// uzerArray.forEach(function(uzer) {
//   console.log(`${uzer.uzerName}; ${uzer.uzerMarried}`);
// });