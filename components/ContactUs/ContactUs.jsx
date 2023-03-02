import labels from '@/constants/labels.en';
import linkedin from '@/components/ContactUs/image/linkedin.png';
import instagram from '@/components/ContactUs/image/facebook.png';
import facebook from '@/components/ContactUs/image/linkedin.png';
import maple from '@/components/ContactUs/image/Vector2.png';
import stylesContactUs from '@/styles/ContactUs.module.css'
const ContactUs = () => {
      return (
        <div>
          <div>
            <h3 className={stylesContactUs.title} >{labels.contactUs.title}</h3>
          </div>
          <div className = 'padding'>
            <h4 className={stylesContactUs.subtitle}>{labels.chat.chat}</h4>
            <p className='b2 body2'>{labels.chat.descriptionChat}</p>
            <address><a href={labels.email.malito}>{labels.email.email}</a></address>
          </div>
          <div className = 'padding'>
            <h4 className={stylesContactUs.subtitle}>{labels.location.Basedin}</h4>
            <p className='b2 body2'>{labels.location.city}</p>
          </div>
          <div className = 'padding'>
            <h4 className={stylesContactUs.subtitle} >{labels.midia.visit}</h4>
            <a href={labels.midia.instagramlink} className="instagram"><img  src={instagram} alt={labels.midia.labelinstagram} /></a>
            <a href={labels.midia.linklinkedin} className="linkedin"><img  src={linkedin} alt={labels.midia.labelinkedin}/></a>
            <a href={labels.midia.linkfacebook} className="facebook"><img  src={facebook} alt={labels.midia.labelfacebook} /></a>
            <img  src={maple} alt={labels.midia.labelimgmaple}/>
          </div>
        </div>
      );
  };
  export default ContactUs;
