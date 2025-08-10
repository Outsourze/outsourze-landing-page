import Header from "./header"
import Footer from "./footer" 

export default function Layout({ children }) {
  return (
    <div className="w-full">
      <Header />
      <main className="lg:pt-28 md:py-16 max-md:py-16 max-sm:pb-5">{children}</main>
      <Footer />
    </div>
  )
}