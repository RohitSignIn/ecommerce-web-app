import { useForm } from "react-hook-form";
import './Auth.css';

function Auth({page, setPage, setAuthPage, handleForm}) {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    handleForm(data)
  };

    return (
        <div id='auth_con'>
            <div id='auth'>
                <div id='auth_form_con'>   
                    <div>
                        <div>   
                            <input type="text" name="username" placeholder='Enter Username' {...register("username", 
                            {required: "Enter Username"})} />
                            {errors.username && <p>{errors.username?.message}</p>}
                        </div>
                        {
                        page == "Signup" && <div>   
                            <input type="text" name="email" placeholder='Enter Email' {...register("email", 
                            {required: "Enter Email",
                            pattern:{
                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                message: "Entered email is not valid"
                            }
                            })} />
                            {errors.email && <p>{errors.email?.message}</p>}
                        </div> 
                        }
                        <div>   
                            <input type="password" name="password" placeholder='Enter Password' {...register("password", 
                            {required: "Enter Password"})} />
                            {errors.password && <p>{errors.password?.message}</p>}
                        </div>
                        <div>
                            <button onClick={handleSubmit(onSubmit)}>{page}</button>
                        </div>                  
                    </div>
                    <div>
                    {
                        page == "Login" && <button onClick={() => setPage("Signup")}>New to MyStore? Create an account</button>
                    }
                    {
                        page == "Signup" && <button onClick={() => setPage("Login")}>Already have an account? Login</button>
                    }

                    </div>
                </div>
                <div id='auth_side'>
                    <div>
                        <h1>{page}</h1>
                        <p>Get Access to your <br />
                            Orders, WishList and <br />
                            Recommendations
                        </p>
                    </div>
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" alt="image" />
                </div>
            <button onClick={() => setAuthPage((prev) => !prev)} id='auth_cross'>x</button>
            </div>
        </div>
    )
}

export default Auth;