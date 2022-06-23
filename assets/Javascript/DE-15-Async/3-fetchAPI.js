//* ===========================================================
//*                          3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
  .then((response) => {
    //? response ise fetch() fonksiyonunun cevabini gosteren bir objedir.
    // console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`Network response was not ok. Status: ${response.status}`);
    }
  })
  .then((data) => {
    // console.log(data);
    data.forEach((element) => {
      console.log(`${element.name} ${element.username}
       ${element.email}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
