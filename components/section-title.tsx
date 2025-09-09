export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="text-[clamp(2.5rem,8vw,3rem)] text-xxl font-black">
      {title}
    </h2>
  );
};
