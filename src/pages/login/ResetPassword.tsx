import React, { useState } from 'react'
import Input from '../../components/input/Input';

const ResetPassword = () => {
    // const { register, formState, handleSubmit } = useForm();
    const [isLoadng, setIsLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const closeModal = () => {
      setModal(false);
    };
    const onSubmit = (vals: any) => {
      console.log(vals);
      setIsLoading(false);
    };
    return (
      <div className="reset">
        {/* <AdminAuthLayout> */}
          {/* <form onSubmit={handleSubmit(onSubmit)} className="loginBox" action=""> */}
          <form onSubmit={() => null} className="loginBox" action="">
            {/* <FormHead
              title={"Reset Password"}
              subTitle={"Enter your email below for password reset "}
            /> */}

            <Input
              type="email"
              name="email"
              placeholder="Enter email address"
              label="Email"
            //   id="email"
            //   register={register}
            //   errors={formState.errors}
            //   errMsg="invalid email input"
            />

            {/* <SubmitBtn isLoading={isLoadng} btnText="Reset password" />
            <FormFoot span="" link="Back to Login" linkTo="/login" /> */}
          </form>
        {/* </AdminAuthLayout> */}
        {/* {modal && (
          <SuccessModal
            closeModal={closeModal}
            text={"Password set successfully!"}
          />
        )} */}
      </div>
    );
  };

export default ResetPassword
