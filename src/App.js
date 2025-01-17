import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { FaLink } from 'react-icons/fa';
import emailjs from '@emailjs/browser';


function App() {

  const main = useRef(null)
  const Projects = useRef(null);
  const Skills = useRef(null);
  const Contact = useRef(null);

  // Function to scroll to a specific target element
  const scrollToTarget = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_jx4w7qn', //Service_Id
      'template_rtg1gov', //Template_ID
      form.current,
      'tlUxUJD0MUhCI8kNE' //Public_key
    )
    .then((result) => {
        console.log(result.text);
        alert("Email sent successfully!");
        form.current.reset()
    }, (error) => {
        console.log(error.text);
        alert("Failed to send email.");
    });
  };

  const sentences = [
    "Web developer. ",
    "Frontend Developer. ",
    "Backend Developer. ",
    "Coder."
  ];

  const [currentSentence, setCurrentSentence] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isDeleting) {

        if (charIndex > 0) {
          setCurrentSentence(prev => prev.slice(0, -1));
          setCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setSentenceIndex(prev => (prev + 1) % sentences.length);
        }
      } else {
        if (charIndex < sentences[sentenceIndex].length) {
          setCurrentSentence(prev => prev + sentences[sentenceIndex][charIndex]);
          setCharIndex(prev => prev + 1);
        } else {
          setIsDeleting(true);
        }
      }
    }, isDeleting ? 50 : 100); 

    return () => clearInterval(typingInterval);
  }, [charIndex, sentenceIndex, isDeleting]);


  useEffect(() => {
    if (charIndex === 0 && currentSentence === "" && isDeleting) {
      const delay = setTimeout(() => {}, 3000); 
      return () => clearTimeout(delay);
    }
  }, [charIndex, currentSentence, isDeleting]);

  return (
  <div>
    <div className = 'min-h-screen w-full bg-blue-200 ' ref = {main}>
      
      <div className='md:absolute right-28 font-semibold' >
         <button onClick={() => scrollToTarget(Projects)} className='mx-4 text-2xl my-10 text-blue-500 hover:text-red-600'>Projects</button>
         <button onClick={() => scrollToTarget(Skills)} className='mx-4 text-2xl text-blue-500 hover:text-red-600'>Skills</button>
         <button onClick={() => scrollToTarget(Contact)} className='mx-4 text-2xl text-blue-500 hover:text-red-600'>Contact me</button>
        </div>
        <h2 className='px-20 py-3 md:py-10 md:text-8xl text-bold text-4xl'>
        <i> Yash Gupta </i>
        </h2>
      <div className="relative z-10">
        <div className='md:px-32 md:py-20 px-3 '>
        <p className='md:text-4xl'>Hi user!</p>
        <p className = 'md:text-6xl text-2xl md:py-10 py-5'>I am a <span class = 'text-blue-700'>{currentSentence}</span></p>
        <div className = 'text-xl md:text-2xl font-Courier py-5'>
          I am a software developer this is my portofolio website.<br />
          Here you would embark towards my journey as a software developer.
        </div>
        </div>
        </div>
    </div>

    {/* Projects */}

    <div className='bg-gray-100' ref={Projects}>

      <h2 className='text-blue-500 text-8xl px-10 py-10 flex justify-center font-extrabold'><b>Projects</b></h2>
      
      <div className=' flex flex-wrap justify-center w-screen'>
      <img
      src = '../assets/Ecommerce-App.png'
      alt = 'E-commerce App'
      className='object-cover rounded-3xl w-55p m-4 h-auto transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-md hover:shadow-slate-700'
      />
      <div className='flex flex-col justify-evenly text-xl w-30p m-4 text-black bg-gray-300 rounded-2xl'>
          <div className='flex flex-wrap h-auto py-10 px-4'>
            <img
            src = '../assets/ReactJs.png'
            alt = 'ReactJs'
            className= 'py-2 px-2 h-20 transition-transform duration-300 ease-in-out transform hover:scale-110'/>
            <img
            src = '../assets/ExpressJs.png'
            alt = 'ExpressJs'
            className= ' py-2 px-6 h-20 transition-transform duration-300 ease-in-out transform hover:scale-110'/>
            <img
            src = '../assets/Tailwind.png'
            alt = 'Tailwind'
            className= 'py-2 px-2 h-20 transition-transform duration-300 ease-in-out transform hover:scale-110'/>
            <img
            src = '../assets/nodeJs.png'
            alt = 'nodeJs'
            className= ' px-4 py-2 h-20 transition-transform duration-300 ease-in-out transform hover:scale-110'/>
            <img
            src = '../assets/MongoDB.png'
            alt = 'MongoDB'
            className= 'py-2 px-6 h-20 transition-transform duration-300 ease-in-out transform hover:scale-110'/>
          </div>

          <p className=' w-96 px-10 font-Brush '>
          <i>Developed a responsive E-commerce website where you can buy and sell products create your own user account. Using backend through ExpressJs and frontend using ReactJs</i>
          </p>

          <div className='flex px-10 py-3'>
            <a href = 'https://github.com/yash-Devlop/Frags-1'  target="_blank" rel="noreferrer">
            <img
            src = '../assets/GithHub.png'
            alt = 'Github'
            className= 'h-16 transition-transform duration-300 ease-in-out transform hover:scale-125'
            />
            </a>
            <a href = 'https://frags-1.vercel.app/'  target="_blank" rel="noreferrer">
            <FaLink size = '70' className=' px-4 transition-transform duration-300 ease-in-out transform hover:scale-125' /> 
            </a>
        </div>
      </div>
      </div>
      
      <div className='flex flex-wrap justify-center w-screen'>
      <img
      src = '../assets/Popcorn-App.png'
      alt = 'Popcorn App'
      className='object-cover rounded-3xl w-55p m-4 h-auto transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-md hover:shadow-slate-700'
      />
      <div className='flex flex-col justify-evenly text-xl w-30p m-4 text-black bg-gray-300 rounded-2xl'>
        <div className='flex flex-wrap h-auto py-10 px-4'>
          <img
          src = '../assets/ReactJs.png'
          alt = 'ReactJs'
          className= 'py-2 px-6 h-20 transition-transform duration-300 ease-in-out transform hover:scale-110'
          />
          <img
          src = '../assets/Tailwind.png'
          alt = 'Tailwind'
          className= 'py-2 px-2 h-20 transition-transform duration-300 ease-in-out transform hover:scale-110'
          />
          <img
          src = '../assets/nodeJs.png'
          alt = 'nodeJs'
          className= ' px-8 h-20 transition-transform duration-300 ease-in-out transform hover:scale-110'
          />
        </div>
        <p className=' w-96 px-10 font-Brush '>
        <i>Developed a responsive movie trailer watching website where you can watch trailers of latest hit and releases.</i>
        </p>
        <div className='flex px-10 py-3'>
        <a href = 'https://github.com/yash-Devlop/popcorn1-main' target="_blank" rel="noreferrer">
        <img
        src = '../assets/GithHub.png'
        alt = 'Github'
        className= 'h-16 transition-transform duration-300 ease-in-out transform hover:scale-125'
        />
        </a>
        <a href = 'https://popcorn1-main.vercel.app' target="_blank" rel="noreferrer" >
        <FaLink size = '70' className=' px-4 transition-transform duration-300 ease-in-out transform hover:scale-125' /> 
        </a>
        </div>
      </div>
      </div>
    </div>

    {/* Skills */}

    <div className='' ref = {Skills}>
      <h2 className = 'text-8xl py-4 text-blue-600 flex justify-center'><b>Skills</b></h2>
      
      <div className='flex flex-col items-center'>
        <div className='p-10 text-2xl font-extralight'>
          <p className='py-6'>
            My name is <b>Yash Gupta</b>. I have completed my B.Tech from Maharishi Dayanand University in Electronics and Communication engineering in 2024.
          </p>
          <p> 
            Detail-oriented and highly motivated entry-level engineer, seeking a challenging role in Web Development and Software
            Development <b>(Full-time/Internship)</b>. Eager to apply my technical skills and passion for problem-solving to contribute to
            innovative projects and grow within a dynamic team.
          </p>
        </div>
        <div className='grid grid-cols-4 gap-10 w-auto p-4'>
        
        <img
        src = '../assets/HTML.png'
        alt = 'HTML'
        className= 'w-28 h-32 transition-transform duration-300 ease-in-out transform hover:scale-110'
        />
        <img
        src = '../assets/CSS.png'
        alt = 'CSS'
        className= 'w-28 h-32 transition-transform duration-300 ease-in-out transform hover:scale-110'
        />
        <img
        src = '../assets/JavaScript.png'
        alt = 'JavaScript'
        className= 'w-28 h-32 transition-transform duration-300 ease-in-out transform hover:scale-110'
        />
        <img
        src = '../assets/ReactJs.png'
        alt = 'ReactJs'
        className= 'w-28 h-32 transition-transform duration-300 ease-in-out transform hover:scale-110'
        />
        <img
        src = '../assets/ExpressJs.png'
        alt = 'ExpressJs'
        className= 'w-28 h-32 transition-transform duration-300 ease-in-out transform hover:scale-110'
        />
        <img
        src = '../assets/nodeJs.png'
        alt = 'nodeJs'
        className= 'w-28 h-32 transition-transform duration-300 ease-in-out transform hover:scale-110'
        />
        <img
        src = '../assets/Tailwind.png'
        alt = 'Tailwind'
        className= 'w-28 h-32 transition-transform duration-300 ease-in-out transform hover:scale-110'
        />
        <img
        src = '../assets/C++.png'
        alt = 'C++'
        className= 'w-28 h-32 transition-transform duration-300 ease-in-out transform hover:scale-110'
        />
        <img
        src = '../assets/MongoDB.png'
        alt = 'MongoDB'
        className= 'w-28 h-32 transition-transform duration-300 ease-in-out transform hover:scale-110'
        />
        <img
        src = '../assets/GithHub.png'
        alt = 'Git'
        className= 'w-28 h-32 transition-transform duration-300 ease-in-out transform hover:scale-110'
        />
        
        </div>
      </div>
    </div>

    {/* Contact */}

    <div className="container mx-auto bg-gray-500 m-10 p-20 rounded-3xl" ref={Contact}>
  <div className="mx-auto">
    <div className="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-4">

          <label className="block text-gray-800 mb-1" for="name">Your Name</label>
          <input
            className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
            placeholder="Enter your name"
            type="text"
            name="user_name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 mb-1" for="email">Your Email</label>
          <input
            class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
            placeholder="Enter your email"
            name="user_email"
            type="email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 mb-1" for="subject">Subject</label>
          <input
            class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
            placeholder="Enter your subject"
            name="subject"
            type="text"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-800 mb-1" for="message"
            >Your Message</label
          >
          <textarea
            className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
            rows="4"
            placeholder="Enter your message"
            name="message"
          ></textarea>
        </div>
        <input
          className="w-full bg-cyan-700 text-white hover:bg-cyan-500 py-2 px-4 rounded-lg transition duration-300"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  </div>
</div>

        <footer>
              <div className='bg-blue-400 md:h-32 h-96 w-full md:flex items-center'>
                  <button onClick={() => scrollToTarget(main)} className='text-black hover:text-red-600 text-6xl mx-10'><i>Yash Gupta</i></button>
                  <div className='mx-20'>
                <button onClick={() => scrollToTarget(Projects)} className='mx-4 text-2xl my-10 text-gray-800 hover:text-blue-600'>Projects</button>
                <button onClick={() => scrollToTarget(Skills)} className='mx-4 text-2xl text-gray-800 hover:text-blue-600'>Skills</button>
                <button onClick={() => scrollToTarget(Contact)} className='mx-4 text-2xl text-gray-800 hover:text-blue-600'>Contact me</button>
            </div>
            <div className='absolute right-64'>
              <div class="card">

                  <a class="social-link2" href = 'https://github.com/yash-Devlop' target='_blank' rel="noreferrer">
                    <svg viewBox="0 0 496 512" height="1em" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                      </path>
                    </svg> </a>

                  <a class="social-link4" href = 'https://linkedin.com/in/yash-gupta-1468a51b2' target='_blank' rel="noreferrer">
                    <svg fill="#fff" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                      </path>
                    </svg> </a>

              </div>    
              
            </div>
              </div>
        </footer>
  </div>
  );
}

export default App;
