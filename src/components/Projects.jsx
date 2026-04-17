export default function Projects() {
  const portfolios = [
    {
      title: "Rezzshop",
      desc: "E-commerce web application for a mobile phone store featuring a complete user UI and catalog system.",
      tech: ["PHP", "CSS", "Full-stack"],
      link: " https://rezzshop.my.id/"
    },
    {
      title: "Kasir-api",
      desc: "Robust backend RESTful API server for point-of-sale transactions and data management.",
      tech: ["Golang", "Postman", "API"],
      link: "https://github.com/intannz/kasir-api-golang"
    },
    {
      title: "National RedList Assessment",
      desc: "Web-based information system for assessing and monitoring the national conservation status of species using Red List standards.",
      tech: ["Laravel", "TailwindCSS", "AlpineJS"],
      link: "https://nrla.pemantau.id/articles"
    },
    {
      title: "FILKOM Training Portal",
      desc: "Interactive educational portal with detailed course catalogs and user registration workflows.",
      tech: ["React", "UI/UX", "Web"],
      link: "https://github.com/muhamadrivaldi1/Traning-Center"
    },
    {
      title: "Ramadhan Challange",
      desc: "Interactive educational portal with detailed course catalogs and user registration workflows.",
      tech: ["HTML", "CSS", "JS"],
      link: "https://ramadhanchallange.vercel.app/"
    },
    {
      title: "Reyshop",
      desc: "E-commerce web application.",
      tech: ["UI/UX"],
      link: "https://www.figma.com/design/wVe2HYV0m5DILBwQhiGLwy/TokoHP-Account?node-id=0-1&t=WdY75G31tH3ELWB8-1"
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid">
          {portfolios.map((item, index) => (
            <div key={index} className="card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="tags">
                {item.tech.map((t, i) => (
                  <span key={i} className="tag">{t}</span>
                ))}
              </div>
              <a href={item.link}>View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}