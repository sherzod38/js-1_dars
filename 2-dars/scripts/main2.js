

// bu funksiya sayt ochilganda alert funcsiyani ichidagi yozuvlarga o'zgartirish kirita oladigan funkciya.

function alertdaIsm(params) {
  return alert('Assalomu alaykum!' + ' ' + params)
};
alertdaIsm('hurmatli ustoz ok tugmasini bossangiz uyga vazifa javoblarini ko\'ra olasiz'); 

// bu mashina markasini brendini chiqarib beradigan funksiyani boshlanishi
var carsBrand = 'bu qatorni pastidagi mashina model brendi va markasini chiqarib beruvchi funcsiyani javobi chiqadi.'
console.log(carsBrand);


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
    model: 'rs8',
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
// bu qatorni pastidagi mashina markasini brendini chiqarib beradigan funksiyani o'zi
function carBrands(model) {
  if (model === cars[3].model) {
    console.log('Model brendi:' + ' ' + cars[3].brand + ' ' + cars[3].model)
  } else {
    console.log('Biz sizga undan yahshi mashina taklif qilishimiz mumkin.')
  }
}
carBrands('rs8')

var brendYoq = 'bu qatorni pastida mashina modeli internet magazinda bo\'maganda chiqadigan javob bo\'ladi.'
console.log(brendYoq);

function carBrands(model) {
  if (model === cars[3].model) {
    console.log('Model brendi:' + ' ' + cars[3].brand + ' ' + cars[3].model)
  } else {
    console.log('Biz sizga undan yahshi mashina taklif qilishimiz mumkin.')
  }
}

carBrands('rs5')


// kvadrat va kub 

var buKvKub = 'Bu qatorni pastida kiritgan soningizni kvadrati va kubi chiqadi'
console.log(buKvKub);

function kvKub(son) {
  console.log(`${son * son} ${(son * son) * son}`)
};
kvKub(3);


// 4. Haroratni bir darajadan ikkinchi darajaga
//  o’tkazib beruvchi funksiya yarating.
// -Celsius(C) da berilgan bo’ lsa Fahrenheitga o’ tsin -
// Fahrenheit(F) da berilgan bo’ lsa, Celsius ga o’ tsin

// FORMULA
// (°F− 32)× 5 / 9 = °C
var celFar = 'bu qatorni pastidan haroratni bir darajadan ikkinchi darajaga o\'tkazib beruvchi funksiyani javoblari chiqadi.'
console.log(celFar);
function celsius(Fahrenheit) {
  return console.log((Fahrenheit - 32) * 5 / 9) 
}; 
celsius(1);

// (1 °C × 9/5) + 32 = 33,8 °F

// Формула
  // (32° C× 9 / 5) + 32 = 89, 6° F

  function faran(celsius) {
    return console.log((celsius * 9 / 5) + 32);
  };
  faran(1);

var Fahrenheitga = faran
var selciy = celsius

  // if (condition) {
    
  // } else {
    
  // }



  // 5. Soatni minutga o 'zgartiruvchi funksiya yarating. Ya'
  // ni u quyidagicha ishlashi kerak👇
  // hourToMinutes(1); // 60 qaytarishi kerak
  // hourToMinutes(2); // 120 qaytarishi kerak
  // hourToMinutes(1.5); // 90 qaytarishi kerak


var timeUr = 'bu qatorni pastidan soatni minutga o\'zgartiruvchi funksiyani javoblari chiqadi'
console.log(timeUr);

function hourToMinutes(time) {
  time = time * 60
  console.log(time)
};
hourToMinutes(1);
hourToMinutes(2);
hourToMinutes(1.5);

