import { Fragment, useState } from 'react';
import { imageGallery } from '../../constant/projects';
import { count } from '../../components/navbar/NavbarMenuList';
import ProjectItemMobile from './ProjectItemMobile';
import ProjectItemDesktop from './ProjectItemDesktop';

const ProjectList = () => {
  const imagePerRow = 2;
  const [next, setNext] = useState(count.value);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
    count.value = next + imagePerRow;
  };

  const handleLessImage = () => {
    setNext(imagePerRow);
    count.value = imagePerRow;
  };

  return (
    <div className='w-full mt-6 lg:mt-0 p-2 lg:p-6'>
      <h3 className='text-xl font-medium text-center'>projects</h3>
      <h1 className='text-3xl mb-6 font-medium text-center'>Creative Works</h1>
      <div className='gap-4 flex flex-wrap justify-center items-center'>
        {imageGallery?.slice(0, next)?.map((image, index) => {
          return (
            <Fragment key={index}>
              <ProjectItemDesktop
                description={image?.description}
                live={image?.live}
                github={image?.github}
                alt={image?.alt}
                url={image?.url}
                stack={image?.stack}
              />
              <ProjectItemMobile
                description={image?.description}
                live={image?.live}
                github={image?.github}
                alt={image?.alt}
                stack={image?.stack}
              />
            </Fragment>
          );
        })}
      </div>
      {next < imageGallery?.length ? (
        <div className='flex justify-center mb-6'>
          <div
            className='mt-4 cursor-pointer border border-black rounded px-4 py-2 hover:bg-slate-100'
            onClick={handleMoreImage}
          >
            Show more
          </div>
        </div>
      ) : (
        <div className='flex justify-center mb-6'>
          <div
            className='mt-4 cursor-pointer border border-black rounded px-4 py-2 hover:bg-slate-100'
            onClick={handleLessImage}
          >
            Show less
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
