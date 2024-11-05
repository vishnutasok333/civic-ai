import google from '../../assets/icons/google.svg'
import microsoft from '../../assets/icons/microsoft.svg'
import apple from '../../assets/icons/apple.svg'
import { SetStateAction, useState } from 'react'
import { useAuth } from '../../containers/auth/authClient'
import Loader from '../atom/Loader/Loader'
import InputArea from '../atom/inputarea/InputArea'
import Notification from '../atom/Notification'
// import { ReactNotifications } from 'react-notifications-component'
// import 'react-notifications-component/dist/theme.css'


export const Login = () => {

  const auth = useAuth();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    // console.log("testpassword", payload)

    if (username.trim() && username !== "" && password !== "") {
      setLoading(true)
      auth.tryLogin({ username, password }, (isAuthenticated: any) => {
      })
    } else {
      Notification("Failed", "Invalid Inputs", "danger");
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && username !== "" && password !== "") {
      event.preventDefault();
      handleLogin();
    }
  };

  return (<>
    <div className="flex flex-col py-[80px] px-[60px] justify-center items-center gap-[64px] flex-grow shrink-0 basis-0 self-stretch">
      <div className='flex flex-col gap-[24px] xl:w-[520px] p-[60px] shadow-lg rounded-[20px] justify-center bg-white'>
        <div className='flex w-[100%] h-[60px] self-stretch text-center justify-center'>
          <h2 className="text-4xl font-bold font-Nunito">Civic AI</h2>
        </div>
        <div className='gap-[30px] flex flex-col self-stretch flex-1'>
          <h2 className='text-[#001833] text-2xl font-bold not-italic font-Nunito h-[33px]'>Login</h2>
          <div className='gap-[24px] self-stretch flex flex-col'>
            <div className='flex flex-col gap-[12px] self-stretch'>
              <div className='relative'>
                <InputArea id="email" type="email" value={username} onChange={(e: { target: { value: SetStateAction<string> } }) => setUsername(e.target.value)} label="Email address*" />
              </div>

              <div className=''>
                {/* <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=" "
                  onKeyDown={handleKeyDown}
                  required
                  className="flex py-[12px] px-3 items-center gap-[10px] font-Nunito text-[16px] not-italic font-normal mt-1 peer appearance-none w-full h-[44px] border border-gray-300 bg-transparent rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-indigo-500 sm:text-sm"
                />
                <label className="font-Nunito text-[16px] not-italic font-normal origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300">Password*</label> */}
                <InputArea id="password" type="password" value={password} onChange={(e: { target: { value: SetStateAction<string> } }) => setPassword(e.target.value)} label="Password*" handleKeyDown={handleKeyDown} />
              </div>

              <div className="flex justify-start">
                <a href="#" className="text-sm not-italic font-normal font-Nunito text-custom-gray hover:text-blue-500">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className='gap-[12px] flex flex-col'>
              <div>
                <button
                  type="submit"
                  className="w-full bg-custom-blue text-white py-[16px] flex h-[44px] justify-center items-center gap-[8px] hover:bg-indigo-600 transition duration-200 rounded-[10px]"
                  onClick={handleLogin}
                >
                  {loading ? <Loader size="sm" /> : "Continue"}
                </button>
              </div>

              <div>
                <p className="flex flex-row gap-[12px] font-Nunito text-custom-gray text-sm font-normal">
                  Don't have an account?
                  <a href="#" className="text-custom-gray font-Nunito text-sm hover:text-blue-600 font-bold">
                    Signup
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-[8px]">
            <p className="text-[#5B5B5B] text-sm font-normal font-Nunito">Login with</p>
            <div className="flex flex-start items-center justify-center h-[50px] gap-[8px] w-full">
              <button className="border border-[#D4D4D4] rounded-[7px] flex items-center gap-[8px] p-[12px] justify-center flex-grow shrink-0 basis-0">
                <img src={google} alt="Google" className="w-5 h-5" />
                <span className="font-Nunito text-xs font-normal">Google</span>
              </button>
              <button className="border border-[#D4D4D4] rounded-[7px] flex items-center gap-[8px] p-[12px] justify-center flex-grow shrink-0 basis-0">
                <img src={microsoft} alt="Microsoft" className="w-5 h-5" />
                <span className="font-Nunito text-xs font-normal">Microsoft</span>
              </button>
              <button className="border border-[#D4D4D4] rounded-[7px] flex items-center gap-[8px] p-[12px] justify-center flex-grow shrink-0 basis-0">
                <img src={apple} alt="Apple" className="w-5 h-5" />
                <span className="font-Nunito text-xs font-normal">Apple</span>
              </button>
            </div>
          </div>
        </div>

        <p className="flex gap-[12px] justify-center w-full">
          <button className="text-[#5B5B5B] font-Nunito text-xs font-normal hover:text-blue-600">
            Terms of use
          </button>
          <button className="text-[#5B5B5B] font-Nunito text-xs font-normal hover:text-blue-600">
            Privacy Policy
          </button>
        </p>
      </div>
    </div>
  </>)
}