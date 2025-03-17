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
        {/* sm 640
        md 768
        lg 1024
        xl 1280
        2xl 1536 */}
        <div className="flex justify-between bg-red-300 sm:bg-blue-300 md:bg-green-300 lg:bg-yellow-300 xl:bg-orange-300 2xl:bg-purple-300">
          <LeftBar />
          <div className="flex-1">{children}</div>
          <RightBar />
        </div>
      </body>
    </html>
  );
}
