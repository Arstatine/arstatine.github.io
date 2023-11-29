import Resume from '../../assets/Xenon_Vergara_Resume.pdf';
import AVATAR2 from '../../assets/person-bg-2.png';
import { education, experience } from '../../constant/about';

const About = () => {
  return (
    <section className='flex justify-center items-center flex-col px-5 lg:px-0  mt-[30px]'>
      <div className='container flex justify-center items-center flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2 flex justify-center items-center flex-col pb-4'>
          <div>
            <img
              src={AVATAR2}
              alt=''
              className='w-[350px] min-w-full md:min-w-[350px] aspect-square rounded-full p-2 lg:p-6 transition-all'
            />
          </div>
          <div className='mt-4 flex items-center flex-col'>
            <h1 className='text-4xl font-semibold mb-4'>Education</h1>
            {education.map((educ, index) => {
              return (
                <div key={index} className='text-center mb-8'>
                  {educ.school && (
                    <p className='text-2xl font-medium'>{educ.school}</p>
                  )}
                  {educ.course && <p className='text-lg mt-2'>{educ.course}</p>}
                  {educ.major && <p className='text-lg mb-2'>{educ.major}</p>}
                  {educ.date && <p className='text-medium mb-2'>{educ.date}</p>}
                  {educ.achievements && (
                    <div className='flex gap-5 flex-wrap justify-center'>
                      {educ.achievements.map((achievement, index) => {
                        return (
                          <div
                            key={index}
                            className='px-4 py-2 border border-black rounded hover:bg-slate-100 '
                          >
                            {achievement}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            <h1 className='text-4xl font-semibold my-4'>Experience</h1>
            {experience.map((exp, index) => {
              return (
                <div key={index} className='text-center mb-8'>
                  {exp.company && (
                    <p className='text-2xl font-medium'>{exp.company}</p>
                  )}
                  {exp.role && <p className='text-lg my-2'>{exp.role}</p>}
                  {exp.date && <p className='text-medium'>{exp.date}</p>}
                </div>
              );
            })}

            <div className='text-center flex justify-center items-center flex-col pb-4'>
              <p className='mb-2 tracking-wider'>Download:</p>
              <a
                href={Resume}
                download={true}
                className='px-4 py-2 rounded border border-black hover:bg-slate-100'
              >
                Resume/CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
