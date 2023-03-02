import labels from '@/constants/labels.en'
import Image from 'next/image'
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
            <a href={labels.midia.instagramlink} className="instagram"><Image  width="53" height="53" src="/instagram.png" alt={labels.midia.labelinstagram} /></a>
            <a href={labels.midia.linklinkedin} className="linkedin"><Image width="53" height="53" src="/linkedin.png"alt={labels.midia.labelinkedin}/></a>
            <a href={labels.midia.linkfacebook} className="facebook"><Image width="53" height="53" src="/facebook.png" alt={labels.midia.labelfacebook} /></a>
          </div>
          {/* <div className = 'maple'>
            <Image  src="/vector2.png" alt="maple" quality="100" layout="fill"/>
          </div> */}
      </div>
      );
  };
  export default ContactUs;
