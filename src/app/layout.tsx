import LeftBar from "@/components/LeftBar";
import "./globals.css";
import RightBar from "@/components/RightBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-md lg:max-w-screen-lg mx-auto flex justify-between">
          <LeftBar />
          <div className="">{children}</div>
          <RightBar />
        </div>
      </body>
    </html>
  );
}
