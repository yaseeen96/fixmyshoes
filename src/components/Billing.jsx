import { after, apple, before, bill, google } from '../assets';
import styles, { layout } from '../style';
import { ImgComparisonSlider } from '@img-comparison-slider/react';

const Billing = () => (
  <section id="product" className={`flex flex-col`}>
    <h2 className={styles.heading2}>Check Out The Difference</h2>
   <ImgComparisonSlider>
      <img slot="first" src={before} className='w-full' />
      <img slot="second" src={after} className='w-full'/>
    </ImgComparisonSlider>
  </section>
);

export default Billing;
