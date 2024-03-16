import portrait from '../assets/images/bofill-1.jpg'
import learnMore from '../assets/images/learn-more.png'
import "../App.css"

import ProjectsContainer from '../components/ProjectsContainer';
import Footer from '../components/Footer';


function Home() {
  
    return (
        <div className='home'>
            <section className='section -intro'>
                <h1>Ricardo Bofil</h1>
            </section>

            <section className='section -about'>

                <div className="text-container">
                    <h3>About</h3>
                    <p>
                        Ricardo Bofill was a renowned Spanish architect known for his innovative and diverse architectural designs that spanned over half a century. He founded Ricardo Bofill Taller de Arquitectura in 1963, which became famous for projects like Walden 7 and La Muralla Roja, characterized by their bold colors and geometric forms. Bofill's work often blended elements of classical architecture with modernist influences, creating iconic structures that have left a lasting impact on the global architectural landscape. His projects ranged from residential buildings and public spaces to airports and cultural centers, showcasing his versatility and creative vision.
                    </p>
                    <img src={learnMore} alt="Learn More" />
                </div>
                <img src={portrait} className="portrait" alt="portrait" />

            </section>

            <section className='section -projects'>
                <h1>Meaningful Projects</h1>
               
                               
                {/* <ProjectsContainer /> */}
            </section>
            <Footer />
        </div>
    );
}

export default Home;
