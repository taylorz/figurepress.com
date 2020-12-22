import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import './Hero.scss';
import Section from '../Section/Section'
import Text from '../ui/Text/Text'
import HeroImages from '../../constants/hero/hero'

const Hero = ({}) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const next = (currentImage + 1) % HeroImages.length;
    const id = setTimeout(() => setCurrentImage(next), 1000);
    return () => clearTimeout(id);
  }, [currentImage]);

  const isLightText = HeroImages[currentImage].textColor === "light"

  return (
    <Section className="hero">
      
      <div className="hero-background" style={{backgroundImage: `url(${HeroImages[currentImage].imageUrl})`}}/>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={2}>
          <Text light={isLightText}>Figure Press</Text>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Text bold light={isLightText}>
            Debut, self-titled, book <em>Figures</em><br/>is due for release in 2021.
          </Text>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Text paragraph light={isLightText}>
            Figure Press is a publishing project which uses the form of the book, and the processes of its production, to develop and sustain practices for thinking, making, and collaborating. Figure Press eagerly examines the process of form-making, of shaping and representing, in the hope of discovering practical tools for stabilizing the everyday demands of artistic practice. Through close collaboration, friendly critique, and often intentionally prolonged conversation, this press strives to provide encouraging and assistive contexts for artists developing delicate new work.
          </Text>
          <Text paragraph light={isLightText}>
            Figure Press is a collaboration between Matt Ransom and Taylor Zanke.
          </Text>
        </Grid>
      </Grid>
    </Section>
  )
}

export default Hero