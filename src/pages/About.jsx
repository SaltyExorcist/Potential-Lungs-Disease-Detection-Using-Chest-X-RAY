import HeaderAbout from '../components/HeaderAbout';
import FooterAbout from '../components/FooterAbout';

function About() {
 
  return (
    <>
    <div>
      <HeaderAbout/>
      <h2><span className="tel1">About</span> <span className="tel2">Medbot</span></h2>
<p className="about-paragraph">
  <br/>

Medbot is an innovative artificial intelligence-driven project that utilizes ReactJs and vanilla CSS for the website's design.To enhance the functionality and user experience, we have incorporated various npm packages. For the backend infrastructure, we have implemented a Flask server.
By inputting your essential personal information along with a Chest X-ray, our system can provide accurate health assessment results. 
However, it is important to note that as an artificial intelligence platform, Medbot is intended to supplement professional medical advice, 
and we strongly recommend consulting a healthcare professional for further treatment and guidance. For more detailed information, 
please visit our dedicated GitHub repository.   
<br/>
<br/>
<b><u>Collaborator :- <br/></u></b>

Rahul Biswas(<a href="https://github.com/ninja-codes-droid" target="_blank" rel="noopener noreferrer">Link to Github Profile</a>)<br/>
Subhrojoyti Neogi(<a href="https://github.com/SaltyExorcist" target="_blank" rel="noopener noreferrer">Link to Github Profile</a>)<br/>
Pranab Kumar Mondal(<a href="https://github.com/Lucifer-P13" target="_blank" rel="noopener noreferrer">Link to Github Profile</a>)<br/>
Dipak Giri(<a href="https://github.com/dipakgiri17" target="_blank" rel="noopener noreferrer">Link to Github Profile</a>)<br/>
Rhydam Bose(<a href="https://github.com/Rhydam-Jr001" target="_blank" rel="noopener noreferrer">Link to Github Profile</a>)<br/>
<br/><br/>

												
</p>  <p className="about-para"> ~~~ Netaji Nagar Day Collage
                                                                                                                Computer Science Department(2023)
</p>
      <FooterAbout/>
      </div>
      </>
  );
}

export default About;
