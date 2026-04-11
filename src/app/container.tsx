

"use client";

import { Download , Github, Linkedin, Phone } from "lucide-react";
import { useRef } from "react";

const ContainerDemoPage = () => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const downloadPDF = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Download Button */}
      <div className="fixed top-4 right-4 z-50 print:hidden">
        <button
          onClick={downloadPDF}
          className="flex items-center gap-2 bg-primary text-black px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors shadow-lg"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </button>
      </div>

      {/* A4 Page Container */}
      <div
        ref={resumeRef}
        className="mx-auto max-w-4xl bg-white p-8 shadow-lg print:shadow-none print:p-0 print:m-0 mt-16 print:mt-0"
        style={{ height: "11in" }}
      >
        {/* Header */}
        <div className="mb-4 pb-3 border-b-2 border-primary">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-primary">
                MD. ATIKUR RAHMAN
              </h1>
              <p className="text-base text-muted-foreground font-medium">
                Full-Stack Developer
              </p>
            </div>
            <div className="text-right text-xs space-y-0.5">
              <p className="font-medium">Mirpur-6, Dhaka-1216, Bangladesh</p>
              <p>
                 {/* <Phone className="w-3 h-3 inline mr-1" /> */}
                 +880 179 183 5039 | +880 1518474541</p>
              <p>atiqurrahman.cse2552@gmail.com</p>
              <div className="flex justify-end gap-3 text-primary text-xs">
                <a href="https://www.linkedin.com/in/atiqur-cse/" target="_blank" className="hover:underline">
                  <Linkedin className="w-3 h-3 inline mr-1" />
                  LinkedIn
                </a>
                <a href="https://github.com/atiqurrahman-it" target="_blank" className="hover:underline">
                  <Github className="w-3 h-3 inline mr-1" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Objective */}
        <section className="mb-3">
          <h2 className="text-lg font-bold text-primary mb-1">
            Professional Objective
          </h2>
          <p className="text-xs text-muted-foreground leading-tight">
            Mid-Level Full-Stack Developer with about 3 years of experience building scalable web applications, leading frontend teams, and delivering secure, high-performance solutions using modern JavaScript frameworks, robust backend APIs, and cloud-based tools. Skilled at translating business requirements into clean, maintainable, production-ready code.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-3">
          <h2 className="text-lg font-bold text-primary mb-2">Skills</h2>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="font-bold text-foreground">Languages & Frameworks:</span>
              <p className="text-muted-foreground">
                JavaScript, Python, Next js ,Express js, Django
              </p>
            </div>
            <div>
              <span className="font-bold text-foreground">Frontend:</span>
              <p className="text-muted-foreground">
                 React.js, Next.js, Tailwind CSS, shadcn/ui,Daisyui,Bootstrap, Material UI, Ant Design 
              </p>
            </div>
            <div>
              <span className="font-bold text-foreground">Backend:</span>
              <p className="text-muted-foreground">
                Express js, Python, Django
              </p>
            </div>
            <div>
              <span className="font-bold text-foreground">Database:</span>
              <p className="text-muted-foreground">
                MongoDB, MySQL, PostgreSQL
              </p>
            </div>
            <div>
              <span className="font-bold text-foreground">DevOps & Tools:</span>
              <p className="text-muted-foreground">
                Docker, AWS, Hostinger, GitHub Actions,Firebase,

              
              </p>
            </div>
   
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-3">
          <h2 className="text-lg font-bold text-primary mb-2">
            Professional Experience
          </h2>

          <div className="space-y-1">
            <div className="border-l-4 border-primary pl-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-sm text-foreground">
                    Full-Stack Developer
                  </h3>
                  <p className="text-primary font-medium text-xs">
                    Arbreesolutions
                  </p>
                </div>
                <span className="text-xs text-muted-foreground bg-gray-200 px-2 py-0.5 rounded">
                  05/2023 – Present
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Mirpur DOHS ,Dhaka
                {/* Building scalable full-stack web applications using modern technologies. */}
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-3">
          <h2 className="text-lg font-bold text-primary mb-2">Projects</h2>

          <div className="space-y-1.5">
            {/* Project 1: EducateU */}

            <div className=" border-accent pl-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-sm text-foreground">
                    E-learning platforms (Planet Education Network)
                  </h3>
                  {/* <p className="text-xs text-muted-foreground">
                    E-Learning Platform
                  </p> */}
                </div>
                {/* <a 
                  href="http://35.179.130.168:5000/" 
                  className="text-accent font-medium text-xs hover:underline"
                >
                  Live →
                </a> */}
              </div>
              <p className="text-xs text-muted-foreground">
                Lead frontend development team overseeing UI implementation and
                component architecture for online course management.
              </p>
              {/* <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Next.js</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">MongoDB</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Firebase</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Payment Gateway</span>
                </div> */}
            </div>

            {/* Project 2: Church Management */}
            <div className=" border-accent pl-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-sm text-foreground">
                    Church Management System
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Website & Admin Dashboard
                  </p>
                </div>
                <a
                  href="https://rccgjesushouse.ca/"
                  target="_blank"
                  className="text-blue-400 font-medium text-xs hover:underline"
                >
                  Live →
                </a>
              </div>
              <p className="text-xs text-muted-foreground">
                Public website and admin dashboard with member management,
                authentication, and role-based access control.
              </p>
            </div>

            {/* Project 3: Aamar Pharma */}
            <div className=" border-accent pl-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-sm text-foreground">
                    Aamar Pharma
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Online Pharmacy Platform
                  </p>
                </div>
                {/* <a 
                  href="#" 
                  className="text-accent font-medium text-xs hover:underline"
                >
                  Live →
                </a> */}
              </div>
              <p className="text-xs text-muted-foreground">
               Developed an e-commerce platform for buying medicines, featuring inventory management, admin dashboard, and secure payment processing.
              </p>
            </div>

            {/* Project 4: Ebook Application */}
            <div className=" border-accent pl-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-sm text-foreground">
                    Ebook Application
                  </h3>
                  {/* <p className="text-xs text-muted-foreground">
                    Android eBook Platform
                  </p> */}
                </div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.alokdhara"
                  target="_blank"
                  className="text-blue-400 font-medium text-xs hover:underline"
                >
                  Live →
                </a>
              </div>
              <p className="text-xs text-muted-foreground">
                Created a backend API for viewing and purchasing books, with an admin panel to manage and update book inventory.
              </p>
            </div>

            {/* Project 5: Sportigy */}
            <div className=" border-accent pl-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-sm text-foreground">
                    Sportigy
                  </h3>
                  {/* <p className="text-xs text-muted-foreground">
                    Cricket Enthusiast Platform
                  </p> */}
                </div>
                {/* <a 
                  href="#" 
                  className="text-accent font-medium text-xs hover:underline"
                >
                  Live →
                </a> */}
              </div>
              <p className="text-xs text-muted-foreground">
                Lead frontend and admin panel development for a multi-sport platform, managing events, scores, and user interactions.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-3">
          <h2 className="text-lg font-bold text-primary mb-2">Education</h2>

          <div className="space-y-1 ">
            <div className=" border-primary pl-3">
              <div className="flex justify-between items-start">
                <div className="">
                  <h4 className="font-bold text-sm text-foreground">
                    Bachelor of Science in Computer Science and Engineering(B.Sc in CSE)
                  </h4>
                  <div className="flex gap-2">
                    <p className="text-primary font-medium text-xs">
                      Institute: Mohammadpur Kendriya College,
                    </p>
                    <p className="text-xs text-gray-500">
                     Mohammadpur, Dhaka-1207, Bangladesh
                    </p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground bg-gray-200 px-2 py-0.5 rounded">
                  2024 
                </span>
              </div>
            </div>
            <div className=" border-primary pl-3 mt-2">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-sm text-foreground">
                    Higher Secondary School Certificate(HSC)
                  </h4>
                  <div className="flex gap-2">
                    <p className="text-primary font-medium text-xs">
                      Institute : Sapahar govt college,
                    </p>
                    <p className="text-xs text-gray-500">
                     Sapahar, Naogaon-6540, Bangladesh
                    </p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground bg-gray-200 px-2 py-0.5 rounded">
                  2017
                </span>
              </div>
            </div>
            <div className=" border-primary pl-3 mt-2">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-sm text-foreground">
                   Secondary School Certificate(SSC)
                  </h4>
                  <div className="flex gap-2">
                    <p className="text-primary font-medium text-xs">
                      Institute : Kalmudanga High School,
                    </p>
                    <p className="text-xs text-gray-500">
                    Kalmudanga, Sapahar, Naogaon-6540, Bangladesh
                    </p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground bg-gray-200 px-2 py-0.5 rounded">
                  2015
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Languages */}
        {/* <section className="mb-3">
          <h2 className="text-lg font-bold text-primary mb-2">
            Languages
          </h2>
          
          <div className="flex gap-5 text-xs space-y-1">
            <p><span className="font-bold text-foreground">Bangla:</span> <span className="text-muted-foreground">Native</span></p>
            <p><span className="font-bold text-foreground">English:</span> <span className="text-muted-foreground">Professional</span></p>
          </div>
        </section> */}
      </div>
      <style jsx global>{`
        @media print {
          header,
          footer {
            display: none;
          }
        }
        @media print {
          body {
            background: white;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
        }
      `}</style>
    </main>
  );
};

export default ContainerDemoPage;
