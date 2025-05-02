type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="dark:text-font-dark max-w-[1200px] m-auto dark:bg-red-500">
      {children}
    </div>
  );
}
