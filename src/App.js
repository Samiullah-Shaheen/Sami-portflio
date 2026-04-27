import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Min";
import About from "./About/About";
import Services from "./Service/Services";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

export default function App() {
  // services object of Arry
  const myService = [
    {
      title: "Samiullah Shahin",
      subtitle: "Web Development",
      serimg: "images/service/web.avif",
      desc: " We build high-quality, modern websites designed for long-term performance and growth. Our solutions are clean, well-documented, and easy to manage, with elegant user interfaces that even non-technical clients can use confidently.",
      icon: <i class="ri-code-line"></i>,
    },
    {
      title: "Samiullah Shahin",
      subtitle: "Ui/Ux Design",
      serimg: "images/service/web1.avif",
      desc: " We develop the best quality website that serves for the long-term.Well-documented, clean, easy and elegant interface helps any non-technical clients.",
      icon: <i class="ri-creative-commons-by-fill"></i>,
    },
    {
      title: "Samiullah Shahin",
      subtitle: "SEO",
      serimg: "images/service/12.webp",
      desc: "We build high-quality, modern websites focused on long-term performance, scalability, and business growth. Our web development solutions use clean, well-documented code and user-friendly designs, making them easy to manage even for non-technical clients.",
      icon: <i class="ri-apple-fill"></i>,
    },
  ];
  //  projects object of Arry
  const myprojects = [
    {
      projectTitle: "jop portal in Afghanistan",
      img: "images/porjects/job.png",
      projectDesc:
        "Our Job Portal in Afghanistan is a modern, reliable, and long-term web platform designed to connect employers with job seekers across the country. The system is built with high performance, security, and scalability in mind to support growing employment needs in Afghanistan.",
      proIcons: <i class="ri-funds-fill"></i>,
    },
    {
      projectTitle: "Point of Sale (POS) System",
      img: "images/porjects/pos.png",
      projectDesc:
        "Our Point of Sale (POS) System is a powerful, secure, and long-term solution designed to help businesses manage sales, inventory, and customers efficiently. The system is built with performance, accuracy, and scalability in mind.",
      proIcons: <i className="ri-funds-fill"></i>,
    },
    {
      projectTitle: "Online Shopping (E-commerce) System",
      img: "images/porjects/shop.png",
      projectDesc:
        "Our Online Shopping (E-commerce) platform is a modern, secure, and scalable solution designed to help businesses sell products online efficiently. The system is built for long-term performance, reliability, and growth, making it suitable for small businesses, retailers, and large online stores.",
      proIcons: <i className="ri-funds-fill"></i>,
    },
  ];
  //  skills object of Arry
  const Skillsobject = [
    {
      skilltitle: "What My Programming Skills Included?",
      skilldesc:
        " I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.",
    },
  ];

  return (
    <div>
      <Header></Header>
      <section id="home">
        <Main></Main>
      </section>
      <section id="about">
        <About></About>
      </section>
      {/*===========this is the services part =========== */}
      <section id="services">
        <h1 className="subtitle h1-media">
          My <span>services</span>
        </h1>
        <div className="service">
          <Services {...myService[0]}></Services>
          <Services {...myService[1]}></Services>
          <Services {...myService[2]}></Services>
        </div>
      </section>
      {/*===========this is the projects part ============= */}
      <section id="projects">
        <h2 className="pro-subtitle">Portfolio</h2>
        <h1 className="proTitle subtitle">My Amazing Works</h1>
        <div className="myprojects">
          <Projects {...myprojects[0]}></Projects>
          <Projects {...myprojects[1]}></Projects>
          <Projects {...myprojects[2]}></Projects>
        </div>
      </section>
      {/*===========this is the skills part =============== */}
      <h1 className="subtitle h1-media">
        My <span>Skills</span>
      </h1>
      <div className="myskills">
        <Skills {...Skillsobject[0]}></Skills>
      </div>

      {/*===========this is the latest blogs part =========== */}
      <h2 className="pro-subtitle">Latest News</h2>
      <h1 className="proTitle subtitle">Checkout My Recent Blogs</h1>
      <div className="myBlogs">
        <Blog></Blog>
      </div>
      {/*===========this is the contact part =========== */}
      <section id="contact">
        <h1 className="subtitle h1-media">
          Contact <span>Me</span>
        </h1>
        <div>
          <Contact></Contact>
        </div>
      </section>
      {/*===========this is the footer part ================= */}
      <Footer></Footer>
    </div>
  );
}
