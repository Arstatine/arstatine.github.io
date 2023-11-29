import TechStack from './TechStack';

const Skills = () => {
  return (
    <section className='flex justify-center items-center flex-col px-5 lg:px-0 mt-[30px]'>
      <div className='container flex justify-center items-center flex-col lg:flex-row '>
        <div className='w-full lg:w-1/2 mt-6 lg:mt-0 p-2 lg:p-6 pb-6'>
          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default Skills;
