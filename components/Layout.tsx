import React from "react";
import Sidebar from "./Sidebar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="flex flex-col md:flex-row flex-1">
          <Sidebar />
          <main className="flex-1 m-4 md:m-8">{children}</main>
        </div>
      </div>
    </>
  );
}
