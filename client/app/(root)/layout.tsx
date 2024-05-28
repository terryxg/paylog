import MobileNav from "@/components/MobileNav";
import BackButton from "@/components/BackButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Salvation", lastName: "Ehigai" };

  return (
    <main className="flex h-screen w-full font-inter">
      <div className="flex size-col flex-col w-full">
        <div className="root-layout">
          <BackButton /> {/* logo is inside back button */}
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
