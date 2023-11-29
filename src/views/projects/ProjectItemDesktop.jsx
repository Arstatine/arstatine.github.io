const ProjectItemDesktop = ({ description, live, github, alt, url, stack }) => {
  return (
    <div className='w-[100%] lg:w-[49%] px-2.5 md:px-0 cursor-pointer relative overflow-hidden group border transition-all'>
      <div className='opacity-100 lg:opacity-0 group-hover:opacity-100 absolute top-0 lg:left-[-100%] left-0 group-hover:left-0 w-full aspect-video z-[99] bg-[rgba(0,0,0,.3)] backdrop-blur hidden lg:flex justify-center items-center flex-col gap-4 transition-all duration-[500ms]'>
        <h1 className='text-white capitalize text-2xl cursor-text'>{alt}</h1>
        {description && (
          <h1 className='text-white text-lg cursor-text px-16 text-center'>
            {description}
          </h1>
        )}

        <span className='font-semibold text-white'>Made with: </span>
        <div className='flex gap-2 text-white flex-wrap'>
          {stack &&
            stack?.map((s, index) => {
              return (
                <span key={index} className='border-b-2'>
                  {s}
                </span>
              );
            })}
        </div>
        {live && (
          <a
            href={live}
            target='_blank'
            rel='noreferrer'
            className='cursor-pointer border border-white text-white hover:text-black rounded px-4 py-2  hover:bg-white transition-all'
          >
            Live Preview
          </a>
        )}
        {github && (
          <a
            href={github}
            target='_blank'
            rel='noreferrer'
            className='cursor-pointer border border-white text-white hover:text-black rounded px-4 py-2  hover:bg-white transition-all'
          >
            GitHub Repository
          </a>
        )}
      </div>
      <img className='aspect-video object-cover' src={url} />
    </div>
  );
};

export default ProjectItemDesktop;
