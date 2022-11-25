import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Usercontex } from '../../../../AuthContex/AuthContex';

const Login = () => {

    const { login, googleSignIn } = useContext(Usercontex)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handellogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        login(email, password).then(res => {
            navigate(from, { replace: true });
        })

    }

    const handelgoogle = () => {
        googleSignIn().then(res => {

            navigate(from, { replace: true });
            console.log('google login');
            const name = res.user.displayName;
            const email = res.user.email;
            const option="Buyer"
          saveuser(name,email,option)

        })
    }
    const saveuser = (name, email, option) => {
        console.log(name, email,);
        const user = {
            name, email,
            role: option
        }
        console.log(user);
        fetch('http://localhost:5000/addusers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }).then(res => res.json())
    }
    
    return (
        <div >
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handellogin}>
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
    
                            </div>
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

export default Login;