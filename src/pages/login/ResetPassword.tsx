import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import CompanyLogo from '../../assets/svg/CompanyLogo';
import LoginBackGIcons from '../../assets/svg/LoginBackGIcons';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import SuccessModal from '../../components/successModal/SuccessModal';
import { useResetMutation } from '../../features/auth/authApiSplice';
import { selectCurrentToken } from '../../features/auth/authSlice';

export interface initialStateType {
  password?: string,
  confirmPassword?: string
}
const initialState = {
  password: "",
  confirmPassword: "",
}

const ResetPassword = () => {
  const [formValue, setFormValue] = useState<initialStateType>(initialState)
  const { password, confirmPassword } = formValue


  const [modal, setModal] = useState(false);
  const closeModal = () => {
    setModal(false);
  };
  const token = useAppSelector(selectCurrentToken)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()


  const [reset, {
    data: resetData,
    isSuccess,
    isError
    // error,
    // isLoading,
  }] = useResetMutation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormValue({ ...formValue, [e.target.name]: (e.target as HTMLInputElement).value })

  useEffect(() => {

  }, [])

  const onSubmit = async () => {

    try {
      if (password !== confirmPassword) {
        return toast.error("Password doesn't match")
      }
      if (password && confirmPassword) {

        // const res = await reset({
        await reset({
          password,
          confirmPassword,
          token
        }).unwrap();

        // show toast
        toast.success("success");

        setFormValue({ password: '', confirmPassword: '' })
        navigate("/login");
      } else {
        toast.error("Please fill all Input field")
      }
    } catch (err: any) {
      console.warn(err);
      if (err.status === "FETCH_ERROR") {
        toast.error("Something went wrong, please try again...");
      } else {
        // toast.error(err.data._meta.error.message);
      }
    }
  };


  useEffect(() => {
    if (isSuccess) {
      const { token, admin }: any = resetData
      // dispatch(setUser({ user: admin, token}))
     navigate('/login', { replace: true })
      toast.success("User Login Successfully")
    }
  }, [isSuccess, navigate])


  return (
    <div className="reset h-screen">
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
            <span className='text-[#949AB1] text-sm'>Reset Password</span>
            <h1 className='font-bold'>Admin</h1>
          </div>

          <form className='userInput' action="" onSubmit={onSubmit}>
            {/* <p className={errMsg ? "errmsg ml-2 font-semibold" : "offscreen"}>{isError && <>{errMsg}</>}</p> */}
            {/* <p ref={errRef} className={errMsg ? "errmsg text-center" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
            <div className="userInput">
              <Input className="childinput" label="Password" type="password" name="password" value={password} placeholder='Password' onChange={handleChange} />
            </div>

            <div className="userInput">
              <Input className="childinput" label="Confirm Password" type="password" name='confirmPassword' value={confirmPassword} placeholder='Confirm Password' onChange={handleChange} />
            </div>

            <div className='mb-3 userInput'>
              {/* <Link to="reset" className="text-[#FF5A5A] font-bold text-sm">Reset Passsword</Link> */}
            </div>

            <div className="">
              <Button className='w-full bg-[#516CF5] ' size='medium' type='submit'>Reset</Button>
            </div>
          </form>

        </div>
      </div>
      {modal && (
        <SuccessModal
          closeModal={closeModal}
          text={"Password set successfully!"}
        />
      )}
    </div>
  );
};

export default ResetPassword
