import gif from '../assets/home-gif.gif'
import PackageSet from '../assets/package-assets/package-set.png'
import { Button } from '@/components/ui/button';
import { CircleArrowRight } from 'lucide-react';

function Home() {
  return (
    <section 
      style={{
        backgroundImage: `url(${gif})`,
        
      }} 
      className="w-full h-screen bg-cover bg-center bg-no-repeat opacity-40 shadow-[inset_0px_4px_100px_100px_rgba(0,0,0,0.4)] backdrop-blur-[6.8px] px-[110px]"
    >
      <div className='flex items-center gap-[50px]'>
        <div>
          <h1 className='text-7xl font-bold mb-[10px]'>Empowering Your <br /> Digital Experience</h1><br />
          <p className='font-bold text-2xl'>Providing Quality Computers Across the Philipines.</p>
          <p className='font-bold text-2xl'>Starting at <span className='text-2xl text-amber-300'>₱17,399</span> per computer set</p>
          <Button className='font-bold text-xl mt-[35px]'>Shop Now <CircleArrowRight></CircleArrowRight></Button>
        </div>
        <div>
          <img src={PackageSet} alt="Package Set Image" className='w-[581px] ' />
        </div>
      </div>
    </section>
  );
}

export default Home;
