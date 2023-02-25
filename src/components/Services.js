import React from 'react';
//icon
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

const services = [
  {
    name: "UI/UX Design",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque tempora quia, neque corrupti nisi aut molestias nam corporis officiis ex?",
    link: "learn more"
  },
  {
    name: " Development",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque tempora quia, neque corrupti nisi aut molestias nam corporis officiis ex?",
    link: "learn more"
  },
  {
    name: "Digital Marketing",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque tempora quia, neque corrupti nisi aut molestias nam corporis officiis ex?",
    link: "learn more"
  },
  {
    name: "Product Branding",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque tempora quia, neque corrupti nisi aut molestias nam corporis officiis ex?",
    link: "learn more"
  }
]
const Services = () => {

  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-5'>
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'> i'm a Freelance Front-end Developer With over 5 years of Ecperience</h3>
            <button className='btn btm-sm px-5'>See my work</button>
            {/* text */}
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <div className=''>
              {/* services */}
              {
                services.map((service, index) => {
                  const { name, description, link } = service;
                  return (<div className='border-b boarder-white/20 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-secondary mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'><BsArrowUpRight /></a>
                      <a href="#" className=' text-gradient'>{link}</a></div>
                  </div>)
                })
              }
            </div>
          </motion.div>
        </div>

      </div>

    </section>
  );
};

export default Services;
