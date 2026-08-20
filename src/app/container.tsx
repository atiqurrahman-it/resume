"use client";

import { Download, Github, Linkedin } from "lucide-react";
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
            <div className="text-right text-xs space-y-1">
              <p className="font-medium">Mirpur-6, Dhaka-1216, Bangladesh</p>
              <p>
                {/* <Phone className="w-3 h-3 inline mr-1" /> */}
                +880 179 183 5039 | +880 1518474541
              </p>
              <p>atiqurrahman.cse2552@gmail.com</p>
              <p>
                <Linkedin className="w-3 h-3 inline mr-1" />
                <a
                  href="https://www.linkedin.com/in/atiqur-cse/"
                  target="_blank"
                  className="hover:underline"
                >
                  linkedin.com/in/atiqur-cse
                </a>
              </p>
              <p>
                <Github className="w-3 h-3 inline mr-1" />
                <a
                  href="https://github.com/atiqurrahman-it"
                  target="_blank"
                  className="hover:underline"
                >
                  github.com/atiqurrahman-it
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Professional Objective */}
        <section className="mb-3">
          <h2 className="text-lg font-bold text-primary mb-1">
            Professional Summary
          </h2>
          <p className="text-xs text-muted-foreground leading-tight">
            Full-Stack Developer with 3+ years of experience building scalable
            web applications and internal tools. Skilled in translating business
            requirements into clean, maintainable, and production-ready
            solutions across frontend and backend development. Experienced in
            developing responsive web interfaces, backend services, and
            database-driven applications while focusing on performance,
            security, and reliability.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-3">
          <h2 className="text-lg font-bold text-primary mb-2">Skills</h2>

          <div className="space-y-2 text-xs">
            <div>
              <span className="font-bold text-foreground">Languages:</span>
              <p className="text-muted-foreground">
                JavaScript (ES6+), TypeScript, Python, Object-Oriented
                Programming (OOP)
              </p>
            </div>
            <div>
              <span className="font-bold text-foreground">Frontend:</span>
              <p className="text-muted-foreground">
                React.js, Next.js, Tailwind CSS, Shadcn/ui, Bootstrap, Material
                UI, Ant Design, DaisyUI
              </p>
            </div>
            <div>
              <span className="font-bold text-foreground">
                State Management & Data Fetching:
              </span>
              <p className="text-muted-foreground">
                Redux, Zustand, TanStack Query, Zod
              </p>
            </div>
            <div>
              <span className="font-bold text-foreground">Backend:</span>
              <p className="text-muted-foreground">
                Node.js, Express.js, NestJS, REST APIs
              </p>
            </div>
            <div>
              <span className="font-bold text-foreground">Database:</span>
              <p className="text-muted-foreground">
                MongoDB, MySQL, PostgreSQL
              </p>
            </div>
            <div>
              <span className="font-bold text-foreground">
                Database, Cloud & Tools:
              </span>
              <p className="text-muted-foreground">
                Docker, Amazon AWS (EC2,S3), GitHub Actions, CI/CD, Firebase,
                Hostinger, Stripe, SSLCommerz, Jest, AI-Assisted Development
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
                  {/* <h3 className="font-bold text-sm text-foreground">
                    Full-Stack Developer
                  </h3> */}
                  <p className="text-primary font-medium text-xs">
                    Arbree Solutions
                  </p>
                </div>
                <span className="text-xs text-muted-foreground bg-gray-200 px-2 py-0.5 rounded">
                  05/2023 – Present
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Mirpur DOHS, Dhaka
                {/* Building scalable full-stack web applications using modern technologies. */}
              </p>
            </div>

            <div>
              <h3 className="mb-1 mt-5 font-bold text-sm text-foreground">
                Full-Stack Software Engineer | Full-time, On-site
              </h3>
              <p className="text-primary font-medium text-xs">
                <ol className="ml-10 space-y-2">
                  <li className="flex gap-5">
                    <span>❖</span>
                    <p>
                      Develop and maintain scalable full-stack web applications
                      using React.js, Next.js, Node.js, and Express.js.
                    </p>
                  </li>
                  <li className="flex gap-5">
                    <span>❖</span>
                    <p>
                      Build and integrate RESTful APIs, implementing
                      authentication, authorization, and role-based access
                      control.
                    </p>
                  </li>
                  <li className="flex gap-5">
                    <span>❖</span>
                    <p>
                      Design and manage database schemas and data models using
                      MongoDB, PostgreSQL, and MySQL, with a focus on
                      performance and scalability.
                    </p>
                  </li>
                  <li className="flex gap-5">
                    <span>❖</span>
                    <p>
                      Develop reusable, responsive frontend components and
                      interactive dashboards with scalable application
                      architecture.
                    </p>
                  </li>
                  <li className="flex gap-5">
                    <span>❖</span>
                    <p>
                      Build type-safe backend solutions using Prisma ORM and
                      PostgreSQL, implementing optimized database queries and
                      data structures.
                    </p>
                  </li>
                  <li className="flex gap-5">
                    <span>❖</span>
                    <p>
                      Integrate third-party services and payment gateways,
                      including Stripe and SSLCommerz.
                    </p>
                  </li>
                  <li className="flex gap-5">
                    <span>❖</span>
                    <p>
                      Manage AWS services and configure CI/CD pipelines for
                      automated deployments and project releases.
                    </p>
                  </li>
                </ol>
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
                    Planet Education Network | Frontend Lead
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
              <p className="mt-1 text-xs text-muted-foreground">
                An end-to-end online higher education and skill development
                platform designed for students to complete full degree/diploma
                programs online alongside short skill-based courses.
              </p>
              {/* <div> */}
              <ol className="mt-2 ml-10 space-y-2 text-xs">
                <li className="flex gap-5">
                  <span>❖</span>
                  <p>
                    <span className="font-bold">
                      Architecture & Leadership:{" "}
                    </span>
                    Led the frontend team in building a full-scale online
                    university platform (offering degree programs like CSE, BBA,
                    EEE, and short skill courses) using Next.js 15, TypeScript,
                    and shadcn/ui.
                  </p>
                </li>
                <li className="flex gap-5">
                  <span>❖</span>
                  <p>
                    <span className="font-bold">State & Data Management: </span>
                    Implemented TanStack Query for efficient server-state
                    caching and Zustand for global UI state, reducing redundant
                    network requests across student and instructor dashboards.
                  </p>
                </li>
                <li className="flex gap-5">
                  <span>❖</span>
                  <p>
                    <span className="font-bold">
                      Type Safety & Backend Integration:{" "}
                    </span>
                    Enforced strict schema validation using Zod for complex
                    multi-step enrollment forms, integrating seamlessly with an
                    Express.js, Prisma, and PostgreSQL backend.
                  </p>
                </li>
                <li className="flex gap-5">
                  <span>❖</span>
                  <p>
                    <span className="font-bold">Team Leadership: </span>
                    Managed frontend developers, conducted code reviews, and
                    created a reusable UI design system that improved sprint
                    velocity and code consistency
                  </p>
                </li>
              </ol>
              {/* </div> */}
            </div>

            {/* Project 2: Church Management */}
            <div className=" border-accent pl-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-sm text-foreground">
                    Church Management System | Backend Lead / Full-Stack
                    Developer
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
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
              <ol className="mt-2 ml-10 space-y-2 text-xs">
                <li className="flex gap-5">
                  <span>❖</span>
                  <p>
                    <span className="font-bold">
                      Backend Leadership & Architecture:{" "}
                    </span>
                    Led backend architecture using Express.js, Prisma ORM, and
                    PostgreSQL to build a secure enterprise web platform and
                    admin portal for church operations.
                  </p>
                </li>
                <li className="flex gap-5">
                  <span>❖</span>
                  <p>
                    <span className="font-bold">
                      Messaging & File Sharing:{" "}
                    </span>
                    Built interactive dashboard services enabling admins to
                    create custom user groups, share documents, add group
                    members, and schedule integrated Zoom meetings directly
                    within the platform
                  </p>
                </li>
                <li className="flex gap-5">
                  <span>❖</span>
                  <p>
                    <span className="font-bold">
                      Inventory & Resource Management:{" "}
                    </span>
                    Engineered a multi-stage request and tracking pipeline to
                    monitor inventory needs across multiple church branches,
                    handling real-time status updates (Pending, Approved,
                    Received).
                  </p>
                </li>
                <li className="flex gap-5">
                  <span>❖</span>
                  <p>
                    <span className="font-bold">
                      Full-Stack UI & Integration:{" "}
                    </span>
                    Supported frontend development with Next.js, TanStack Query,
                    and Redux, delivering a responsive client interface
                    seamlessly synchronized with backend APIs
                  </p>
                </li>
              </ol>
            </div>

            {/* Project 3: Aamar Pharma */}
            <div className=" border-accent pl-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-sm text-foreground">
                    Aamar Pharma | Full-Stack Developer
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
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
              <ol className="mt-2 ml-10 space-y-2 text-xs">
                <li className="flex gap-5">
                  <span>❖</span>
                  <p>
                    <span className="font-bold">Full-Stack Architecture: </span>
                    Built an online single-vendor pharmacy e-commerce platform
                    using Next.js (App Router) and TypeScript for both frontend
                    rendering and backend API routes.
                  </p>
                </li>
                <li className="flex gap-5">
                  <span>❖</span>
                  <p>
                    <span className="font-bold">
                      Prescription & Checkout System:{" "}
                    </span>
                    Developed seamless ordering workflows allowing customers to
                    search for medicines or upload doctor prescriptions for
                    order fulfillment.
                  </p>
                </li>
                <li className="flex gap-5">
                  <span>❖</span>
                  <p>
                    <span className="font-bold">
                      Authentication & Payments:{" "}
                    </span>
                    Integrated Firebase Authentication for secure multi-method
                    user login and SSLCommerz payment gateway for processing
                    localized online transactions
                  </p>
                </li>
                <li className="flex gap-5">
                  <span>❖</span>
                  <p>
                    <span className="font-bold">
                      State Management & Data Fetching:{" "}
                    </span>
                    Optimized product filtering, cart updates, and UI
                    performance using Zustand for local cart state and TanStack
                    Query for efficient backend data fetching.
                  </p>
                </li>
              </ol>
            </div>

            {/* Project 4: Ebook Application */}
            <div className=" border-accent pl-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-sm text-foreground">
                    Ebook Application | Backend Developer
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
              <ol className="mt-2 ml-10 space-y-2 text-xs">
                <li className="flex gap-5">
                  <span>❖</span>
                  <p>
                    <span className="font-bold">
                      Backend API Architecture:{" "}
                    </span>
                    Designed and built RESTful backend APIs using Express.js,
                    TypeScript, and Prisma ORM for digital book viewing,
                    purchasing, and admin inventory management.
                  </p>
                </li>
                <li className="flex gap-5">
                  <span>❖</span>
                  <p>
                    <span className="font-bold">File & Image Processing: </span>
                    Integrated Multer, Sharp, pdf-lib, and compress-pdf to
                    handle cover image optimizations, secure PDF document
                    generation, and compressed ebook file uploads.
                  </p>
                </li>
                <li className="flex gap-5">
                  <span>❖</span>
                  <p>
                    <span className="font-bold">
                      Security & Authentication:{" "}
                    </span>
                    Implemented secure user authentication and authorization
                    using JWT and Bcrypt password hashing to safeguard user
                    accounts and admin endpoints.
                  </p>
                </li>
              </ol>
            </div>

            {/* Project 5: Sportigy */}
            <div className=" border-accent pl-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-sm text-foreground">
                    Sportigy | Frontend Developer
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
                Frontend and admin panel development for a multi-sport platform,
                managing events, scores, and user interactions.
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
                    B.Sc. in Computer Science and Engineering (CSE)
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
                  2022
                </span>
              </div>
            </div>
            <div className=" border-primary pl-3 mt-2">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-sm text-foreground">
                    Higher Secondary School Certificate (HSC)
                  </h4>
                  <div className="flex gap-2">
                    <p className="text-primary font-medium text-xs">
                      Institute: Sapahar Govt. College,
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
                    Secondary School Certificate (SSC)
                  </h4>
                  <div className="flex gap-2">
                    <p className="text-primary font-medium text-xs">
                      Institute: Kalmudanga High School,
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
        <section className="mb-3">
          <h2 className="text-lg font-bold text-primary mb-2">Languages</h2>

          <div className="flex gap-5 text-xs space-y-1">
            <p>
              <span className="font-bold text-foreground">Bangla:</span>{" "}
              <span className="text-muted-foreground">Native</span>
            </p>
            <p>
              <span className="font-bold text-foreground">English:</span>{" "}
              <span className="text-muted-foreground">Professional</span>
            </p>
          </div>
        </section>
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
