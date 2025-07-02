import Header from "@/components/Header";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <div>
        <Header />

        <div>{children}</div>
      </div>
    </main>
  );
};

export default layout;
