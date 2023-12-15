import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import MainContainer from './components/MainContainer'
import ItemsContainer from './components/ItemsContainer'
import ProductItem from './components/ProductItem'
import ProductDetails from './components/ProductDetails'

function App() {
  const productsArray = [
    {id : "1" ,price : 49000000, priceWithDiscount : 47449000, incredibleOffers : true,stock : "10",description : "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت - ویتنام",name : "سامسونگ S23" , img : "https://dkstatics-public.digikala.com/digikala-products/ebe1b2041a76fda30ce7b8870ddfd627f5affa2a_1681800756.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"},
    {id : "2" ,price : 49190000, priceWithDiscount : 0, incredibleOffers : false,stock : "20",description : "گوشی موبایل سامسونگ مدل Galaxy A14 دو سیم کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت - ویتنام",name : "سامسونگ A14" , img : "https://dkstatics-public.digikala.com/digikala-products/373cf0add6b2964b30a9a59b2ce2f5f2c8ea976f_1681112650.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"},
    {id : "3" ,price : 10100000, priceWithDiscount : 9889000, incredibleOffers : true,stock : "51",description : "گوشی موبایل سامسونگ مدل Galaxy A34 5G دو سیم کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت",name : "سامسونگ A34" , img : "https://dkstatics-public.digikala.com/digikala-products/1fafefa0ce8c0e6af33566ca8ac89c3893a65d17_1684153225.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"}
  ];
  const [products , setProducts] = useState(productsArray);
  const [activeProduct , setActiveProducts] = useState(products[0]);

  const showActiveProduct = (id) =>{
    products.forEach((item) =>{
      if(item.id === id){
        setActiveProducts(item);
      }
    })
  }
  
  return (
    <MainContainer>
      <ItemsContainer>
        {
          products.map((item) =>{
            return <ProductItem product={item} showActiveProduct={showActiveProduct} activeProduct={activeProduct}/>
          })
        }
      </ItemsContainer>
      <ProductDetails product={activeProduct}/>
    </MainContainer>
  )
}

export default App
