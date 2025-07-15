import Logo from '../assets/logo.png'
import Google from '../assets/Google.png'
import Login from '../assets/Login.png'
export default function login() {
  return (
    <div className='flex justify-between'>
        <div className='flex flex-col gap-8 ml-[150px]'>
            <div className='pt-5'>
                <img src={Logo} alt='logo' className='w-[200px]'/>
            </div>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-4'>
                    <p className='text-4xl font-semibold'>Create Your Account</p>
                    <p className='text-md'>Welcome back! Please enter your details</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-1'>
                        <labe className='font-semibold'>Full Name</labe>
                        <input placeholder='Enter Your Full Name' type='text' className='input border-[#F5F5F5] rounded-sm h-[44px] w-[404px] pl-2'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <labe className='font-semibold'>Email</labe>
                        <input placeholder='Enter Your Email' type='email' className='input border-[#F5F5F5] rounded-sm h-[44px] w-[404px] pl-2'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='font-semibold'>Password</label>
                        <input placeholder='Enter your Pasword' type='password' className='input border-[#F5F5F5] rounded-sm h-[44px] w-[404px] pl-2'/>
                    </div>
                </div>
                <div>
                    <button className='w-[404px] h-[44px] mt-2 bg-[#18cb96] rounded-sm font-semibold cursor-pointer'>Create Account</button>
                </div>
                <div>
                    <button className='flex flex-row items-center justify-center bg-[#F5F5F5] rounded-sm gap-2 w-[404px] h-[44px] cursor-pointer'>
                        <img src={Google} alt='google image'/>
                        Sign Up with Google
                    </button>
                </div>
                <div className='flex flex-row gap-1 justify-center'>
                    <p className='text-gray-400'>Already have an Account?</p>
                    <button className='cursor-pointer font-semibold'>Sign In</button>
                </div>
            </div>
        </div>
        <div>
            <img src={Login} alt='loing side image' className='h-[695px] w-[675px]'/>
        </div>
    </div>
  )
}
