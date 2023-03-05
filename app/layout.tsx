import "./global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div>
            <Navbar />
        </div>
        < div className="m-20" >
            {children}
        </div>

        <div className="fixed bottom-0 left-0 m-20" >
            <Footer />
        </div>

      </body>
    </html>
  )
}
