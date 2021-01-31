import {createContext, useContext,useEffect} from 'react';
import {useState} from 'react';
import Product from '../Pages/Product';


export const ProductContext = createContext(null);
export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {

    //useEffect = () =>{}
  let _product = [
        {proName:'Prius',proCategory:'Vehicle',proPrice:'2850000',proBrand:'Toyota',proModel:'2019',proDescription:'petrol A/C White color',proImage:'https://wallsdesk.com/wp-content/uploads/2017/01/Toyota-Prius-HD-Desktop.jpg'},
        {proName:'Vitz',proCategory:'Vehicle',proPrice:'1850000',proBrand:'Toyota',proModel:'2018',proDescription:'petrol A/C olive color',proImage:'https://www.blogcdn.com/slideshows/images/slides/255/787/0/S2557870/slug/l/2015-toyota-vitz-jdm-02-1.jpg'},
        {proName:'Latitude Book',proCategory:'Laptop',proPrice:'208500',proBrand:'Dell',proModel:'MAC112',proDescription:'Black color 2gb ',proImage:'https://laptoping.com/specs/wp-content/uploads/2015/04/Dell-Inspiron-I7548-4271SLV.jpg'}, 
        {proName:'EliteBook',proCategory:'Laptop',proPrice:'68500',proBrand:'HP',proModel:'8122',proDescription:'Black color 2gb ',proImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYbzk7oBIMprVKyw42pzTW7wrcOXe_eUWZDA&usqp=CAU'}, 
        {proName:'S10',proCategory:'Mobile',proPrice:'58500',proBrand:'Samsung',proModel:'S10',proDescription:'Black color 2gb ',proImage:'https://2.bp.blogspot.com/-a7Dcb8p1x3U/XGLcVib8t1I/AAAAAAAAAJQ/kpxG3SsS3BsF-zpy_RbbOTMk5arRq18hQCLcBGAs/s1600/Samsung%2BGalaxy%2BS10%2BWallpaper%2BHd%2BDownload%2BLive%2B4K.png'},
        {proName:'note10',proCategory:'Mobile',proPrice:'28500',proBrand:'Samsung',proModel:'S7',proDescription:'Black color 2gb ',proImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS6jm1aMCASu5iogS3DUJyhOFF-A_HlTsfgw&usqp=CAU'},
        {proName:'City',proCategory:'Vehicle',proPrice:'2850000',proBrand:'Honda',proModel:'2017',proDescription:'petrol A/C grey color',proImage:'https://i.pinimg.com/originals/a1/5f/28/a15f28c200ad5e1c8ac372bbaa9a9eb6.jpg'},
        {proName:'Civic',proCategory:'Vehicle',proPrice:'3850000',proBrand:'Honda',proModel:'2018',proDescription:'petrol A/C red color',proImage:'https://cdn.motor1.com/images/mgl/0013W/s1/2017-honda-civic-sedan-review.jpg'},
        {proName:'Prius',proCategory:'Vehicle',proPrice:'2850000',proBrand:'Toyota',proModel:'2019',proDescription:'petrol A/C White color',proImage:'https://wallsdesk.com/wp-content/uploads/2017/01/Toyota-Prius-HD-Desktop.jpg'},
        {proName:'Vitz',proCategory:'Vehicle',proPrice:'1850000',proBrand:'Toyota',proModel:'2018',proDescription:'petrol A/C olive color',proImage:'https://www.blogcdn.com/slideshows/images/slides/255/787/0/S2557870/slug/l/2015-toyota-vitz-jdm-02-1.jpg'},
        {proName:'MAC Book',proCategory:'Laptop',proPrice:'208500',proBrand:'apple',proModel:'MAC112',proDescription:'Black color 2gb ',proImage:'https://consumergearguide.com/wp-content/uploads/2019/12/4k-vs-1080p-laptops-scaled.jpg'}, 
        {proName:'EliteBook',proCategory:'Laptop',proPrice:'68500',proBrand:'HP',proModel:'8122',proDescription:'Black color 2gb ',proImage:'https://d11zer3aoz69xt.cloudfront.net/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/h/p/hp-elitebook-2570p-core-i5-3rd-gen-4gb-250gb-notebook---refurbished_1.jpg'}, 
        {proName:'Iphone',proCategory:'Mobile',proPrice:'28500',proBrand:'apple',proModel:'7plus',proDescription:'Black color 2gb ',proImage:'https://www.gizbot.com/images/2016-12/apple-iphone-7-plus-image-3_148101855620.jpg'},
        {proName:'Android',proCategory:'Mobile',proPrice:'28500',proBrand:'Samsung',proModel:'S7',proDescription:'Black color 2gb ',proImage:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/csm_Galaxy_S20_5G_5dc10d1aed.jpg'},
        {proName:'Latitude Book',proCategory:'Laptop',proPrice:'208500',proBrand:'Dell',proModel:'MAC112',proDescription:'Black color 2gb ',proImage:'https://laptoping.com/specs/wp-content/uploads/2015/04/Dell-Inspiron-I7548-4271SLV.jpg'}, 
        {proName:'EliteBook',proCategory:'Laptop',proPrice:'68500',proBrand:'HP',proModel:'8122',proDescription:'Black color 2gb ',proImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYbzk7oBIMprVKyw42pzTW7wrcOXe_eUWZDA&usqp=CAU'}, 
        {proName:'S10',proCategory:'Mobile',proPrice:'58500',proBrand:'Samsung',proModel:'S10',proDescription:'Black color 2gb ',proImage:'https://2.bp.blogspot.com/-a7Dcb8p1x3U/XGLcVib8t1I/AAAAAAAAAJQ/kpxG3SsS3BsF-zpy_RbbOTMk5arRq18hQCLcBGAs/s1600/Samsung%2BGalaxy%2BS10%2BWallpaper%2BHd%2BDownload%2BLive%2B4K.png'},
        {proName:'note10',proCategory:'Mobile',proPrice:'28500',proBrand:'Samsung',proModel:'S7',proDescription:'Black color 2gb ',proImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS6jm1aMCASu5iogS3DUJyhOFF-A_HlTsfgw&usqp=CAU'}
    
    ]
let [product,setProduct] = useState(_product);


const addPro = (pro) => {
    let newProduct = [...product]
    newProduct.push(pro)
    setProduct(newProduct)
    console.log(product)
}

console.log('------'+product.length)

    let value = {
    product:product,
    addPro  
    }

    return <ProductContext.Provider value={value}>
        {children}
    </ProductContext.Provider>
}
   