import Header from "./header"
import Footer from "./footer" 

export default function Layout({ children }) {
  return (
    <div className="w-full">
      <Header />
      <main className="pt-30">{children}</main>
      <Footer />
    </div>
  )
}