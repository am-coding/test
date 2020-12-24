import SecondHero from '../components/organisms/SecondHero';
import MarketSection from '../components/organisms/MarketSection';  
import GridSection from '../components/organisms/GridSection';
import { gridData } from '../constants'

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
    </div>
  )
}