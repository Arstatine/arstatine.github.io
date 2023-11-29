import { Icon } from '@iconify/react';
import { skills } from '../../constant/skills';
import { Fragment } from 'react';
const TechStack = () => {
  return (
    <div>
      <h3 className='text-xl font-medium text-center'>skills</h3>
      <h1 className='text-3xl mb-6 font-medium text-center'>Tech Stack</h1>
      {skills.map((skill) => {
        return (
          <Fragment key={skill.title}>
            <div className='mt-6 mb-6 text-xl text-center'>{skill.title}</div>
            <div className='flex gap-4 md:gap-6 flex-wrap justify-center'>
              {skill?.stack.map((stck) => {
                return (
                  <div
                    key={stck.icon}
                    className='group w-[85px] aspect-square p-4 hover:bg-slate-100 rounded-full border border-black flex justify-center items-center cursor-pointer transition-all'
                  >
                    <div className='font-semibold hidden group-hover:block text-sm transition-all p-2'>
                      {stck.name}
                    </div>
                    <Icon
                      icon={stck.icon}
                      className='w-full h-full block group-hover:hidden transition-all p-1'
                    />
                  </div>
                );
              })}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default TechStack;
