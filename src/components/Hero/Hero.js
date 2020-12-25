import React, { useState, useEffect, useRef} from 'react';
import Grid from '@material-ui/core/Grid';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import Div100vh from 'react-div-100vh'
import './Hero.scss';
import Section from '../Section/Section'
import Text from '../ui/Text/Text'
import HeroImages from '../../constants/hero/hero'

const Hero = ({}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isCurrentImage, setIsCurrentImage] = useState(0);
  const slideTime = 8000
  useEffect(() => {
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = HeroImages[isCurrentImage].imageUrl
        loadImg.onload = () =>
        setTimeout(() => {
          resolve(image.imageUrl)
        }, slideTime)
        loadImg.onerror = err => reject(err)
      })
    }
    const next = (isCurrentImage + 1) % HeroImages.length;
    
    Promise.all(HeroImages.map(image => loadImage(image)))
    .then(() => {
        const id = setTimeout(() => setIsCurrentImage(next), slideTime);
        setIsLoading(false)
      })
      .catch(err => console.log("Failed to load images", err))
  }, [isLoading, isCurrentImage])

  const currentTextLight = HeroImages[isCurrentImage].isLight
  const currentImage = HeroImages[isCurrentImage]

  return (
  <Div100vh>
    <Section className="hero">
      {isLoading ? 
        <Grid container justify="center" alignItems="center" style={{height: "100%"}}>
          <Grid item>
            <Text>Figure Press</Text>
          </Grid>
        </Grid>
      :
        <>
          <TransitionGroup>
            <CSSTransition
              key={currentImage.imageUrl}
              appear={true}
              classNames="image-transition"
              timeout={{enter: 500, exit: 500}}
            >
              <div className="hero-background">
                  <img alt="" src={currentImage.imageUrl}/>
              </div>
            </CSSTransition>
          </TransitionGroup>
          <Grid container justify="space-between" className="hero-text-wrapper">
            <Grid container spacing={2} className="hero-text-top">
              <Grid item xs={12} sm={3}>
                <Text light={currentTextLight}>Figure Press</Text>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Text bold light={currentTextLight}>
                  Our debut, self-titled, book <em>Figures</em> is due for release in 2021.
                </Text>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Text paragraph light={currentTextLight}>
                  Figure Press is a publishing project which uses the form of the book, and the processes of its production, to develop and sustain practices for thinking, making, and collaborating. Figure Press eagerly examines the process of form-making, of shaping and representing, in the hope of discovering practical tools for stabilizing the everyday demands of artistic practice. Through close collaboration, friendly critique, and often intentionally prolonged conversation, this press strives to provide encouraging and assistive contexts for artists developing delicate new work.
                </Text>
                <Text paragraph light={currentTextLight}>
                  Figure Press is a collaboration between Matt Ransom and Taylor Zanke.
                </Text>
                <Text light={currentTextLight}>
                  <a href="https://instagram.com/figurepress" target="_blank">Instagram</a>
                </Text>
                {/* <Text paragraph light={currentTextLight}>Subscribe to our newsletter</Text> */}
              </Grid>
            </Grid>
            <Grid container justify="center" alignItems="flex-end">
              <Grid item container xs={12} justify="center">
                <Text center light={currentTextLight}>{currentImage.caption}<br/><em>{currentImage.publication}</em></Text>
              </Grid>
            </Grid>
          </Grid>
        </>
      }
    </Section>
  </Div100vh>
  )
}

export default Hero