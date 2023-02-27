import labels from '@/constants/labels.en';
import linkedin from '@/components/ContactUs/img/linkedin.png';
import instagram from '@/components/ContactUs/img/facebook.png';
import facebook from '@/components/ContactUs/img/linkedin.png';
import maple from '@/components/ContactUs/img/Vector2.png';

const ContactUs = () => {
      return (
        <div>
          <div>
            <h3>{labels.contactUs.title}</h3>
          </div>
          <div>
            <h4>{labels.chat.chat}</h4>
            <p>{labels.chat.descriptionChat}</p>
            <address><a href={labels.email.malito}>{labels.email.email}</a></address>
          </div>
          <div>
            <h4>{labels.location.Basedin}</h4>
            <p>{labels.location.city}</p>
          </div>
          <div>
            <h4>{labels.midia.visit}</h4>
            <a href={labels.midia.instagramlink} className="instagram"><img  src={instagram} alt={labels.midia.labelinstagram} /></a>
            <a href={labels.midia.linklinkedin} className="linkedin"><img  src={linkedin} alt={labels.midia.labelinkedin}/></a>
            <a href={labels.midia.linkfacebook} className="facebook"><img  src={facebook} alt={labels.midia.labelfacebook} /></a>
            <img  src={maple} alt={labels.midia.labelimgmaple}/>
          </div>
        </div>
      );
  };
  export default ContactUs;
