interface Props {
  text: string;
  handleClick: () => void;
}

const Button = ({ text, handleClick }: Props) => {
  return (
    <button
      onClick={handleClick}
      className="border-2 border-black px-4 py-2 rounded-lg hover:bg-darkBlue hover:text-white  z-10 duration-300 ease-in-out"
    >
      <p>{text}</p>
    </button>
  );
};

export default Button;
