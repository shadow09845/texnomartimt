  let Cards = [
      {
          model: "S25ultra",
          brand: "Samsung",
          storage: "12/1tb",
          prise: "1200$",
          color: "Darkblue",
          img: "https://mini-io-api.texnomart.uz/catalog/product/3590/359062/212722/f8e65e3d-e5e6-4f17-ae58-731b263a2c84.webp",
          description: "better than iphone with 200mp camera "
      },
    {
        model: "krmoshna",
        brand: "Apple",
        storage: "12/1tb",
        prise: "2200$",
        color: "Orange",
        img: "https://mini-io-api.texnomart.uz/catalog/product/3590/359048/212658/06756656-3243-439a-81c9-a36cd3886407.webp",
        description: "Iphone 17 pro max ultra camera quality "
    },
    {
        model: "vertalyot",
        brand: "Apple",
        storage: "12/1tb",
        prise: "2200$",
        color: "Orange",
        img: "https://mini-io-api.texnomart.uz/catalog/product/3590/359048/212658/06756656-3243-439a-81c9-a36cd3886407.webp",
        description: "Iphone 17 pro max ultra camera quality "
    },
    {
        model: "samalyot",
        brand: "Apple",
        storage: "12/1tb",
        prise: "2200$",
        color: "Orange",
        img: "https://mini-io-api.texnomart.uz/catalog/product/3590/359048/212658/06756656-3243-439a-81c9-a36cd3886407.webp",
        description: "Iphone 17 pro max ultra camera quality "
    },
    {
        model: "tank",
        brand: "Apple",
        storage: "12/1tb",
        prise: "2200$",
        color: "Orange",
        img: "https://mini-io-api.texnomart.uz/catalog/product/3590/359048/212658/06756656-3243-439a-81c9-a36cd3886407.webp",
        description: "Iphone 17 pro max ultra camera quality "
    },
    {
        model: "algoritm",
        brand: "2 etaj",
        storage: "20 ta xona",
        prise: "20,000$",
        color: "white",
        img: "data:image/png;base64,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  ",
        description: "qulayligi yoq ayniqsa wifilari ishlamaydi"
    },
    {
        model: "Honer x70",
        brand: "Honor",
        storage: "12/256gb",
        prise: "800$",
        color: "blue",
        img: "https://mini-io-api.texnomart.uz/catalog/product/3590/359040/212644/731a29f9-5bbb-4298-96e7-547f728f0bca.webp",
        description: "better than iphone with 200mp camera "
    },
    {
        model: "Xiomi12",
        brand: "Xiomi",
        storage: "12/1tb",
        prise: "1000$",
        color: "black",
        img: "https://mini-io-api.texnomart.uz/catalog/product/3583/358366/209391/058e3ad7-d610-489c-ae55-51b97bda6eee.webp",
        description: "better than iphone with 200mp camera "
    },
    {
        model: "Infinix hot 50",
        brand: "Xiomi",
        storage: "12/8/256gb",
        prise: "300$",
        color: "white",
        img: "https://mini-io-api.texnomart.uz/catalog/product/1025/102522/204305/5c77a5dc-c1b8-49ff-b83f-6f015c44cd12.webp",
        description: "better than iphone with 200mp camera "
    },
    {
        model: "redmi 14 pro",
        brand: "Redmi",
        storage: "8/256gb",
        prise: "250$$",
        color: "cyan",
        img: "https://mini-io-api.texnomart.uz/catalog/product/3586/358654/210812/7ca504e0-287d-40b8-b566-a8d0f711e7eb.webp",
        description: "better than iphone with 200mp camera "
    },
     {
        model: "poco x7 ",
        brand: "Poco",
        storage: "8/256gb",
        prise: "350$",
        color: "gray",
        img: "https://mini-io-api.texnomart.uz/catalog/product/3590/359041/212655/f0ce07ed-aff8-4103-9e7c-8b246507f174.webp",
        description: "better than iphone with 200mp camera "
    },
      {
        model: "Huavei p30 lite ",
        brand: "Huavei",
        storage: "8/256gb",
        prise: "350$",
        color: "white",
        img: "https://mini-io-api.texnomart.uz/catalog/product/945/94590/205257/2991bd1c-bf45-4d87-888a-64bf71191d95.webp",
        description: "better than iphone with 200mp camera "
    },
    {
        model: "S25ultra",
        brand: "Samsung",
        storage: "12/1tb",
        prise: "1200$",
        color: "Darkblue",
        img: "https://mini-io-api.texnomart.uz/catalog/product/1055/105517/205063/18d86193-ab5a-42f4-8e0d-27088c1ee415.webp",
        description: "better than iphone with 200mp camera "
    },
    {
        model: "Honer x70",
        brand: "Honor",
        storage: "12/256gb",
        prise: "800$",
        color: "blue",
        img: "https://mini-io-api.texnomart.uz/catalog/product/3573/357339/199023/89950fa6-da12-4a6a-b96a-3d10b4f37b7e.webp",
        description: "better than iphone with 200mp camera "
    },
    {
        model: "Xiomi12",
        brand: "Xiomi",
        storage: "12/1tb",
        prise: "1000$",
        color: "black",
        img: "https://mini-io-api.texnomart.uz/catalog/product/3590/359059/212710/4709de12-a648-48d1-bbe3-08e592c2f369.webp",
        description: "better than iphone with 200mp camera "
    },
    {
        model: "Infinix hot 50",
        brand: "Xiomi",
        storage: "12/8/256gb",
        prise: "300$",
        color: "white",
        img: "https://mini-io-api.texnomart.uz/catalog/product/3590/359061/212719/b04ee952-f9ac-41f8-8c6e-c949de6cbc38.webp",
        description: "better than iphone with 200mp camera "
    },
    {
        model: "redmi 14 pro",
        brand: "Redmi",
        storage: "8/256gb",
        prise: "250$$",
        color: "cyan",
        img: "https://mini-io-api.texnomart.uz/catalog/product/3586/358625/212737/add63eb2-fb86-4a6d-913b-36a4482797c4.png",
        description: "better than iphone with 200mp camera "
    },
     {
        model: "poco x7 ",
        brand: "Poco",
        storage: "8/256gb",
        prise: "350$",
        color: "gray",
        img: "https://mini-io-api.texnomart.uz/catalog/product/3575/357597/211353/2359410c-aa78-4fde-b493-551635c0bd04.webp",
        description: "better than iphone with 200mp camera "
    },
      {
        model: "Huavei p30 lite ",
        brand: "Huavei",
        storage: "8/256gb",
        prise: "350$",
        color: "white",
        img: "https://mini-io-api.texnomart.uz/catalog/product/3583/358389/209524/70009aac-fa30-4bec-8aae-cca3a924307d.webp",
        description: "better than iphone with 200mp camera "
    },
      {
        model: "Huavei p30 lite ",
        brand: "Huavei",
        storage: "8/256gb",
        prise: "350$",
        color: "white",
        img: "https://mini-io-api.texnomart.uz/catalog/product/3583/358389/209524/70009aac-fa30-4bec-8aae-cca3a924307d.webp",
        description: "better than iphone with 200mp camera "
    },
      {
        model: "Huavei p30 lite ",
        brand: "Huavei",
        storage: "8/256gb",
        prise: "350$",
        color: "white",
        img: "https://mini-io-api.texnomart.uz/catalog/product/3583/358389/209524/70009aac-fa30-4bec-8aae-cca3a924307d.webp",
        description: "better than iphone with 200mp camera "
    },
      {
        model: "Huavei p30 lite ",
        brand: "Huavei",
        storage: "8/256gb",
        prise: "350$",
        color: "white",
        img: "https://mini-io-api.texnomart.uz/catalog/product/3583/358389/209524/70009aac-fa30-4bec-8aae-cca3a924307d.webp",
        description: "better than iphone with 200mp camera "
    },
      {
        model: "Huavei p30 lite ",
        brand: "Huavei",
        storage: "8/256gb",
        prise: "350$",
        color: "white",
        img: "https://mini-io-api.texnomart.uz/catalog/product/3583/358389/209524/70009aac-fa30-4bec-8aae-cca3a924307d.webp",
        description: "better than iphone with 200mp camera "
    },
      {
        model: "Huavei p30 lite ",
        brand: "Huavei",
        storage: "8/256gb",
        prise: "350$",
        color: "white",
        img: "https://mini-io-api.texnomart.uz/catalog/product/3583/358389/209524/70009aac-fa30-4bec-8aae-cca3a924307d.webp",
        description: "better than iphone with 200mp camera "
    },
]

 let objekts = document.querySelector(".objekts")

 let searchinput = document.querySelector(".search")


 function RenderCard(items){
  objekts.innerHTML=""
  items.map((item)=>{
    let card = document.createElement("div")
    card.classList.add("box")

    card.innerHTML=`
    <h2>${item.model}</h2>
    <h2>${item.brand}</h2>
    <h2>${item.prise}</h2>
    <h2>${item.storage}</h2>
    <h2>${item.description}</h2>
    `
    objekts.appendChild(card)
  })
 }

 searchinput.addEventListener("input",function(e){
  console.log(e.target.value);

  let searchvalu = searchinput.value.toLocaleLowerCase().trim()

  let filtered = Cards.filter((item)=> item.model.toLocaleLowerCase().includes(searchvalu))
  RenderCard(filtered)
 })

