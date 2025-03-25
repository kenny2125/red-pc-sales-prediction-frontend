import { relative } from 'path';
import gif from '../assets/home-gif.gif'
import PackageSet from '../assets/package-pic.png'
import { Button } from '@/components/ui/button';
import { CircleArrowRight } from 'lucide-react';

function Home() {
  return (
    <main>

      <section style={{
        backgroundImage: `url(${gif})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        height: `90vh`,
        position: `relative`,         
      }}
      >
      
      <div className='absolute inset-0 bg-black opacity-60 z-0 blur-[200px] shadow-[inset_0px_4px_100px_100px_rgba(0,0,0,0.4)]'></div>

      <div className='relative z-10 flex gap-30 px-[150px] text-white items-center align-center h-[90vh]'>
        <div>
          <h1 className='text-6xl font-bold w-xl mb-7'>Empowering Your <br /> Digital Experience</h1>
          <p className='text-[17px] -2xl '>Providing Quality Computers and Accessories Across the Philippines.</p>
          <p className='text-[17px] -2xl '>Starting at <span className='text-2xl font-bold text-amber-400'>₱17,399</span> per computer Set</p>
          <Button className='mt-7 font-bold text-2xl p-6 cursor-pointer'>Shop Now <CircleArrowRight></CircleArrowRight></Button>
        </div>

        <div>
          <img className='w-[520px] h-[680px] aspect-[581/822]' src={PackageSet} alt="" />
        </div>
      </div>

      </section>
    </main>
  )
}

export default Home;
