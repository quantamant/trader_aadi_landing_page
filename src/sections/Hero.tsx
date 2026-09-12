import { Fragment } from "react/jsx-runtime";
import CTA from "../components/CTA";
import Description from "../components/Description";
import HeroProfileImage from "../components/HeroProfileImage";
import Title from "../components/Title";


export default function Hero(){
    
     return(
        <Fragment> <section className="hero">
        <div className="hero-glow" />

       <HeroProfileImage/>

      <Title/>

        <Description/>

        <CTA/>

      </section>
      </Fragment>
     )
}