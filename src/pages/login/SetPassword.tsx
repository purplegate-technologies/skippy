import React, { useState } from 'react'
import Input from '../../components/input/Input'

const SetPassword = () => {
    // const methods = useForm();
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
        <div className="login">
          {/* <AdminAuthLayout>
            <FormProvider {...methods}> */}
              <form
                // onSubmit={methods.handleSubmit(onSubmit)}
                className="loginBox"
                action=""
              >
                {/* <FormHead
                  title={"Set Password!"}
                  subTitle={"Enter your desire password"}
                /> */}

                <Input
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Password"
                //   id="password"
                //   errMsg="invalid password"
                />

                <Input
                  type="password"
                  name="confirm_password"
                  label="Confirm Password"
                  placeholder="Password"
                //   id="password"
                //   errMsg="invalid password"
                />

                {/* <SubmitBtn isLoading={isLoadng} btnText="Set Password" />
                <FormFoot
                  span="Already have an account?"
                  link="Login"
                  linkTo="/forget"
                /> */}
              </form>
            {/* </FormProvider> */}
          {/* </AdminAuthLayout> */}
          {/* {modal && (
            <SuccessModal
              closeModal={closeModal}
              text={"Password set successfully!"}
            />
          )} */}
        </div>
      );
}

export default SetPassword
