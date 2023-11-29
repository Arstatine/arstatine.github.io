import { Icon } from '@iconify/react';
import { socials } from '../../constant/socials';

const Socials = () => {
  return (
    <div className='flex gap-3 md:gap-5 flex-wrap justify-center lg:justify-start'>
      {socials.map((social) => {
        return (
          <a
            key={social.link}
            href={social.link}
            target='_blank'
            rel='noreferrer'
            className='hover:p-2 p-2 md:p-3 transition-all bg-white hover:bg-slate-200 border border-black rounded-full w-[45px] md:w-[50px] aspect-square flex justify-center items-center'
          >
            <Icon icon={social.icon} className='w-full h-full' />
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
