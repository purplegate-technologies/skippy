import { useState } from 'react'
import Input from '../../components/input/Input'

const SetPassword = () => {
    const [isLoadng, setIsLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const closeModal = () => {
      setModal(false);
    };
    const onSubmit = (vals: any) => {
      setIsLoading(false);
    };

    return (
        <div className="login">
              <form className="loginBox">
                <Input
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Password"
                />

                <Input
                  type="password"
                  name="confirm_password"
                  label="Confirm Password"
                  placeholder="Password"
                />
              </form>
        </div>
      );
}

export default SetPassword
