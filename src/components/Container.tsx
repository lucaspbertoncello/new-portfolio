type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-[1200px] m-auto dark:text-font-dark text-sec-font-light px-4">
      {children}
    </div>
  );
}
