import Button from "../Button";

const Navbar = () => {
  return (
    <div className="flex justify-between w-full pt-10 pr-24 align-middle">
      <div></div>
      <div className="flex gap-16 items-center">
        <a href="/#">
          <h3>About</h3>
        </a>
        <a href="/#">
          <h3>Projects</h3>
        </a>
        <a href="/#">
          <h3>Experience</h3>
        </a>
        <a href="/#">
          <h3>Contact</h3>
        </a>
        <Button handleClick={() => {}} text="Resume" />
      </div>
    </div>
  );
};

export default Navbar;
