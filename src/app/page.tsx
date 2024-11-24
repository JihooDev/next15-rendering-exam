import LinkButton from "@/components/link-button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center gap-5 w-full h-screen">
      <LinkButton
        href="/ssr"
        title="SSR"
      />
      <LinkButton
        href="/csr"
        title="CSR"
      />
      <LinkButton
        href="/isr"
        title="ISR"
      />
      <LinkButton
        href="/ssg"
        title="SSG"
      />
    </div>
  );
}
