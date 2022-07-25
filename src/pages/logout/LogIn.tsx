import './login.css'
import CompanyLogo from "../../assets/svg/CompanyLogo"
import { Link, useNavigate } from 'react-router-dom'
import { useLoginUserMutation } from '../../services/authApis'
import { useAppDispatch } from '../../app/hooks'
import React, { useEffect, useRef, useState } from 'react'
import { setUser, setUserDetails, setUserToken } from '../../features/auth/authSlice'
import { toast } from 'react-toastify';
import Button from '../../components/button/Button'
import LoginBackGIcons from '../../assets/svg/LoginBackGIcons'


export interface initialStateType {
  firstName?: string,
  lastName?: string,
  email?: string,
  password?: string,
  confirmPassword?: string
}
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const LogIn = () => {
  const [formValue, setFormValue] = useState<initialStateType>(initialState)
  const { firstName, lastName, email, password, confirmPassword } = formValue

  const userRef = useRef<any>()
  const errRef = useRef<any>()
  const [errMsg, setErrMsg] = useState("")

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [loginUser,
    {
        data: loginData,
        isSuccess: isLoginSuccess,
        isError: isLoginError,
        error: loginError,
        isLoading,
        reset,
        status,
    }] = useLoginUserMutation()
    const handleChange = (e: any) => setFormValue({ ...formValue, [e.target.name]: e.target.value })

    // useEffect(() => {
      // userRef.current.focus()
    // }, [email, password])


    console.log(loginData, "loginData loginData data data")

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      try {
        if (email && password) {
          // await loginUser({ email, password })
          // console.log(await loginUser({ email, password })).unwrap();

          // call login trigger from rtk query
        const response: any = await loginUser({email, password}).unwrap();
        console.log(response, "response response response")

      // set user data and token in redux store
          dispatch(setUserDetails({user: response?.data}));
          dispatch(setUserToken({token: response?._meta.token}));
          toast.success("Login successful");
          console.log('login now')
          // dispatch(setUser({ name: loginData.token, token: loginData.result.name}))
          // setFormValue({email: '', password:''})
          navigate('/')
      } else {
        toast.error("Please fill all Input field")
        console.log('Not logined ')
      }
      } catch (err: any) {
        if(!err?.response) {
          toast.error(!err?.response);
          setErrMsg("No Server Response")
        } else if (err.response?.status === 400){
          toast.error(err.response?.status);
          setErrMsg("Missing Email or Password")
        } else if (err?.response?.status === 401) {
          toast.error(err.data._meta.error.message);
          setErrMsg("Unauthorized")
        } else {
          setErrMsg("Login Failed")
        }
        errRef.current.focus()
      }
  }


  //////////////

  const onSubmit = async (data: any) => {}
  // const onSubmit = async (data: any) => {
  //   try {
  //     // call login trigger from rtk query
  //     const response = await loginUser(data).unwrap();

  //     // set user data and token in redux store
  //     dispatch(setUserDetails({user: response.data}));
  //     dispatch(setUserToken({token: response._meta.token}));
  //     // show toast
  //     // toaster("success", "Login successful");
  //     // navigate(search ? search : "/dashboard", {replace: true});
  //   } catch (err) {
  //     console.warn(err);
  //     if (err.status === "FETCH_ERROR") {
  //       // toaster("error", "Something went wrong, please try again...");
  //     } else {
  //       // toaster("error", err.data._meta.error.message);
  //     }
  //   }
  // };

  //////////////
       
  useEffect(() => {
    if (isLoginSuccess) {
        toast.success("User Login Successfully")
        // dispatch(setUser({ name: loginData, token: loginData}))  
        navigate('/')
    }
    // if (isRegisterSuccess) {
    //     toast.success("User Register Successfully")
    //     // dispatch(setUser({ name: registerData.result.name, token: registerData.token,}))
    //     navigate('/dashboard')
    // }
}, [isLoginSuccess, 
  // isRegisterSuccess
])


  return (
    <div className="h-screen">
      <div className="absolute scale-75 top-[-98px] left-[-40px]" >
      <LoginBackGIcons />
      </div>
    <div className='loginBody flex items-center justify-center'>
      {/* <p className={errMsg ? "errmsg" : "offscreen"}>{isLoginError && JSON.stringify(isLoginError.valueOf())}</p> */}

      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>      

      <div className="login z-10 m-5">
        <form action="" onSubmit={handleLogin}>
          <div className='text-center mb-5 logoLogin'>
            <div className='flex items-center gap-5'>
              <CompanyLogo /> <h2>Skippy</h2>
            </div>
            <span>Click Play & Get Paid</span>
          </div>

          <div>
          
            <div className="userInput">
              <input type="email" name="email" value={email} placeholder='Email' onChange={handleChange} />
            </div>

            <div className="userInput">
              <input type="password" name='password' value={password} placeholder='Password' onChange={handleChange} />
            </div>

            <div className="w-100 flex flex-1 my-5">
              <Button size='full' type='submit'>Sign In</Button>
            </div>
          </div>

        </form>
      </div>
    </div>
    </div>
  )
}

export default LogIn