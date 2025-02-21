import { Sidebar } from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen p-2 md:p-4">
      <Sidebar />
      <main className="w-full">{children}</main>
    </div>
  );
}
