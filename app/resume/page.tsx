import { cn } from '@/lib/utils';
import Link from 'next/link';
import { experiences, skills } from '@/app/resume/data/resume-data';

const SubTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h4
      className={cn(
        'md:text-[20px] text-lg tracking-[8px] font-bold mb-5',
        className,
      )}
    >
      {title}
    </h4>
  );
};

export default async function Page() {
  return (
    <div
      className={cn(
        'noBreak',
        'w-full h-full',
        'md:py-6 md:px-16 p-4',
        'md:border border-sub',
      )}
    >
      <div
        className={cn(
          'grid md:grid-cols-5 w-full md:gap-15 gap-10',
          'md:h-full',
        )}
      >
        <div
          className={cn(
            'md:col-span-2 flex flex-col justify-between',
            'md:max-h-full max-h-[350px] md:py-6',
          )}
        >
          <span className="font-extrabold text-6xl leading-tight">{`<`}</span>
          <div>
            <h2
              className={cn(
                'md:m-0 my-4',
                'font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight',
                'md:text-start text-center',
              )}
            >
              YING YU, <br className="md:block hidden" />
              CHENG
            </h2>
            <h3
              className={cn(
                'my-2',
                'font-extrabold text-xl md:text-2xl lg:text-3xl leading-tight',
                'md:text-start text-center',
              )}
            >
              Front End
              <br className="md:block hidden" />
              Developer
            </h3>
            <section className="md:block hidden">
              <SubTitle title="/ ABOUT ME" className="mt-10" />
              <p className="font-semibold">
                Hi, I’m Yui. A Front-End Developer with 4 years of experience
                building and maintaining responsive websites in the marketing
                consulting industry. Passionate about creating innovative and
                engaging projects.
              </p>
            </section>
          </div>
          <p
            className={cn(
              'md:text-start text-end',
              'font-extrabold text-6xl leading-tight',
            )}
          >{`/>`}</p>
        </div>
        <div className="md:col-span-3 flex flex-col md:gap-y-18 gap-y-12">
          <section className="md:hidden block">
            <SubTitle title="/ ABOUT ME" />
            <p className="md:text-base text-sm font-semibold">
              Hi, I’m Yui. A Front-End Developer with 4 years of experience
              building and maintaining responsive websites in the marketing
              consulting industry. Passionate about creating innovative and
              engaging projects.
            </p>
          </section>
          <section>
            <SubTitle title="/ CONTACT DETAILS" />
            <p className="font-semibold mb-4">Taipei, Taiwan</p>
            <div className="mb-4">
              <p className="flex items-center gap-2 font-semibold">
                {`>>`}
                <Link
                  href={`mailto:yuice1006@gmail.com`}
                  target="_blank"
                  className="text-sub"
                >
                  yuice1006@gmail.com
                </Link>
              </p>
              <p className="flex items-center gap-2 font-semibold">
                {`>>`}
                <Link
                  href="https://yuuuuuui.com"
                  target="_blank"
                  className="text-sub"
                >
                  https://yuuuuuui.com
                </Link>
              </p>
            </div>
            <p className="font-semibold">Mobile No. (+886) 0933596919</p>
          </section>
          <section>
            {experiences?.map((experience, idx) => (
              <div key={idx}>
                <SubTitle title="/ WORK EXPERIENCE" />
                <p className="md:text-lg font-semibold mb-4">{`>> ${experience.role}`}</p>
                <p className="md:text-lg font-semibold mb-4">
                  {experience.company} | {experience.duration}
                </p>
                <ul className="pl-4">
                  {experience.details.map((detail, index) => (
                    <li
                      className={cn(
                        'md:text-base text-sm font-semibold',
                        '-indent-[1em] mb-2',
                      )}
                      key={index}
                    >
                      {`> ${detail}`}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <section>
            <SubTitle title="/ Skills" />
            <div className="grid md:grid-cols-2 gap-6">
              {skills?.map((skill, index) => (
                <div className="col-span-1" key={index}>
                  <p className="text-lg font-semibold mb-4">{`>>  ${skill.category}`}</p>
                  <ul>
                    {skill.items.map((item, idx) => (
                      <li className="font-semibold mb-4" key={idx}>
                        {`${item}`}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          <section>
            <SubTitle title="/ Education" />
            <p className="text-lg font-semibold">{`> Wenzao Ursuline University of Languages`}</p>
            <p className="font-semibold ml-4 mb-4">Department of Japanese</p>
          </section>
        </div>
      </div>
    </div>
  );
}
