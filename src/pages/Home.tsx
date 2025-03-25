import gif from '../assets/home-gif.gif';
import PackageSet from '../assets/package-pic.png';
import { Button } from '@/components/ui/button';
import { CircleArrowRight } from 'lucide-react';
import brand1 from '../assets/brand-logos/amd.png';
import brand2 from '../assets/brand-logos/amdradeon.png';
import brand3 from '../assets/brand-logos/amdryzen.png';
import brand4 from '../assets/brand-logos/darkflash.png';
import brand5 from '../assets/brand-logos/gamdias.png';
import brand6 from '../assets/brand-logos/idcooling.png';
import brand7 from '../assets/brand-logos/intel.png';
import brand8 from '../assets/brand-logos/nvidia.png';
import brand9 from '../assets/brand-logos/nvision.png';
import brand10 from '../assets/brand-logos/ovation.png';
import brand11 from '../assets/brand-logos/pny.png';
import brand12 from '../assets/brand-logos/ramsta.png';
import brand13 from '../assets/brand-logos/teamgroup.png';

function Home() {
  const brandImages = [
    brand1, brand2, brand3, brand4, brand5, brand6,
    brand7, brand8, brand9, brand10, brand11, brand12, brand13
  ];

  return (
    <main>

      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(${gif})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '90vh',
          position: 'relative',
        }}
      >
        <div className='absolute inset-0 bg-black opacity-60 z-0 blur-[200px] shadow-[inset_0px_4px_100px_100px_rgba(0,0,0,0.4)]'></div>

        <div className='relative z-10 flex gap-30 px-[150px] text-white items-center h-[90vh]'>
          <div>
            <h1 className='text-6xl font-bold mb-7'>
              Empowering Your <br /> Digital Experience
            </h1>
            <p className='text-[17px] -2xl'>
              Providing Quality Computers and Accessories Across the Philippines.
            </p>
            <p className='text-[17px] -2xl'>
              Starting at <span className='text-2xl font-bold text-amber-400'>₱17,399</span> per computer Set
            </p>
            <Button className='mt-7 font-bold text-2xl p-6 cursor-pointer'>
              Shop Now <CircleArrowRight />
            </Button>
          </div>

          <div>
            <img className='w-[520px] h-[680px] aspect-[581/822]' src={PackageSet} alt="Package Set" />
          </div>
        </div>
      </section>

      {/* Brand Logos Section */}
      <section className='py-[30px]'>
        <div className='overflow-hidden self-stretch'>
          <div className='flex items-center gap-12 animate-move-left-right'>
            {brandImages.map((brand, index) => (
              <img
                key={index}
                className='h-9 self-stretch'
                src={brand}
                alt={`Brand logo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>


      
    </main>
  );
}

export default Home;
