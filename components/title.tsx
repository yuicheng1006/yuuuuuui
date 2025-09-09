export const Title = ({ title }: { title: string }) => {
  return (
    <h2 className="text-[clamp(2.5rem,8vw,4.75rem)] text-xxl font-black">{title}</h2>
  );
};
