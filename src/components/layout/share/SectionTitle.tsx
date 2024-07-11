
const SectionTitle = ({title}:{title: string} ) => {
  return (
    <div className="p-3 inline-block border-b-2">
      <h1 className="text-2xl font-barlow font-bold ">{title}</h1>
    </div>
  );
};

export default SectionTitle;
