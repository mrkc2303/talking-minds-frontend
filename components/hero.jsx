const Hero = () => {
  return (
    <>
      <div className="hero">
        {/* <Image src="/hero-banner.jpg" alt="hero-banner" className="banner" /> */}
        
        <div className="hero-para" 
        // style={{marginLeft:"20%"}}
        >
          <span className="hey"> HEY! </span> <br /> You, yourself, as much as
          anybody in the entire universe, deserve your love and affection.
        </div>
        <div>
          <Image src="/mentalhealth.jpeg" alt="hero-banner" 
          // style={{marginLeft:"55%", paddingTop:"5%"
          // }} 
        width="500px" />
        </div>
      </div>
    </>
  );
};

export default Hero;
