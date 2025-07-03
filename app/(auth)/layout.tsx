import React, { ReactNode } from "react";

const layout = ({ children }: { chrildren: ReactNode }) => {
  return (
    <main className="">
      Auth Layout
      <section className="">{children}</section>
    </main>
  );
};

export default layout;
