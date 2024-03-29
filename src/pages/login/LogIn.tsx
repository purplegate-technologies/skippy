import './login.css'
import CompanyLogo from "../../assets/svg/CompanyLogo"
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import React, { useEffect, useState } from 'react'
import { selectCurrentToken, setUser} from '../../features/auth/authSlice'
import { toast } from 'react-toastify';
import Button from '../../components/button/Button'
import LoginBackGIcons from '../../assets/svg/LoginBackGIcons'
import Input from '../../components/input/Input'
import { useLoginMutation } from '../../features/auth/authApiSplice'


export interface initialStateType {
  firstName?: string,
  lastName?: string,
  email?: string,
  password?: string,
  confirmPassword?: string
}
const initialState: initialStateType = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const LogIn = () => {
  const [formValue, setFormValue] = useState<initialStateType>(initialState)
  const { email, password, } = formValue

  const [errMsg, setErrMsg] = useState("")

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const  tokenForUser  = useAppSelector(selectCurrentToken)

  const [loginUser,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      isError: isLoginError,
      isLoading,
    }] = useLoginMutation()

  const handleChange = (e: any) => setFormValue({ ...formValue, [e.target.name]: e.target.value })

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()


    try {
      if (email && password) {
        // await loginUser({ email, password })
        // console.log(await loginUser({ email, password })).unwrap();

        // call login trigger from rtk query
        await loginUser({ email, password }).unwrap();

        const {  admin, token }: any = await loginData
        // set user data and token in redux store
        // dispatch(setUser({ user: admin.firstName, token }))
        dispatch(setUser({ user: admin, token }))
        if(isLoginSuccess) {
          navigate('/', { replace: true })
          toast.success("Login successful");
        }
        setFormValue({email: '', password:''})
        // tokenForUser && navigate('/', { replace: true })
      } else {
        toast.error("Please fill all Input field")
      }
    } catch (err:  any) {
      if (!err?.response) {
        toast.error(!err?.response_message);
        setErrMsg("No Server Response")
      } else if (err.response?.status === 400) {
        toast.error(err.response?.status);
        setErrMsg("Missing Email or Password")
      } else if (err?.response?.status === 401) {
        toast.error(err?.response?.message);
        // toast.error(err.data._meta.error.message);
        setErrMsg("Unauthorized")
      } else {
        setErrMsg("Login Failed")
      }
      // errRef.current.focus()
    }
  }


  useEffect(() => {
    if (isLoginSuccess) {
      const { token, admin }: any = loginData
      dispatch(setUser({ user: admin, token}))
       navigate('/', { replace: true })
      toast.success("User Login Successfully")
    }
  }, [isLoginSuccess, navigate, dispatch, loginData])


  return (
    <div className="h-screen">
      <div className="absolute scale-75 top-[-98px] left-[-40px]" >
        <LoginBackGIcons />
      </div>
      <div className='loginBody'>

        <div className='text-center logoLogin flex flex-col justify-center items-center absolute top-[13%] md:top-[12%]'>
          <div className='flex items-center gap-5'>
            <CompanyLogo className='md:scale-110 my-1' /> <h1 className='font-bold text-lg md:text-[30px]'>Skippy</h1>
          </div>
          <span className='text-center text-[18px] color-[#282828]'>Click Play & Get Paid</span>
        </div>

        <div className="login z-10 p-3 w-full max-w-[23rem] md:bg-white bg-transparent">

          <div className='p-[10px]'>
            <span className='text-[#949AB1] text-sm'>Welcome Back,</span>
            <h1 className='font-bold'>Admin</h1>
          </div>

          <form className='userInput' action="" onSubmit={handleLogin}>
           <p className={errMsg ? "errmsg ml-2 font-semibold" : "offscreen"}>{isLoginError && <>{errMsg}</>}</p>
            {/* <p ref={errRef} className={errMsg ? "errmsg text-center" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
            <div className="userInput">
              <Input className="childinput" label="Email" type="email" name="email" value={email} placeholder='Email' onChange={handleChange} />
            </div>

            <div className="userInput">
              <Input className="childinput" label="Password" type="password" name='password' value={password} placeholder='Password' onChange={handleChange} />
            </div>

            <div className='mb-3 userInput'>
              <Link to="/reset" className="text-[#FF5A5A] font-bold text-sm">Reset Passsword</Link>
            </div>

            <div className="">
              <Button loading={isLoading} className='w-full bg-[#516CF5]' size='medium' type='submit'>Sign In</Button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default LogIn
