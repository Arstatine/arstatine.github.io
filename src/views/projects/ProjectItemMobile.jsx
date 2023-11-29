const ProjectItemMobile = ({
  description,
  live,
  github,
  alt,
  stack: stack,
}) => {
  return (
    <div className='opacity-100 lg:opacity-0 w-full z-[99] flex lg:hidden justify-center items-center gap-4 transition-all duration-[500ms] flex-col'>
      <h1 className='text-black capitalize text-xl cursor-text'>{alt}</h1>
      {description && (
        <h1 className='text-black text-medium cursor-text px-16 text-center'>
          {description}
        </h1>
      )}
      <span className='font-semibold text-black '>Made with: </span>
      <div className='flex gap-2 text-black flex-wrap justify-center'>
        {stack &&
          stack?.map((s, index) => {
            return (
              <span key={index} className='border-b-2 border-black'>
                {s}
              </span>
            );
          })}
      </div>
      <div className='flex gap-4 flex-col md:flex-row'>
        {live && (
          <a
            href={live}
            target='_blank'
            rel='noreferrer'
            className='cursor-pointer text-center border border-black text-black text-medium rounded px-4 py-2'
          >
            Live Preview
          </a>
        )}
        {github && (
          <a
            href={github}
            target='_blank'
            rel='noreferrer'
            className='cursor-pointer text-center border border-black text-black text-medium rounded px-4 py-2'
          >
            GitHub Repository
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectItemMobile;
