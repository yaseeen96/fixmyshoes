import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col ">
      <h2 className={`${styles.heading2} text-white`}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>Everything you need to repair your shoes and keep you moving comfortably anywhere on the planet. Trust Fix My Shoe for top-notch shoe care and maintenance.</p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}><Button /></div>
  </section>
)

export default CTA