import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button, Form,Select } from 'react-bootstrap';
import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { useProduct } from '../Context/Product';


const UploadContent = () => {


        let {product, addPro}  = useProduct()

        let [proName,setName] = useState('');
        let [proCategory,setCategory] = useState('');
        let [proPrice,setPrice] = useState('');
        let [proBrand,setBrand] = useState('');
        let [proModel,setModel] = useState('');
        let [proDescription,setDescription] = useState('');
        let [proImage,setImage] = useState('');
    

   const display = () =>{
        // var obj = {
        //     proName:productName,
        //     proCategory:0,
        //     proPrice:productPrice,
        //     proBrand:productBrand,
        //     proModel:productModel,
        //     proDescription:productDescription,
        //     proImage:PictureLink
        //  }
        let obj ={}
         
        obj = {
            proName,
            proCategory,
            proPrice,
            proBrand,
            proModel,
            proDescription,
            proImage
         }
         console.log(product)
         addPro(obj)
    }

    return (
        <>
        <div id='contentAreaUpload'>
            <h1 style={{ marginTop:'15px',marignBottom:'30px'}}>Product Upload Page</h1>
            <div style={{width:'70%',margin:'0 auto'}}>
            <table className='table table-bordered '>
            <tr>
                    <td>Product Name</td>
                    <td><Form.Control type='text' onChange={
                        (event)=>{
                            setName(event.target.value)
                        }
                    } /> </td>
                </tr>
                <tr>
                    <td>Product Categroy</td>
                    <td><Form.Control as="select" onChange={(event)=>{
                        setCategory(event.target.value) }}>
                    <option value='Vehile'>Vehile</option>
                    <option value='Mobile'>Mobile</option>
                    <option value='Laptop'>Laptop</option>
                    <option value='Home Applines'>Home Applines</option>
                    <option value='Land'>Land</option>
                    </Form.Control> </td>
                </tr>
                <tr>
                <td>Product Price</td>
                <td><Form.Control type='text'  onChange={
                        (event)=>{
                        setPrice(event.target.value)
                    }
                } /> </td>
                </tr>
                <tr>
                    <td>Product Brand</td>
                    <td><Form.Control type='text'   onChange={
                        (event)=>{
                        setBrand(event.target.value)
                    }
                } /> </td>
                </tr>
                <tr>
                    <td>Product Model</td>
                    <td><Form.Control type='text'  onChange={
                        (event)=>{
                        setModel(event.target.value)
                    }
                }/> </td>
                </tr>
                <tr>
                    <td>Product Description</td>
                    <td><Form.Control type='text'   onChange={
                        (event)=>{
                        setDescription(event.target.value)
                    }
                } /> </td>
                </tr>
                <tr>
                    <td>Picture Link</td>
                    <td><Form.Control type='text'   onChange={
                        (event)=>{
                        setImage(event.target.value)
                    }
                } /> </td>
                </tr>
                
                <tr>
                    <td></td>
                    <td><button className='btn btn-success' onClick={display}>Submit</button> </td>
                </tr>


            </table>
            </div>
        </div>
        </>
    )
    }
  export default  UploadContent;