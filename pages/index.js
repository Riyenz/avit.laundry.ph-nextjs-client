import HomeHeroSection from '../components/home/HomeHeroSection';
import Icon from '../components/Icon';
import { DefaultLayout } from '../layouts/DefaultLayout';

export default function Home() {
  return (
    <DefaultLayout>
      <HomeHeroSection />

      {/* <div className='avit-container flex flex-col justify-around pt-44 pb-24'>
        <div className='flex flex-col items-center'>
          <Icon name='delivery' className='text-primary w-[50px] h-[50px]' />
          <p>PICKUP IN 60 MIN</p>
        </div>
        <div className='flex flex-col items-center'>
          <Icon name='price' className='text-primary w-[50px] h-[50px]' />
          <p>PRICES FROM JUST PHP180</p>
        </div>
        <div className='flex flex-col items-center'>
          <Icon name='fastDelivery' className='text-primary w-[50px] h-[50px]' />
          <p>NEXT-DAY DELIVERY</p>
        </div>
      </div> */}
    </DefaultLayout>
  );
}
