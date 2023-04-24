import { FC } from 'react'

const Login: FC = () => {
  return (
    <div className='w-full min-h-screen p-4 flex'>
        <section className='hidden md:flex flex-1 bg-primary rounded-md'>
            <div className='p-8 flex flex-col items-start'>
                <span className='text-white text-xl font-semibold uppercase'>xchange</span>
                <div className='flex flex-col gap-2 my-auto text-white'>
                    <h1 className='text-[64px] leading-[4rem] font-bold'>Start your <br /> journey with us.</h1>
                    <p className='text-2xl max-w-md font-light text-secondary'>Meet new people and discover the world of fashion and style. Let&apos;s help the planet by exchanging and selling clothes</p>
                </div>
            </div>
        </section>
        <section className='flex-1'>
          
        </section>
    </div>
  )
}

export default Login