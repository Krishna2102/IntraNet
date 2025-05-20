import React from 'react';
import Navbar from './Navbar';
import Footer from './footer';

const Aboutus = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-8">
        {/* Vision */}
        <div>
          <h2 className="text-3xl font-bold text-violet-800 mb-6">Vision</h2>
          <p className="text-xl text-black mb-6">
            The vision of Department of Mathematical And Computational Sciences (MACS) is to develop and maintain overall academic excellence in the educational and research activities carried out.
          </p>
        </div>

        {/* Mission with image side-by-side */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Text Side */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-violet-800 mb-4">Mission</h2>
            <p className="text-black mb-2 text-xl">The mission of the department includes:</p>
            <ul className="list-decimal text-lg text-justify list-inside text-black mb-6 space-y-1">
              <li>To impart the best quality education in Mathematical Fundamentals to all the Engineering Students of the institute.</li>
              <li>To produce high quality professionals to meet the needs of software industry through the PG programs. To engage in R&D work in the frontier areas of Mathematical and Computational Sciences.</li>
            <li>To foster interdisciplinary research and promote collaborations with academia and industry for innovative solutions to real-world problems.</li>
            </ul>
          </div>

          {/* Image Side */}
          <div className="flex-1">
            <img
              src="https://macs.nitk.ac.in/sites/default/files/field/image/macsdep.jpg"
              alt="Department Building"
              className="rounded shadow-md"
            />
          </div>
        </div>

        {/* About the Department */}
        <div>
          <h2 className="text-3xl font-bold text-violet-800 mb-4">About the Department</h2>
          <p className="text-black text-lg text-justify">
            The Department of Mathematics (today called, the Department of Mathematical and Computational Sciences) started along with the institute (1960). The Department of Mathematical and Computational Sciences, formerly known as Department of Mathematics, is one of the oldest departments of NITK. The department initially catered to the needs of the UG and PG Engineering Mathematics and subsequently, in 1988-89, introduced two PG programmes, namely, the <strong>Master of Computer Applications (MCA)</strong> and Master of Technology (M.Tech.) Computational Mathematics (CMA) (earlier named Master of Technology (M.Tech.) in Systems Analysis and Computer Applications).
          </p>
          <p className="text-black text-lg mt-2 text-justify">
            The PG programme, Master of Technology (M.Tech.) in Computational Mathematics (CMA) is replaced with <strong>Master of Technology (M.Tech.) in Computational and Data Science (CDS)</strong> since 2019. A new UG programme, <strong>Bachelor of Technology (B.Tech.) in Computational and Data Science (CDS)</strong> has commenced from the year 2022.
          </p>
        </div>
      </section>

      {/* Optional Banner Image */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <img
          src="https://macs.nitk.ac.in/sites/default/files/Dept_Faculty.jpg"
          alt="MACS Department Banner"
          className="rounded shadow-md"
        />
      </div>
    <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-8">
      <div>
         <p className="text-black text-lg text-justify">
             MACS Department is known for its variety of courses in the areas of Algebra, Analysis, Applied Mathematics and Statistics. It not only caters to the needs of the other 13 departments of NITK but also offers its own master’s program in computer applications and computational mathematics. People from across the country come and enroll to the PhD program with faculties having expertise in the areas of Computational Systems, Nonlinear Analysis, Functional Analysis, Real Analysis, Number Theory & Cryptography, Numerical Analysis, Graph Theory, Optimization, Fluid Dynamics, Computer applications, Image  processing and many more. The strength of department lies in the blend of 31 (24 Full Time+ 7 on contract) faculty members in not only pure and applied areas of mathematics and statistics but also in the area of computer science (hence the name Computational Sciences) ably supported by 2 Technical Officers and 8 non-teaching staff.          </p>
          <p className="text-black text-lg mt-2 text-justify">
            A department can be assessed in terms of research and development by seeing number of Research Scholars / PhD students enrolled to the PhD program. Currently, 44 full-time research scholars and many part-time research scholars are working in frontier areas of mathematics, statistics and computer science. Furthermore, the department offers various elective courses to the requirement of other departments such as Number Theory & Cryptography, Probability Theory, Linear Algebra, Optimization Techniques, Random Processes, Computer Networks and such others.          </p>
      <p className="text-black text-lg mt-2 text-justify">
        Department of MACS was recognized as Study Centre for MCA and BCA Programmes of Indira Gandhi National Open University (IGNOU) in 1999. 

      </p>
      </div>
    </section>
      <Footer />
    </div>
  );
};

export default Aboutus;
