import ProjectList from './ProjectList';

const Projects = () => {
  return (
    <section className='flex justify-center items-center flex-col px-5 lg:px-0 mt-[30px]'>
      <div className='container flex justify-center items-center flex-col lg:flex-row '>
        <ProjectList />
      </div>
    </section>
  );
};

export default Projects;
