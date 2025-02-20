import{useEffect} from 'react';
import { OurHistory } from './OurHistory'
import Header from '../../components/sharedComponents/Header'

const AboutDetails = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);
  
  return (
    <section>
      <Header title='About'/>
      <OurHistory/>
      </section>
  )
}

export default AboutDetails
