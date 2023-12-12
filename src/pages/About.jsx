import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills, loves } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Dear my beautiful little princess{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Phuong Lien
        </span>{" "}
        🌹
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
            I found a love, for me
            <br/>
            Darling, just dive right in and follow my lead
            <br/>
            Well, I found a girl, beautiful and sweet
            <br/>
            Oh, I never knew you were the someone waiting for me
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Galleries</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {loves.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className=' object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
