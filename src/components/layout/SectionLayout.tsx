import { ReactNode } from "react";

const SectionLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="my-16 font-barlow bg-primary-gradian p-2 rounded-md">
      {children}
    </div>
  );
};

export default SectionLayout;
