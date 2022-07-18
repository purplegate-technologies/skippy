import './login.css'
import CompanyLogo from "../../assets/svg/CompanyLogo"

const LogIn = () => {
  return (
    <div className='loginBody flex items-center justify-center'>
      <div className="login z-10">
        <form action="" onSubmit={() => null}>
          <div>
            <div className='text-center mb-5'>
              <div className='flex items-center gap-5'>
                <CompanyLogo />
                <h2>Skippy</h2>
              </div>
              <span>Click Play & Get Paid</span>
            </div>
            <div className="userInput">
              <input type="text" placeholder='Email Address' />
            </div>

            <div className="userInput">
              <input type="password" placeholder='Password' />
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default LogIn