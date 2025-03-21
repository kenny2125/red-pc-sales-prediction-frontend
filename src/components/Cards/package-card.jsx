import packageSet from '../../assets/package-assets/package-set.png';
import cpu from '../../assets/package-assets/cpu-icon.png'
import mobo from '../../assets/package-assets/mobo-icon.png'
import ram from '../../assets/package-assets/ram-icon.png'
import gpu from '../../assets/package-assets/gpu-icon.png'
import checkbox from '../../assets/package-assets/checkbox.png'
import checkboxClicked from '../../assets/package-assets/bx-checkbox-checked.png'
import { useState } from 'react';

function PackageCard() {
  const [check, setCheck] = useState(false)

  const toggleCheck = () => {
    setCheck(!check)
  }

  return (
    <div className='m-10 p-[10px] w-[220px] flex flex-col bg-prodcard rounded-[20px] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)]package-assets/'>
      <div className='mb-0.5'>
        <img src={check ? checkboxClicked : checkbox} alt="checkbox" onClick={toggleCheck} className='cursor-pointer absolute w-[42px] h-[42px]'/>
        <img src="" alt="" />
        <img src={packageSet} alt="package img" />
        <h3 className='text-[14px] text-center font-bold'>RYZEN 7 5700g Full PC Set</h3>
      </div>

      <div className='flex gap-1 m-1'>
        <div className='flex flex-col gap-0.5 '>
          <img src={cpu} alt="cpu icon h-[23.9px]" />
          <img src={mobo} alt="cpu icon h-[23.9px]" />
          <img src={ram} alt="cpu icon h-[23.9px]" />
          <img src={gpu} alt="cpu icon h-[23.9px]" />
        </div>

        <div className='flex flex-col gap-[3px]'>
          <p className='text-[14px]'>Ryzen 7 5700g</p>
          <p className='text-[14px'>Gigabyte B450m</p>
          <p className='text-[14px]'>Corsair DDR4 2666mhz</p>
          <p className='text-[14px]'>Radeon Vega 8</p>
        </div>
      </div>

      <h2 className='text-center text-accent font-bold text-2xl-anton'>₱17,399</h2>
    </div>
  )
}

export default PackageCard