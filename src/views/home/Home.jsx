import AVATAR from '../../assets/person-bg.png';
import Socials from './Socials';

const Home = () => {
  return (
    <section className='flex justify-center items-center flex-col px-5 lg:px-0  mt-[30px]'>
      <div className='container flex justify-center items-center flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2 flex justify-center items-center flex-col pb-4'>
          <div>
            <img
              src={AVATAR}
              alt='profile'
              loading='lazy'
              className='w-[350px] min-w-full md:min-w-[350px] aspect-square rounded-full p-2 lg:p-6 transition-all'
            />
          </div>
          <div className='flex justify-center items-center flex-col'>
            <h1 className='text-2xl lg:text-3xl text-center font-medium mt-4'>
              Xenon Vergara
            </h1>
            <h3 className='text-lg lg:text-xl mb-2 text-center'>Developer</h3>
            <p className='first-letter:text-4xl text-medium lg:text-lg text-justify mb-6 w-full lg:w-[80%] trancking-wide lg:tracking-widest'>
              Hello, I&apos;m Xenon Vergara a web developer with a strong
              passion for creating visually stunning and functional websites.
              Attention to detail, ability to deliver projects on time, and
              excellent communication skills are my expertise. Whether you are
              looking to create a new website from scratch or need to update an
              existing one, I have the skills and experience to bring your
              vision to life.
            </p>
          </div>
          <Socials />
        </div>
      </div>
    </section>
  );
};

export default Home;
