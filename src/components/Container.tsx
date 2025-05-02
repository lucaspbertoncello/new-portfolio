type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="max-w-[1200px] m-auto">{children}</div>;
}
