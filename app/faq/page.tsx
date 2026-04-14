import FAQ from '../components/FAQ/index';
import Navbar from '../components/Navbar/Navbar';

export default function FAQPage() {
  return (
    <main>
      <div className="relative h-20 bg-gradient-to-r from-[#0f172a] via-[#1E013A] to-[#00224A]">
        <Navbar />
      </div>
      <FAQ />
    </main>
  )
}
