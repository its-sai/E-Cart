import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
    <div className='home_container'>
        <img  className='home_image' src='https://cdn.mos.cms.futurecdn.net/xqtE2xrNPRtFLcsqcQXSRB-768-80.gif'>
        </img>
    <div className='home_row'>
      <Product
      title='Apple Watch With builtin Features' 
      price={39.99} 
      image='https://www.bhphotovideo.com/images/images2500x2500/apple_mlck2ll_a_watch_smartwatch_38mm_space_1187206.jpg'
      rating={5}/>
      <Product
       title='Dell Inspiron 15 3501 D560424WIN9S Laptop (Core i3-11th Gen / 8GB RAM / 1TB HDD / 15.6 (39.60 cm) Display/ UHD graphics/ Win 10 / MSO)' 
       price={100.99} 
       image='https://d2xamzlzrdbdbn.cloudfront.net/products/595219fc-a8f2-4e98-951b-b992e6e09cc421071102.jpg'
       rating={4}
      />
    </div>
    <div className='home_row1'>
        <Product
        title='DOLCE & GABBANA Sneakers'
        price={90.99}
        image='https://www.yoox.com/images/items/17/17036000BB_14_f.jpg?impolicy=crop&width=387&height=490'
        rating={5}
        />
        <Product
         title='God Of War Ragnarok | Launch Edition | PS4 Game (PlayStation 4)'
         price={9.99}
         image='https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/51FLLAMcduL._SX300_SY300_QL70_FMwebp_.jpg'
         rating={5}
        />
        <Product
         title='OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)'
         price={67.99}
         image='https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71AvQd3VzqL._SX679_.jpg'
         rating={4}
        />
    </div>

    <div className='home_row1'></div>

    </div>
    
    </div>

  )
}

export default Home
