import Header from "./header"
import Footer from "./footer" 

export default function Layout({ children }) {
  return (
    <div className="w-full">
      <Header />
      <main className="max-w-7xl m-auto">{children}</main>
      <Footer />
    </div>
  )
}