RenderCard(Cards)


let objekts1 = document.querySelector(".objekts");
let searchinput1 = document.querySelector(".search");

function RenderCard(items){
  objekts.innerHTML = "";
  items.map((item)=>{
    let card = document.createElement("div");
    card.classList.add("box");

    card.innerHTML = `
      <img src="${item.img}" alt="${item.model}" class="card-img">
      <div class="card-info">
        <h3>${item.model}</h3>
        <p><strong>Brand:</strong> ${item.brand}</p>
        <p><strong>Price:</strong> ${item.prise}</p>
        <p><strong>Price:</strong> ${item.description}</p>
        <p><strong>Price:</strong> ${item.model}</p>
        <p><strong>Price:</strong> ${item.storage}</p>
      </div>
    `;
    objekts.appendChild(card);
  });
}

searchinput.addEventListener("input", function(e){
  let searchvalu = searchinput.value.toLocaleLowerCase().trim();
  let filtered = Cards.filter((item)=> item.model.toLocaleLowerCase().includes(searchvalu));
  RenderCard(filtered);
});

RenderCard(Cards);


 
  const swiper = new Swiper('.swiper', {
    
     loop: true,
     spaceBetween: 20,

    
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },

       pagination: {
       el: '.swiper-pagination',
       clickable: true,
     },


     autoplay: {
       delay: 2000,
       disableOnInteraction: false,
     },
   });
   const wrapper = document.querySelector('.swiper-wrapper2');
   const slides = document.querySelectorAll('.swiper-slide2');
   const prevBtn = document.getElementById('prevBtn');
   const nextBtn = document.getElementById('nextBtn');

   let currentIndex = 0;
   const slideWidth = slides[0].clientWidth;

   function updateSlider() {
     wrapper.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
   }

   prevBtn.addEventListener('click', () => {
     if (currentIndex > 0) {
       currentIndex--;
       updateSlider();
     }
   });

   nextBtn.addEventListener('click', () => {
     if (currentIndex < slides.length - 1) {
       currentIndex++;
       updateSlider();
     }
   });

   document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.querySelector('.swiper-wrapper3');
  const slides = document.querySelectorAll('.swiper-slide3');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let currentIndex = 0;
  const slideWidth = 300 + 40; 
  const totalSlides = slides.length;
  const visibleSlides = 5;

  nextBtn.addEventListener('click', () => {
    const maxIndex = totalSlides - visibleSlides;

    if (currentIndex < maxIndex) {
      currentIndex++;
      wrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      wrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  });
});

