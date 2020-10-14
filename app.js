// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: 
    "https://res.cloudinary.com/dtjqtumhc/image/upload/v1602701012/Images%20for%20Reviews%20Tutorial/woman1_vwem42.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "lakisha parks",
    job: "web designer",
    img:
      "https://res.cloudinary.com/dtjqtumhc/image/upload/v1602701012/Images%20for%20Reviews%20Tutorial/woman2_krruul.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "talib jones",
    job: "executive",
    img:
      "https://res.cloudinary.com/dtjqtumhc/image/upload/v1602701012/Images%20for%20Reviews%20Tutorial/man2_wiue0m.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "chad anderson",
    job: "the reporter",
    img:
      "https://res.cloudinary.com/dtjqtumhc/image/upload/v1602701012/Images%20for%20Reviews%20Tutorial/man1_chvkiu.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  {
    id: 5,
    name: "moktar habib",
    job: "the lawyer",
    img:
      "https://res.cloudinary.com/dtjqtumhc/image/upload/v1602701012/Images%20for%20Reviews%20Tutorial/man3_hta8cn.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  {
    id: 6,
    name: "bella martinez",
    job: "hr",
    img:
      "https://res.cloudinary.com/dtjqtumhc/image/upload/v1602701012/Images%20for%20Reviews%20Tutorial/woman3_uq9uo7.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  
];

// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');


const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function(){
  showPerson();

});

// show person based on item

function showPerson(){
  const item = reviews[currentItem]
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;

};

// show next person
nextBtn.addEventListener('click', function(){
  currentItem++;
  if(currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson();
})

// prev next person
prevBtn.addEventListener('click', function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showPerson();
})

// show random person
randomBtn.addEventListener('click', function(){
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});