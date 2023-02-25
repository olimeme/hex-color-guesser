interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="rounded-full border-2 border-slate-800">{text}</button>
  );
};

export default Button;
