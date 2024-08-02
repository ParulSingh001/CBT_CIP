const wrapper = document.querySelector(".sliderWrapper");
const menuitem=document.querySelectorAll(".menuitem");

// menuitem= JSON.parse(menuitem);

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "public/air.png",
        },
        {
          code: "darkblue",
          img: "public/air.png",
        },
      ],
    },


    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
          {
            code: "lightgray",
            img: "public/jordan 1.png",
          },
          {
            code: "green",
            img: "public/jordan.png",
          },
        ],
      },
      {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
          {
            code: "green",
            img: "public/blazer2.png",
          },
          {
            code: "lightgray",
            img: "public/blazzer.png",
          },
        ],
      },
      {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
          {
            code: "black",
            img: "public/crater1.png",
          },
          {
            code: "#fdc673",
            img: "public/crater.png",
          },
        ],
      },
      {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
          {
            code: "gray",
            img: "public/hippie 1.png",
          },
          {
            code: "black",
            img: "public/hippie.webp",
          },
        ],
      },
    ];



    let choosenproduct=products[0];

    const currentproductimg=document.querySelector(".productimg");
    const currentproducttitle=document.querySelector(".producttitle");
    const currentproductprice=document.querySelector(".productprice");
    const currentproductcolors=document.querySelectorAll(".color");
    const currentproductsizes=document.querySelectorAll(".size");





menuitem.forEach((item,index)=>
{
    item.addEventListener("click",()=>{

        console.log('called event listener')

        //change the current slide
        wrapper.style.transform=`translateX(${-100 *index}vw)`;


        //change the choosen product
        choosenproduct=products[index];

        //change the text of current products 

        currentproducttitle.textContent=choosenproduct.title;
        currentproductprice.textContent= "$" + choosenproduct.price;
        currentproductimg.src=choosenproduct.colors[0].img;


        //assign new colors

        currentproductcolors.forEach((color,index)=>
         {color.style.backgroundColor=choosenproduct.colors[index].code
        

        });
    });
});


currentproductcolors.forEach((color,index)=>{
  color.addEventListener("click",()=>{
    currentproductimg.src=choosenproduct.colors[index].img;

  });
});

currentproductsizes.forEach((size,index)=>{
  size.addEventListener("click",()=>{
    currentproductsizes.forEach((size,index)=>{
      size.style.backgroundColor="white";
    size.style.color="black";

    });
    size.style.backgroundColor="black";
    size.style.color="white";
  });
});

const productbutton=document.querySelector(".productbutton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");

productbutton.addEventListener("click",()=>{
  payment.style.display="flex";
  });

  close.addEventListener("click",()=>{
    payment.style.display="none";
    })
  