let cart = [];
let objekts2 = document.querySelector(".objekts");
let searchinput2 = document.querySelector(".search");

function RenderCard(items) {
  objekts.innerHTML = "";
  items.forEach((item, index) => {
    let card = document.createElement("div");
    card.classList.add("box");

    card.innerHTML = `
      <img src="${item.img}" alt="${item.model}" class="card-img">
      <div class="card-info">
        <h3>${item.model}</h3>
        <p><b>Brand:</b> ${item.brand}</p>
        <p><b>Price:</b> ${item.prise}</p>
        <button onclick="addToCart(${index})" class="add-btn">Savatchaga qo‘shish 🛒</button>
      </div>
    `;
    objekts.appendChild(card);
  });
}

RenderCard(Cards);

searchinput.addEventListener("input", function () {
  let searchvalu = searchinput.value.toLowerCase().trim();
  let filtered = Cards.filter((item) =>
    item.model.toLowerCase().includes(searchvalu)
  );
  RenderCard(filtered);
});


function addToCart(index) {
  cart.push(Cards[index]);
  updateCartBadge();
  alert(`${Cards[index].model} savatchaga qo‘shildi!`);
}


function updateCartBadge() {
  const cartLink = document.querySelector('a[href="#"]'); // Savatcha linki
  cartLink.textContent = `Savatcha 🛒 (${cart.length})`;
}

