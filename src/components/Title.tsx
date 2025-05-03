type TitleProps = {
  text: string;
};

export default function Title({ text }: TitleProps) {
  return (
    <h1 className="dark:text-white text-4xl mb-10">
      {text} <span className="dark:text-main-dark">.</span>
    </h1>
  );
}
