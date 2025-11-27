export default function Contact() {
  return (
    <section id="hero">
      <div className="hero-container">
        {/*<a href="index.php" class="hero-logo" data-aos="zoom-in"><img src="assets/soft_logo_org.svg" alt="soft_logo" style="width:200px;"></a>*/}
        <h1 className="text-white fw-bold">
          Welcome To <span className="orangeborder"> Softgrowth </span> Infotech
        </h1>
        <h2 data-aos="fade-up " className="bg-main fw-bold text-black p-1">
          Website Design | Software Development | Internship
        </h2>
        <a
          data-aos="fade-up"
          data-aos-delay={200}
          href="#wellcome"
          className="btn-get-started scrollto"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
