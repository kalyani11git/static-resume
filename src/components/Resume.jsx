import React from "react";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const Resume = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg w-11/12 md:w-3/4 lg:w-2/3 p-8 border-t-4 border-gray-500">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800">KALYANI MALI</h1>
          <p className="text-lg text-gray-700 font-semibold mb-2">Student of Computer Engineering</p>
          <div className="text-gray-600 flex justify-center items-center space-x-4">
            <p>
              <FaEnvelope className="inline text-gray-500 mr-1" /> kalyanikmali11@gmail.com
            </p>
            <p>
              <FaPhone className="inline text-green-500 mr-1" /> +91 8080004856
            </p>
          </div>
        </div>

        {/* Summary Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-1 mb-2">
            Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Motivated computer engineer with a strong background in designing and implementing efficient systems. Demonstrates expertise in backend development, secure authentication, and data management. Dedicated to using technical skills and problem-solving abilities to drive organizational success.
          </p>
        </section>

        {/* Education Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-1 mb-2">
            Education
          </h2>
          <ul className="text-gray-700 space-y-4">
            <li>
              <strong className="text-gray-800">Bachelor’s of Technology in Computer Engineering</strong> <br />
              <span className="text-sm text-gray-500">R. C. PATEL INSTITUTE OF TECHNOLOGY, Shirpur, IN</span> <br />
              <span className="text-sm text-gray-500">June 2025 | Current GPA: 8.14</span>
            </li>
            <li>
              <strong className="text-gray-800">Diploma in Information Technology</strong> <br />
              <span className="text-sm text-gray-500">GOVERNMENT POLYTECHNIC NASHIK, Nashik, IN</span> <br />
              <span className="text-sm text-gray-500">2019 - 2022 | Percentage: 88.88%</span>
            </li>
            <li>
              <strong className="text-gray-800">10th Maharashtra State Board</strong> <br />
              <span className="text-sm text-gray-500">ADARSH MADHYAMIK VIDHYALAY, Shirpur, IN</span> <br />
              <span className="text-sm text-gray-500">June 2019 | Percentage: 90.80%</span>
            </li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-1 mb-2">
            Projects
          </h2>
          <ul className="text-gray-700 space-y-4">
            <li>
              <strong className="text-gray-800">Professional Service Provider</strong> <br />
              <span className="text-sm text-gray-500">Java, Spring, MySQL</span> <br />
              <p className="mt-1">Developed a system with Admin, Service Provider, and User modules, implementing Spring features like JPA and Hibernate for seamless data handling.</p>
            </li>
            <li>
              <strong className="text-gray-800">E-commerce Website</strong> <br />
              <span className="text-sm text-gray-500">React, Tailwind</span> <br />
              <p className="mt-1">Built an e-commerce site integrating APIs for dynamic data fetching and used React-Redux for state management.</p>
            </li>
            <li>
              <strong className="text-gray-800">OrnaVesta</strong> <br />
              <span className="text-sm text-gray-500">React, Spring Boot, MongoDB</span> <br />
              <p className="mt-1">Created a web app with event management features, secure authentication, and seamless data interaction using Spring Security and MongoDB.</p>
            </li>
          </ul>
        </section>

        {/* Skills Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-1 mb-2">
            Key Skills
          </h2>
          <ul className="text-gray-700 grid grid-cols-2 gap-4">
            <li className="flex items-center">
              <span className="bg-gray-500 text-white rounded-full w-4 h-4 flex justify-center items-center mr-2">✔</span>
              Full Stack Web Development
            </li>
            <li className="flex items-center">
              <span className="bg-gray-500 text-white rounded-full w-4 h-4 flex justify-center items-center mr-2">✔</span>
              Java
            </li>
            <li className="flex items-center">
              <span className="bg-gray-500 text-white rounded-full w-4 h-4 flex justify-center items-center mr-2">✔</span>
              Spring Boot
            </li>
            <li className="flex items-center">
              <span className="bg-gray-500 text-white rounded-full w-4 h-4 flex justify-center items-center mr-2">✔</span>
              React.js
            </li>
            <li className="flex items-center">
              <span className="bg-gray-500 text-white rounded-full w-4 h-4 flex justify-center items-center mr-2">✔</span>
              Tailwind CSS
            </li>
            <li className="flex items-center">
              <span className="bg-gray-500 text-white rounded-full w-4 h-4 flex justify-center items-center mr-2">✔</span>
              MySQL
            </li>
          </ul>
        </section>

        {/* Certifications Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-1 mb-2">
            Certifications
          </h2>
          <ul className="text-gray-700 space-y-2">
            <li>
              Zensar ESDP Program | 2 months
            </li>
            <li>
                TCS CodeVita Certificate | Global Rank: 4865
            </li>
            <li>
               Python Fundamentals for Beginners | Great Learning
            </li>
            <li>
               Google Cloud Computing Foundational Course
            </li>
          </ul>
        </section>

        {/* Footer Section */}
        <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-1 mb-2">
            Languages
          </h2>
        <div className="text-gray-700 text-md mt-6 mb-2">
          <p>Marathi, Hindi, English | Interests: Singing</p>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-1 mb-2">
            Links
          </h2>
          <div className="flex space-x-4 mt-2">
            <a href="https://github.com/kalyani11git" className="text-gray-600 hover:text-gray-800">
              <FaGithub className="inline text-xl" />https://github.com/kalyani11git
            </a>
            <a href="https://linkedin.com/in/kalyani-mali11" className="text-gray-600 hover:text-gray-800">
              <FaLinkedin className="inline text-xl" />https://linkedin.com/in/kalyani-mali11
            </a>
          </div>
        
      </div>
    </div>
  );
};

export default Resume;
