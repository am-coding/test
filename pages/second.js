import SecondHero from '../components/organisms/SecondHero';
import MarketSection from '../components/organisms/MarketSection';  
import GridSection from '../components/organisms/GridSection';
import { colors, gridData } from '../constants'
import CallToAction from "../components/organisms/CallToAction";

export default function IndexPage() {

  return (
    <div>
      <SecondHero />
      <MarketSection
        paragraph="Ac tincidunt massa laoreet eu, phasellus at adipiscing. Ornare ultricies aliquam, ultrices neque. Amet ac varius scelerisque orci."
      />
      <GridSection
        data={gridData}
      />
      <CallToAction 
        bgColor={colors.yellow}
        title="Skupos is sweeping the c-store nation. Send the latest stories to your inbox."
       />
      <GridSection
        data={gridData}
        loadMore={true}
      />
      <CallToAction 
        bgColor={colors.lightGray}
        title="Never miss a captivating success story. Send the latest stories to your inbox."
       />
    </div>
  )
}