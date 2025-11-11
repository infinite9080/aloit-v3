import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Dedicated from './components/Dedicated/index';
import Digital from './components/Digital/index';
import Beliefs from './components/Beliefs/index';
import Wework from './components/Wework/index';
import Featured from './components/Featured/index';
import Testimonials from './components/Testimonials/index';
// import Joinus from './components/Joinus/index';


export default function Home() {
  return (
    <main className="pt-20">
      <Banner />
      <Aboutus />
      <Dedicated />
      <Digital />
      <Beliefs />
      <Wework />
      <Featured />
      <Testimonials />
      {/* <Joinus /> */}
    </main>
  )
}
