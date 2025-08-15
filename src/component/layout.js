import Header from "./header"
import Footer from "./footer/footer" 

export default function Layout({ children }) {
  return (
    <div className="w-full">
      <Header />
      <main className="
      lg:pt-20 lg:pb-16
      md:py-16 md:pb-5 
      max-md:py-16 max-sm:pb-2">{children}</main>
      <Footer />
    </div>
  )
}