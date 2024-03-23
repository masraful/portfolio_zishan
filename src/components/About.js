import React from 'react';
import img from '../assets/about.png'
// count up
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion'
// variant
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          {/* <div className='flex-1 bg-about bg-contain '></div> */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-contain bg-no-repeat h-[640] mix-blend-lighten bg-top'>
            <img src={img} alt="" />
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <h2 className='h2 text-accent'>About me</h2>
            <h3 className='h3 mb-4'>A curious programmer, web developer, traveller, guitarist and music lover.

            </h3>
            <p className='mb-6'>I am a curious knowledge seeker. I am very much interested in web Development. I am a hard-working person and also a good learner.Recently I work with Javascript and learning MERN Development. I can work under pressure. I want to be a successful web developer.

            </p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ? <CountUp start={0} end={2} duration={3} /> : null
                  }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ? <CountUp start={0} end={15} duration={3} /> : null
                  }
                  K+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Project <br />Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ? <CountUp start={0} end={12} duration={3} /> : null
                  }
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  satisfied <br />Clients
                </div>
              </div>

            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'><a href="www.linkedin.com/in/masraful-zishan">Contact me</a></button>
              <a href="#" className='text-gradient btn-link'> My Portfolio</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default About;
