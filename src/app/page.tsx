import Image from "next/image";

import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import NewPost from '@/components/NewPost';

const Home = () => {

  return (
   <div>
    <Hero />
    <NewPost/>
    
    </div>
  );
};

export default Home;