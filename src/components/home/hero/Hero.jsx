import React, { useEffect, useState } from "react"
import Heading from "../../common/Heading"
import "./hero.css"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hero = ({ addToHistory }) => {
  const [imageUrl, setImageUrl] = useState("");

  const getData = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        console.log(response)
        setImageUrl(response.data.message);
        addToHistory(response.data.message);
      })
      .catch((error) => {
        console.log('Error:', error);
      })
  }

  const addToCart = (imageUrl, price) => {

    localStorage.setItem('cart', JSON.stringify([...JSON?.parse(localStorage.getItem('cart')), [imageUrl, price]]));
    toast.success('Item added to cart');
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section className='hero'>
        <div className='container'>

          <div className="flex mb-5">
            <Heading title='Dog Image' subtitle='Fetch By API' />
            <button className='btn1' onClick={() => getData()}>
              Fetch New Image
            </button>
          </div>
        </div>
        <div className='flex-center' style={{ textAlign: 'center', height: '500px' }}>
          <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick pauseOnFocusLoss />

          <div style={{ width: '400px', height: '400px', marginTop: '30px' }}>
            <div >
              <img src={imageUrl} alt='Dog Image' width='300px' height='200px' />
            </div>
            <div className='button floating-btn'>
              <div>
                <button className='btn1' onClick={() => addToCart(imageUrl, Math.floor(Math.random() * 999) + 100)}>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
