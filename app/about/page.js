"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="font-inter">
      <header className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4" data-aos="fade-down">About Us</h1>
          <p className="text-lg" data-aos="fade-up">Learn more about our mission, vision, and the team behind our success.</p>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0" data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className=" mb-4">Our mission is to provide the best services to our clients and ensure their success. We strive to innovate and lead in our industry.</p>
              <p className="">We believe in the power of collaboration and teamwork. Our goal is to create a positive impact on the community and the world.</p>
            </div>
            <div className="w-full lg:w-1/2 px-4" data-aos="fade-left">
              <img src="https://via.placeholder.com/600x400" alt="Mission" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Meet Our Mentors</h2>
          <div className="flex flex-wrap -mx-4">
            {mentors.map((mentor, index) => (
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8" key={index} data-aos="zoom-in">
                <div className=" rounded-lg shadow-lg overflow-hidden">
                  <img src={mentor.image} alt={mentor.name} className="w-full h-56 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{mentor.name}</h3>
                    <p className=" mb-4">{mentor.title}</p>
                    <p className="">{mentor.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className=" py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const mentors = [
  {
    name: 'John Doe',
    title: 'Senior Mentor',
    description: 'John has over 20 years of experience in the industry and has mentored hundreds of professionals.',
    image: 'https://via.placeholder.com/300x300',
  },
  {
    name: 'Jane Smith',
    title: 'Lead Mentor',
    description: 'Jane is an expert in her field and has a passion for teaching and helping others succeed.',
    image: 'https://via.placeholder.com/300x300',
  },
  {
    name: 'Sam Wilson',
    title: 'Mentor',
    description: 'Sam has a wealth of knowledge and experience, and is dedicated to guiding our clients to success.',
    image: 'https://via.placeholder.com/300x300',
  },
];


