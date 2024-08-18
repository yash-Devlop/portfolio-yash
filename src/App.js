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
    <div className = ' h-16 min-h-screen w-full bg-blue-200' ref = {main}>
      
      <div className='md:absolute right-64'>
         <button onClick={() => scrollToTarget(Projects)} className='mx-4 text-2xl my-10 text-blue-500 hover:text-red-600'>Projects</button>
         <button onClick={() => scrollToTarget(Skills)} className='mx-4 text-2xl text-blue-500 hover:text-red-600'>Skills</button>
         <button onClick={() => scrollToTarget(Contact)} className='mx-4 text-2xl text-blue-500 hover:text-red-600'>Contact me</button>
        </div>
        <h2 className='px-20 py-5 md:py-10 md:text-8xl text-bold text-4xl'>
        <i> Yash Gupta </i>
        </h2>
      {/* <div className="cloud cloud1"></div>
      <div className="clonpm ud cloud2"></div>
      <div className="cloud cloud3"></div> */}
      <div className="relative z-10">
        <div className='md:px-32 md:py-20 px-3 '>
        <p className='md:text-4xl'>Hi user!</p>
        <p className = 'md:text-6xl text-2xl md:py-10 py-5'>I am a <span class = 'text-blue-700'>{currentSentence}</span></p>
        <div className = 'text-2xl font-Courier'>
          I am a software developer this is my portofolio website.
          </div><div className = 'md:text-2xl font-Courier'>
          Here you would embark towards my journey as a software developer.
        </div>
        </div>
        </div>
    </div>

    {/* Projects */}

    <div className='bg-gray-100 overflow-x-auto ' ref={Projects}>
      <h2 className='text-blue-500 text-8xl px-10 py-10 flex justify-center'><b>Projects</b></h2>
      
      <div className=' flex  w-60p py-10 mx-32'>
      <img
      src = '../assets/Ecommerce-App.png'
      alt = 'E-commerce App'
      className='  object-cover rounded-3xl w-auto transition-transform duration-300 ease-in-out transform hover:scale-105'
      />
      <div className=' text-xl w-auto text-black bg-gray-300 rounded-2xl mx-4'>
        <div className='flex flex-wrap h-auto py-10 px-4'>
          <img
          src = '../assets/ReactJs.png'
          alt = 'ReactJs'
          className= 'py-2 px-2 h-20 transition-transform duration-300 ease-in-out transform hover:scale-110'
          />
          <img
          src = '../assets/ExpressJs.png'
          alt = 'ExpressJs'
          className= ' py-2 px-6 h-20 transition-transform duration-300 ease-in-out transform hover:scale-110'
          />
          <img
          src = '../assets/Tailwind.png'
          alt = 'Tailwind'
          className= 'py-2 px-2 h-20 transition-transform duration-300 ease-in-out transform hover:scale-110'
          />
          <img
          src = '../assets/nodeJs.png'
          alt = 'nodeJs'
          className= ' px-4 py-2 h-28 transition-transform duration-300 ease-in-out transform hover:scale-110'
          />
          <img
          src = '../assets/MongoDB.png'
          alt = 'MongoDB'
          className= 'py-2 px-6 h-24 transition-transform duration-300 ease-in-out transform hover:scale-110'
          />
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
      
      <div className='flex md:w-60p w-auto py-10 mx-32'>
      <img
      src = '../assets/Popcorn-App.png'
      alt = 'Popcorn App'
      className='object-cover rounded-3xl transition-transform duration-300 ease-in-out transform hover:scale-105'
      />
      <div className=' text-xl w-auto text-black bg-gray-300 rounded-2xl mx-4 '>
        <div className='flex flex-wrap h-auto py-10 px-4'>
          <img
          src = '../assets/ReactJs.png'
          alt = 'ReactJs'
          className= 'py-2 px-6 h-28 transition-transform duration-300 ease-in-out transform hover:scale-110'
          />
          <img
          src = '../assets/Tailwind.png'
          alt = 'Tailwind'
          className= ' px-2 my-6 h-20 transition-transform duration-300 ease-in-out transform hover:scale-110'
          />
          <img
          src = '../assets/nodeJs.png'
          alt = 'nodeJs'
          className= ' px-8 h-28 transition-transform duration-300 ease-in-out transform hover:scale-110'
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
      
      <div className='flex'>
        <div className='w-40p mx-6 my-4 text-xl font-Courier'>
          <p className='py-10'>
            My name is <b>Yash Gupta</b>. I have completed my B.Tech from Maharishi Dayanand University in Electronics and Communication engineering in 2024.
          </p>
          <p> 
            Detail-oriented and highly motivated entry-level engineer, seeking a challenging role in Web Development and Software
            Development <b>(Full-time/Internship)</b>. Eager to apply my technical skills and passion for problem-solving to contribute to
            innovative projects and grow within a dynamic team.
          </p>
        </div>
        <div className='w-1/2 flex flex-wrap my-10 mx-20'>
        
        <img
        src = '../assets/HTML.png'
        alt = 'HTML'
        className= 'h-32 px-6 transition-transform duration-300 ease-in-out transform hover:scale-110'
        />
        <img
        src = '../assets/CSS.png'
        alt = 'CSS'
        className= 'h-32 px-6 transition-transform duration-300 ease-in-out transform hover:scale-110'
        />
        <img
        src = '../assets/JavaScript.png'
        alt = 'JavaScript'
        className= 'h-32 px-6 transition-transform duration-300 ease-in-out transform hover:scale-110'
        />
        <img
        src = '../assets/ReactJs.png'
        alt = 'ReactJs'
        className= 'h-32 px-6 transition-transform duration-300 ease-in-out transform hover:scale-110'
        />
        <img
        src = '../assets/ExpressJs.png'
        alt = 'ExpressJs'
        className= 'h-32 px-6 transition-transform duration-300 ease-in-out transform hover:scale-110'
        />
        <img
        src = '../assets/nodeJs.png'
        alt = 'nodeJs'
        className= 'h-32 w-40 bg-cover px-4 my-4 transition-transform duration-300 ease-in-out transform hover:scale-110'
        />
        <img
        src = '../assets/Tailwind.png'
        alt = 'Tailwind'
        className= 'h-20 w-40 bg-cover px-6 my-8 transition-transform duration-300 ease-in-out transform hover:scale-110'
        />
        <img
        src = '../assets/C++.png'
        alt = 'C++'
        className= 'h-36 w-40 bg-cover mx-4 px-6 py-4 transition-transform duration-300 ease-in-out transform hover:scale-110'
        />
        <img
        src = '../assets/MongoDB.png'
        alt = 'MongoDB'
        className= 'h-32 px-10 my-4 transition-transform duration-300 ease-in-out transform hover:scale-110'
        />
        <img
        src = '../assets/GithHub.png'
        alt = 'Git'
        className= 'h-32 my-4 px-10 transition-transform duration-300 ease-in-out transform hover:scale-110'
        />
        
        </div>
      </div>
    </div>

    {/* Contact */}

        <div className='bg-blue-800' ref = {Contact} >
        <h2 className='text-8xl flex justify-center text-white py-5'><b>Contact me</b></h2>
      <div className='flex justify-center w-auto'>
        <form ref={form} onSubmit={sendEmail} className='bg-blue-400 h-auto my-10 rounded'>

      <input type="text" name="user_name" placeholder='Your Name' required className = ' my-4 mx-10 mt-10 px-10 w-800p text-xl' /> <br />
      
      <input type="email" name="user_email" placeholder='Your Email' required className = 'my-4 mx-10 px-10 w-800p text-xl rounded' /> <br />

      <input type="text" name="subject" placeholder='Subject' required className = 'my-4 mx-10 px-10 w-800p text-xl rounded' /> <br />
      
      <textarea name="message" placeholder='Message' required className='my-4 mx-10 px-10 h-64 w-800p text-xl rounded'/> <br />
      
      <input type="submit" value="Message" className='my-4 mx-10 w-64 h-12 text-white text-2xl rounded transition-transform duration-300 ease-in-out transform hover:scale-105 submitBTN' />
    </form>
    </div>
        {/* <button className='bg-white mx-10 text-2xl px-10 py-4 rounded shadow-md'>Submit</button> */}
        </div>

        <footer>
          <div className='bg-gray-800 md:h-32 h-auto w-full md:flex items-center '>
              {/* <h2 className='text-white text-6xl mx-10'><i>Yash Gupta</i></h2> */}
              <button onClick={() => scrollToTarget(main)} className='text-white hover:text-red-600 text-6xl mx-10'><i>Yash Gupta</i></button>
              <div className='mx-20'>
         <button onClick={() => scrollToTarget(Projects)} className='mx-4 text-2xl my-10 text-orange-500 hover:text-blue-600'>Projects</button>
         <button onClick={() => scrollToTarget(Skills)} className='mx-4 text-2xl text-orange-500 hover:text-blue-600'>Skills</button>
         <button onClick={() => scrollToTarget(Contact)} className='mx-4 text-2xl text-orange-500 hover:text-blue-600'>Contact me</button>
        </div>
        <div className='absolute right-64'>
          <h3 className='text-white text-xl '>Socials</h3>
          <div className='flex'>
          <a href = 'https://github.com/yash-Devlop' target='_blank' rel="noreferrer"><img src = '../assets/githHub.png' alt = 'gitHub' className='object-cover h-8 w-8 mx-1 my-3' /></a>
          <a href = 'https://linkedin.com/in/yash-gupta-1468a51b2' target='_blank' rel="noreferrer"><img src = '../assets/LinkedIn.png' alt = 'LinkedIn' className='object-cover h-7 w-7 mx-1 my-3' /></a>
          </div>
          
        </div>
          </div>
        </footer>
  </div>
  );
}

export default App;
