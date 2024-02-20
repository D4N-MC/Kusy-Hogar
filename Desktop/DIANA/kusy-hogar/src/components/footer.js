function Footer() {
    return(
        <footer className="footer">
            <section className="footer__contact">
            <h3 className="footer__header">CONTACTANOS</h3>
            <a className="footer__contact-block" href="https://wa.me/930756398" target="_blank">
                <img className="footer__contact-image" src="https://seeklogo.com/images/W/whatsapp-icon-logo-8CA4FB831E-seeklogo.com.png"/>
                <p className="footer__contact-text">930 756 398</p>
            </a>
            <a className="footer__contact-block" href="https://www.facebook.com/Kusihogar.HcoPe?mibextid=ZbWKwL" target="_blank">
                <img className="footer__contact-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"/>
                <p className="footer__contact-text">Kusy Hogar</p>
            </a>
            <a className="footer__contact-block" href="https://www.instagram.com/kusyhogar?utm_source=qr&igsh=MWltNXZqM3hsOWQ4cA%3D%3D" target="_blank">
                <img className="footer__contact-image" src="https://static.vecteezy.com/system/resources/previews/023/986/555/original/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png"/>
                <p className="footer__contact-text">@KUSYHOGAR</p>
            </a>
            <a className="footer__contact-block" href="https://www.tiktok.com/@dianacadillocalix?is_from_webapp=1&sender_device=pc" target="_blank">
                <img className="footer__contact-image" src="https://icones.pro/wp-content/uploads/2021/03/logo-icone-tiktok-simbolo.png"/>
                <p className="footer__contact-text">kusyhogar</p>
            </a>
            </section>
            <section className="footer__map">
                <h3 className="footer__header">UBICANOS AQUI</h3>
                <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0152297134505!2d-76.24872934516489!3d-9.932689256492443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c3b364a18ec9%3A0x8200e09f1cdf261a!2sJiron%20independencia%20344!5e0!3m2!1ses-419!2spe!4v1708386986832!5m2!1ses-419!2spe" 
  width="600" 
  height="450" 
  style={{ border: '0' }}  // Aquí cambio el style de cadena a objeto
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
            </section>
    </footer>
    );
}

export default Footer;