const modal = document.getElementById("cartModal");
const closeBtn = document.querySelector(".close-btn");
const cartItems = document.getElementById("cartItems");
const clearCartBtn = document.getElementById("clearCart");


document.querySelector('a[href="#"]').addEventListener("click", (e) => {
  e.preventDefault();
  showCart();
  modal.style.display = "block";
});


closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});


window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});


function showCart() {
  cartItems.innerHTML = "";
  if (cart.length === 0) {
    cartItems.innerHTML = "<li>Savat bosh</li>";
    return;
  }

  cart.forEach((item, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${item.img}" width="50" style="border-radius:8px;margin-right:10px;">
      ${item.model} - ${item.prise}
      <button onclick="removeFromCart(${i})" style="margin-left:10px;color:red;">❌</button>
    `;
    cartItems.appendChild(li);
  });
}

function removeFromCart(i) {
  cart.splice(i, 1);
  updateCartBadge();
  showCart();
}

clearCartBtn.addEventListener("click", () => {
  cart = [];
  updateCartBadge();
  showCart();
});
  
// insetlof meros ooliganmi yoqmi tekshirib beradi 


// function Big() {
//   let count = 0

//   return function inner (){
//     count++
//     console.log(count)
//   }
// }


// let result = Big()
// result()
// result()
// result()
// result()
// result()

// closer farzand otasidan malumot olishi 


const form = document.getElementById('telegramForm');
const messageInput = document.getElementById('message');
const phoneInput = document.getElementById('phone');

const TELEGRAM_BOT_TOKEN = '8346407605:AAGAaX1vWKfkFWDJoedY8ZNzw7H6UwsWufs';
const CHAT_ID = '5217150869';

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const message = messageInput.value.trim();
  const phone = phoneInput.value.trim();

  const fullMessage = `📩 Yangi so'rov:\n\n📃 Xabar: ${message}\n📞 Telefon: ${phone}`;

  

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  const payload = {
    chat_id: CHAT_ID,
    text: fullMessage
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      alert('✅ Xabar muvaffaqiyatli yuborildi!');
      form.reset();
    } else {
      alert('⚠️ Xatolik yuz berdi.');
    }
  } catch (error) {
    console.error(error);
    alert('🚫 Xatolik yuz berdi!');
  }
});
    
//  
//  
// 
 
document.addEventListener("DOMContentLoaded", () => {
  const openLogin = document.getElementById("openLogin");
  const modal = document.getElementById("loginModal");
  const closeBtn = document.querySelector(".close");
  const form = document.getElementById("telegramForm");
  const messageInput = document.getElementById("message");
  const phoneInput = document.getElementById("phone");

  // === Telegram ma'lumotlari ===
  const TELEGRAM_BOT_TOKEN = "8320395954:AAHdeD-xSqTPWjuR2JyFneqZIfLCmWIHV6M";
  const CHAT_ID = "6421442450";

  // === Modalni ochish ===
  openLogin.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
  });

  // === Modalni yopish ===
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // === Modal tashqarisini bosganda yopish ===
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  // === Formani yuborish ===
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const message = messageInput.value.trim();
    const phone = phoneInput.value.trim();

    if (!message || !phone) {
      alert("⚠️ Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    const fullMessage = `📩 Yangi so'rov:\n\n📃 Xabar: ${message}\n📞 Telefon: ${phone}`;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const payload = {
      chat_id: CHAT_ID,
      text: fullMessage,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("✅ Xabar muvaffaqiyatli yuborildi!");
        form.reset();
        modal.style.display = "none";
      } else {
        alert("❌ Xatolik yuz berdi. Keyinroq urinib ko‘ring.");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Internet yoki serverda xatolik yuz berdi!");
    }
  });
});