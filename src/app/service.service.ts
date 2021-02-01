import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  items: any;
  offer: any[];

  constructor() { 
    this.items=[
      {id:"1", 
      price:"From $25", 
      name:"Tote Bags",
      imagePath:"assets/bags.jpg",
      des:"Our Warehouse Has A Variety of Bag Types To Fit Your Specific Needs! Design custom bags and backpacks online.Create promotional bags with your logo at bulk prices. "
    },
    {id:"7", 
    price:"From $17", 
    name:"Pillows",
    imagePath:"assets/pillows.png",
    des:"You can customize one of our delicately embroidered blankets or our many custom printed blankets with your choice of text, graphics and designs."
  },
    {id:"8", 
    price:"From $20", 
    name:"T-shirts",
    imagePath:"assets/tshirt.png",
    des:"Custom T-shirts designed online by you. Outfit Your Team With Custom Imprinted Apparel. Easy ordering. Expert customer service. Exclusive products. Styles: T-Shirts, Dress Shirts, Polo Shirts, Sweatshirts."
  },
     {id:"2", 
      price:"From $40", 
      name:"Blankets",
      imagePath:"assets/blankets.jpg",
      des:"Personalize Blankets with Your Logo/Photo/Coustomized Text Now! Great Gift to add color, personality, and customization to any room of your home. Personalize Your Living Space. "
    },
      {id:"3", 
      price:"From $15", 
      name:"Cups",
      imagePath:"assets/cups.jpeg",
      des:"urn your ideas into action with custom products.Create a custom mug by adding a photo, logo or inspirational quote. Personalized coffee mugs make great unique gifts and are also good for promotional events."
    },
      {id:"4", 
      price:"From $20", 
      name:"Photo Frame",
      imagePath:"assets/frames.jpg",
      des:"Make your photos the center of attention with personalized photo frames from Our Website! Showcase your favorite memories by designing the perfect frame today."
    },
      {id:"5", 
      price:"From $25", 
      name:"Glasses",
      imagePath:"assets/glasses.jpg",
      des:"Personalize you kitchen with our custom glassware and etched drinkware.Use them for entertaining or gifting your favorite person"
    },
      {id:"6", 
      price:"From $30", 
      name:"Doormats",
      imagePath:"assets/mats.jpeg",
      des:"Welcome guests to your home with personalized doormats that feature names, monograms & other custom details. Create custom welcome mats for indoor and outdoor"
    },
      
      {id:"9", 
      price:"From $35", 
      name:"Wall Plates",
      imagePath:"assets/wallname.jpg",
      des:"Choose from dozens of sizes and materials. Arrange cutouts. Add guaranteed-compatible connectors and cables. Create gang plates, rack panels, and covers. "
    },
      {id:"10", 
      price:"From $17", 
      name:"Caps",
      imagePath:"assets/caps.png",
      des:"Exceptionally low prices, all sorts of promotional caps and hats to promote your business. Inexpensive Promotional Items and Wholesale Promotional Products"
    },
      {id:"11", 
      price:"From $15", 
      name:"Phone Case",
      imagePath:"assets/pcases.png",
      des:"Custom phone cases for iPhone, Galaxy, Google and LG with personalized, photo and monogram options. "
    },
      {id:"12", 
      price:"From $12", 
      name:"Wristbands",
      imagePath:"assets/bands.png",
      des:"Yes, there is a film with Leonardo DiCaprio, but that doesn’t get you off the hook from reading this perceptive, pitch-perfect novel. Set in the jazzy Roaring Twenties, Fitzgerald’s tale of obsession, ambition, love, money, and a world that would vanish with the Depression was to be his Big Hit—and he was surprised and disappointed when it sold poorly. When Fitzgerald died in 1940, he was an all but forgotten writer. Soon after there was a revival of his work, and he is now viewed as one of the great American novelists. Today, 500,000 copies of Gatsby are sold each year."
    },
      {id:"13", 
      price:"From $26", 
      name:"Clocks",
      imagePath:"assets/clock.png",
      des:"Make every moment count with personalized collage photo clock for wall or table display.Check out our personalized clock selection for the very best in unique or custom, handmade pieces from our clocks shops."
    },
      {id:"14", 
      price:"From $5", 
      name:"Cards",
      imagePath:"assets/cards.jpg",
      des:"Create customized greeting cards, appropriate for any special occasion, with us. Personalize each card with photos and words to make the receiver feel super special"
    },
      {id:"15", 
      price:"From $", 
      name:"Dog Bowl",
      imagePath:"assets/dogbowl.jpg",
      des:"Let Your Pup Stand Apart from the Pack with a Custom made Dog Bowl. Built to Resist Dents, Drops, and Scratches. Design Your Pooch a Custom Bowl Today. "
    }
    ];
    this.offer=[
      {id:"0", 
      name:"Welcome!!!",
      imagePath:"assets/spring.jpg",
      des:"Get yor loved ones a personized Gift!!"
    },
      {id:"1", 
      name:"Buy two Glasses get 1 Free!!!",
      imagePath:"assets/3.jpg",
      des:"On Limited edition Only. Offer till 17th May"
    },
      {id:"2", 
      name:"50% Off on Photo Frames",
      imagePath:"assets/f1.jpg",
      des:"Month end sale"
    },
      {id:"3", 
      name:"Mothers Day Sale!!",
      imagePath:"assets/mothers-day.png",
      des:"On this special day, make you mom happy, use code 'MOMGIFT'"
    },
      {id:"4", 
      name:"First-time User Offer",
      imagePath:"assets/offer.jpg",
      des:"Use code 'FIRSTTIME' and get $10 off"
    }
    ];
  }
  getItems(){
    return this.items;
  }
  
  getOffers(){
    return this.offer;
  }
  filterItems(searchTerm){
 console.log(searchTerm.toLowerCase());
 console.log(this.items.filter((items) => {
  return items.name.toLowerCase().includes(searchTerm.toLowerCase());}));
   
  return this.items.filter((items) => {
         return items.name.toLowerCase().includes(searchTerm.toLowerCase());
     });  
     
 }
 getItems1(name){
  return this.items.filter((items) => {
    return items.name.toLowerCase().includes(name.toLowerCase());});
}

}
