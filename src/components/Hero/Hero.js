import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import LazyLoad from 'react-lazyload';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import './Hero.scss';
import Section from '../Section/Section'
import Text from '../ui/Text/Text'
import HeroImages from '../../constants/hero/hero'

const Hero = ({}) => {
  const [imgsLoaded, setImgsLoaded] = useState(false)
  const [isCurrentImage, setIsCurrentImage] = useState(0);

  const slideTime = 3000

  // useEffect(() => {
  //   const next = (isCurrentImage + 1) % HeroImages.length;
  //   // const id = setTimeout(() => setIsCurrentImage(next), slideTime);
  //   const loadImage = image => {
  //     return new Promise((resolve, reject) => {
  //       const loadImg = new Image()

  //       loadImg.src = image.imageUrl

  //       loadImg.onload = () =>
  //         setTimeout(() => {
  //           resolve(image.imageUrl)
  //         }, slideTime)

  //       loadImg.onerror = err => reject(err)

  //     })
  //   }

  //   Promise.all(HeroImages.map(image => loadImage(image)))
  //     .then(() => setImgsLoaded(true))
  //     .then(setTimeout(() => setIsCurrentImage(next), slideTime))
  //     .catch(err => console.log("Failed to load images", err))
      
  // }, [isCurrentImage])
      

  useEffect(() => {
    const next = (isCurrentImage + 1) % HeroImages.length;
    const id = setTimeout(() => setIsCurrentImage(next), isCurrentImage === 0 ? slideTime*2 : slideTime);
    return () => clearTimeout(id);
  }, [isCurrentImage])


  const currentTextLight = HeroImages[isCurrentImage].isLight
  const currentImage = HeroImages[isCurrentImage]

  return (
    <Section className="hero">

    {/* {imgsLoaded ? 
      <> */}
        <TransitionGroup>
            <CSSTransition
              key={currentImage.imageUrl}
              appear={true}
              classNames="image-transition"
              timeout={{enter: 500, exit: 500}}
            >
              <LazyLoad>
                <div className="hero-background">
                    <img alt="" src={currentImage.imageUrl}/>
                </div>
              </LazyLoad>
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
            <Text paragraph light={currentTextLight}>
              <a href="https://instagram.com/figurepress" target="_blank">Instagram</a>
            </Text>
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="flex-end">
          <Grid item container xs={12} justify="center">
            <Text center light={currentTextLight}>{currentImage.caption}<br/><em>{currentImage.publication}</em></Text>
          </Grid>
        </Grid>
      </Grid>
      {/* </>
    :
    <Grid container justify="center" alignItems="center" style={{height: "100%"}}>
      <Grid item>
        <Text>Figure Press</Text>
      </Grid>
    </Grid>
    } */}

    </Section>
  )
}

export default Hero