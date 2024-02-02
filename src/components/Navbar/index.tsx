import Button from "../Button";

const Navbar = () => {
  return (
    <div className="flex justify-between w-full pt-10 pr-24 align-middle">
      <div></div>
      <div className="flex gap-16 items-center">
        <h3>About</h3>
        <h3>Projects</h3>
        <h3>Experience</h3>
        <h3>Contact</h3>
        <Button handleClick={() => {}} text="Resume" />
      </div>
    </div>
  );
};

export default Navbar;
