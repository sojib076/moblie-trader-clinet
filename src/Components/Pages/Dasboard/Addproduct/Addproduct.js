import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Usercontex } from '../../../../AuthContex/AuthContex';

const Addproduct = () => {
    const navigate = useNavigate()
    const {user} = useContext(Usercontex)
    console.log(user.email);
    // picture, time, resalePrice, yearsOfUse, sellerName, originalPrice, name, location,avaiable,phonenumber
    const handelproduct = (e) => {
        e.preventDefault()
        const name = e.target.pname.value
        const location = e.target.location.value
        const originalPrice = e.target.oprice.value
        const resalePrice = e.target.rprice.value
        const yearsOfUse = e.target.youse.value
        const Yearofpurchase = e.target.yop.value
        const picture = e.target.picture.value
        const sellerName = e.target.sellerName.value
       const  phonenumber = e.target.phonenumber.value
       const category = e.target.categorie.value
        const sellerEmail = user.email
        const description = e.target.description.value
        const condition= e.target.condition.value
       
        var date = new Date();
        var time = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

        const product = {
            category,
            selleremail:user?.email,
            name,
            location,
            originalPrice,
            resalePrice,
            yearsOfUse,
            Yearofpurchase,
            picture,
            time,
            sellerName,
            phonenumber,
            sellerEmail,
            description,
            condition
        }


        fetch('http://localhost:5000/addphones',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(product)
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){

                toast.success('Product added successfully')
                navigate('/dashboard/myproducts')
            }
        })
    }
    return (
        <div>
            <form className="card-body" onSubmit={handelproduct}>
                <div className="form-control">
                    <input type="text" placeholder="Product Name " className="input input-bordered" name='pname' />
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Product Name " className="input input-bordered"  defaultValue={user?.email} name='selleremail' />
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Seller Name " className="input input-bordered" name='sellerName' defaultValue={user?.displayName} />
                </div>
                <div className="form-control">
                    <input type="text" placeholder=" Your Location" className="input input-bordered" name='location' />
                </div>
                <label className='label'> <span className='label-text'> Select Your categories</span></label>
                <select className="select select-bordered w-full max-w-xs" name='categorie'>
                    <option selected>samsung</option>
                    <option>iphone</option>
                    <option>mi</option>
                </select>
                <select className="select select-bordered w-full max-w-xs" name='condition'>
                    <option selected>Great</option>
                    <option>Good</option>
                    <option>Bad</option>
                </select>
                <div className="form-control">
                    <input type="text" placeholder=" original Price" className="input input-bordered" name='oprice' />
                </div>
                <div className="form-control">
                    <input type="text" placeholder=" Resale Price" className="input input-bordered" name='rprice' />
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Years Of Use" className="input input-bordered" name='youse' />
                    <input type="text" placeholder="Year of purchase " className="input input-bordered" name='yop' />
                    <input type="text" placeholder=" phone number " className="input input-bordered" name='phonenumber' />
                </div>
            
                <input type="file" className="file-input file-input-bordered w-full max-w-xs" name='picture' />
                <textarea name="description" id="" cols="10" rows="8" className='border border-black' > </textarea>
                <div className="form-control mt-6"> 
                    <button className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    );
};

export default Addproduct;