import Button from "../Button";

const Navbar = () => {
  const linkedInUrl = "https://www.linkedin.com/in/nugrahaa878/";
  const cvLink =
    "https://drive.google.com/file/d/19uxkHiwbusjfcXJANYVxX0KLdGCKp1iY/view?usp=sharing";

  const handleRedirectLink = (url: string) => {
    window.open(url);
  };

  return (
    <div className="flex justify-between w-full pt-10 pr-24 align-middle">
      <div></div>
      <div className="flex gap-16 items-center">
        <button
          onClick={() => {
            const element = document.getElementById("articles");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <h3>Article</h3>
        </button>
        <button
          onClick={() => {
            const element = document.getElementById("projects");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <h3>Projects</h3>
        </button>
        <a href="#" onClick={() => handleRedirectLink(linkedInUrl)}>
          <h3>Experience</h3>
        </a>
        <a href="/#">
          <h3>Contact</h3>
        </a>
        <Button
          handleClick={() => {
            handleRedirectLink(cvLink);
          }}
          text="Resume"
        />
      </div>
    </div>
  );
};

export default Navbar;
