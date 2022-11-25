import React, { useContext } from 'react';
import { Usercontex } from '../../../../AuthContex/AuthContex';

const Signup = () => {
    const {createuser,updateuser,googleSignIn}=useContext(Usercontex)
    const handelsignup = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const option = e.target.option.value;
        
        createuser(email, password).then(res => {
            saveuser(name,email,option)
            updateuser(name)
        })
       
    }
    const handelgoogle = () => {
        googleSignIn().then(res => {
            const name = res.user.displayName;
            const email = res.user.email;
            const option="Buyer"
          saveuser(name,email,option)
        })
    }
    const saveuser = (name,email,option) => {
        console.log(name,email,);
        const user = { name, email, 
            role:option }
            console.log(user);
        fetch('http://localhost:5000/addusers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }).then(res => res.json())
    }

    return (

        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold"> Signup </h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handelsignup}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" name='name' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                            <input type="text" placeholder="password" className="input input-bordered" name='password' />
                            <label className='label mt-5 font-bold'>  
                            <span className="label-text"> Select who you are </span>
                            </label>
                                <select className="select select-ghost w-full max-w-xs mt-2" name='option'>
                                    <option selected>Buyer</option>
                                    <option>Seller</option>
                                </select>

                            </div>
                            {/* options */}

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <button className="btn btn-outline mt-2" onClick={handelgoogle}>Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Signup;