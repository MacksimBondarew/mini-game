import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authecation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex items-center justify-center w-full p-4">
      {children}
    </div>
  );
}
