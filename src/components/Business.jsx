import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${(index !== features.length - 1) ? "mb-6" : "mb-0"} feature-card text-black hover:text-white`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt={title} className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex flex-1 flex-col ml-3">
      <h4 className="font-poppins font-semibold  text-[18px] leading-[23px] mb-1">{title}</h4>
      <p className="font-poppins font-normal  text-[16px] leading-[24px] mb-1">{content}</p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Focus on Your Steps, <br className="sm:block hidden" />We'll Handle the Rest.</h2>
      <p className={`${styles.paragraph} max-w-[570px] mt-5`}>With expert shoe repair, you can extend the life of your footwear, preserve their quality, and save money. Trust our skilled craftsmen to restore your shoes to their original splendor.</p>
      <Button styles="mt-10" />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (<FeatureCard key={feature.id} index={index} {...feature} />))}
    </div>
  </section>
);

export default Business;
