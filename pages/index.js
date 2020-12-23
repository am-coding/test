import Navbar from '../components/organisms/Navbar';
import Hero from '../components/templates/Hero';

export default function IndexPage() {

  const items = ['Products', 'Resources', 'Support'];

  return (
    <div>
      <Navbar 
        items={items}
      />
      <Hero
        title={''}
        paragraph={'Skupos powers smarter, more profitable retail by connecting independent stores, brands, and distributors on one platform.'}

      />
      {/* <div className="py-20">
        <h1 className="text-5xl text-center text-gray-900 dark:text-gray-100">
          Next.js + Tailwind CSS 2.0
        </h1>
      </div> */}
    </div>
  )
}