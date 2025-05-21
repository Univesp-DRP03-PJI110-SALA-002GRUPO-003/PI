import { useEffect, useState } from 'react';
import "./site.scss";
import { useNavigate } from 'react-router-dom';
import { dbClient } from "../../services/db";


const Website = () => {

  const navigate = useNavigate();

  const [home, setHome] = useState(null);
  const [about, setAbout] = useState(null);
  const [product, setProduct] = useState(null);
  const [profile, setProfile] = useState(null);

  const fetchHome = async () => {
    const response = await dbClient.from('page')
      .select('content')
      .eq('id_user', 1)
      .eq('page_name', 'home')

    if (response.error) {
      console.error();
    } else {

      const formattedHome = JSON.parse(response.data[0].content);
      return setHome(formattedHome);
    }
  };

  const fetchAbout = async () => {
    const response = await dbClient.from('page')
      .select('content')
      .eq('id_user', 1)
      .eq('page_name', 'about')

    if (response.error) {
      console.error();
    } else {

      const formattedAbout = JSON.parse(response.data[0].content);
      return setAbout(formattedAbout);
    }
  };

  const fetchProfile = async () => {
    const response = await dbClient.from('page')
      .select('content')
      .eq('id_user', 1)
      .eq('page_name', 'profile')

    if (response.error) {
      console.error();
    } else {

      const formattedProfile = JSON.parse(response.data[0].content);
      console.log(formattedProfile);
      return setProfile(formattedProfile);
    }
  };

  const fetchProduct = async () => {
    const response = await dbClient.from('page')
      .select('content')
      .eq('id_user', 1)
      .eq('page_name', 'products')

    if (response.error) {
      console.error();
    } else {

      const formattedProduct = JSON.parse(response.data[0].content);
      return setProduct(formattedProduct);
    }
  };

  useEffect(() => {
    fetchHome();
    fetchAbout();
    fetchProfile();
    fetchProduct();
  }, []);

  const renderAbout = () => {
    return (
      <div className="row mt-4">

        {about.illustration.style.align === 'center' ? (
          <>
            <div className="col-12 text-center">
              <img
                className="rounded-3 mb-4"
                src={about.illustration.url}
                alt="Ilustração"
                style={{
                  height: about.illustration.style.height ? `${about.illustration.style.height}px` : 'auto',
                  width: about.illustration.style.width ? `${about.illustration.style.width}px` : '100%',
                  maxWidth: '100%'
                }}
              />
            </div>

            <div className="col-12">

              <div className="mb-4">
                <h1 style={{
                  fontFamily: about.headline.style.fontFamily,
                  fontSize: about.headline.style.fontSize,
                  fontWeight: about.headline.style.fontWeight,
                  color: about.headline.style.color,
                  textAlign: about.headline.style.textAlign
                }}>
                  {about.headline.title}
                </h1>

                <p style={{
                  fontFamily: about.subtitle.style.fontFamily,
                  fontSize: about.subtitle.style.fontSize,
                  fontWeight: about.subtitle.style.fontWeight,
                  color: about.subtitle.style.color,
                  textAlign: about.subtitle.style.textAlign
                }}>
                  {about.subtitle.text}
                </p>
              </div>
            </div>
          </>

        ) : (
          about.illustration.style.align === 'left') ? (

          <>
            <div className="col-auto">
              <img
                className="rounded-3"
                src={about.illustration.url}
                alt="Ilustração"
                style={{
                  height: about.illustration.style.height ? `${about.illustration.style.height}px` : 'auto',
                  width: about.illustration.style.width ? `${about.illustration.style.width}px` : 'auto',
                  maxHeight: '500px'
                }}
              />
            </div>

            <div className="col">
              <div className="d-flex flex-column">

                <div className="mb-4">
                  <h1 style={{
                    fontFamily: about.headline.style.fontFamily,
                    fontSize: about.headline.style.fontSize,
                    fontWeight: about.headline.style.fontWeight,
                    color: about.headline.style.color,
                    textAlign: about.headline.style.textAlign
                  }}>
                    {about.headline.title}
                  </h1>
                </div>

                <div>
                  <p style={{
                    fontFamily: about.subtitle.style.fontFamily,
                    fontSize: about.subtitle.style.fontSize,
                    fontWeight: about.subtitle.style.fontWeight,
                    color: about.subtitle.style.color,
                    textAlign: about.subtitle.style.textAlign
                  }}>
                    {about.subtitle.text}
                  </p>
                </div>
              </div>
            </div>
          </>

        ) : (

          <>
            <div className="col">
              <div className="d-flex flex-column">

                <div className="mb-4">
                  <h1 style={{
                    fontFamily: about.headline.style.fontFamily,
                    fontSize: about.headline.style.fontSize,
                    fontWeight: about.headline.style.fontWeight,
                    color: about.headline.style.color,
                    textAlign: about.headline.style.textAlign
                  }}>
                    {about.headline.title}
                  </h1>
                </div>

                <div>
                  <p style={{
                    fontFamily: about.subtitle.style.fontFamily,
                    fontSize: about.subtitle.style.fontSize,
                    fontWeight: about.subtitle.style.fontWeight,
                    color: about.subtitle.style.color,
                    textAlign: about.subtitle.style.textAlign
                  }}>
                    {about.subtitle.text}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-auto">
              <img
                className="rounded-3"
                src={about.illustration.url}
                alt="Ilustração"
                style={{
                  height: about.illustration.style.height ? `${about.illustration.style.height}px` : 'auto',
                  width: about.illustration.style.width ? `${about.illustration.style.width}px` : 'auto',
                  maxHeight: '500px'
                }}
              />
            </div>
          </>
        )}
      </div>
    );
  }

  const renderProducts = () => {
    return Object.values(product).map((product, index) => (

      <div
        className="col-12 mb-5"
        key={`product-${index}`}
      >

        <div className="row">
          {product.illustrationStyle.align === 'center' ? (
            <>

              <div className="col-12 text-center">
                <img
                  className="rounded-3 mb-4"
                  src={product.illustrationUrl}
                  alt={product.title}
                  style={{
                    height: product.illustrationStyle.height ? `${product.illustrationStyle.height}px` : 'auto',
                    width: product.illustrationStyle.width ? `${product.illustrationStyle.width}px` : '100%',
                    maxWidth: '100%'
                  }}
                />
              </div>

              <div className="col-12">

                <div className="mb-4">
                  <h1 style={{
                    fontFamily: product.titleStyle.fontFamily,
                    fontSize: product.titleStyle.fontSize,
                    fontWeight: product.titleStyle.fontWeight,
                    color: product.titleStyle.color,
                    textAlign: product.titleStyle.textAlign
                  }}
                  >
                    {product.title}
                  </h1>
                </div>

                <div>
                  <p style={{
                    fontFamily: product.detailsStyle.fontFamily,
                    fontSize: product.detailsStyle.fontSize,
                    fontWeight: product.detailsStyle.fontWeight,
                    color: product.detailsStyle.color,
                    textAlign: product.detailsStyle.textAlign
                  }}
                  >
                    {product.details}
                  </p>
                </div>
              </div>
            </>

          ) : product.illustrationStyle.align === 'left' ? (

            <>
              <div className="col-auto">
                <img
                  className="rounded-3"
                  src={product.illustrationUrl}
                  alt={product.title}
                  style={{
                    height: product.illustrationStyle.height ? `${product.illustrationStyle.height}px` : 'auto',
                    width: product.illustrationStyle.width ? `${product.illustrationStyle.width}px` : 'auto',
                    maxHeight: '500px'
                  }}
                />
              </div>

              <div className="col">

                <div className="d-flex flex-column">

                  <div className="mb-4">
                    <h1 style={{
                      fontFamily: product.titleStyle.fontFamily,
                      fontSize: product.titleStyle.fontSize,
                      fontWeight: product.titleStyle.fontWeight,
                      color: product.titleStyle.color,
                      textAlign: product.titleStyle.textAlign
                    }}>
                      {product.title}
                    </h1>
                  </div>

                  <div>
                    <p style={{
                      fontFamily: product.detailsStyle.fontFamily,
                      fontSize: product.detailsStyle.fontSize,
                      fontWeight: product.detailsStyle.fontWeight,
                      color: product.detailsStyle.color,
                      textAlign: product.detailsStyle.textAlign
                    }}>
                      {product.details}
                    </p>
                  </div>
                </div>
              </div>
            </>

          ) : (

            <>
              <div className="col">

                <div className="d-flex flex-column">

                  <div className="mb-4">
                    <h1 style={{
                      fontFamily: product.titleStyle.fontFamily,
                      fontSize: product.titleStyle.fontSize,
                      fontWeight: product.titleStyle.fontWeight,
                      color: product.titleStyle.color,
                      textAlign: product.titleStyle.textAlign
                    }}
                    >
                      {product.title}
                    </h1>
                  </div>

                  <div>
                    <p style={{
                      fontFamily: product.detailsStyle.fontFamily,
                      fontSize: product.detailsStyle.fontSize,
                      fontWeight: product.detailsStyle.fontWeight,
                      color: product.detailsStyle.color,
                      textAlign: product.detailsStyle.textAlign
                    }}>
                      {product.details}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <img
                  className="rounded-3"
                  src={product.illustrationUrl}
                  alt={product.title}
                  style={{
                    height: product.illustrationStyle.height ? `${product.illustrationStyle.height}px` : 'auto',
                    width: product.illustrationStyle.width ? `${product.illustrationStyle.width}px` : 'auto',
                    maxHeight: '500px'
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    ));
  };

  return (
    <div className="website">

      {/* Seção Home */}
      {home && (
        <section
          id="home"
        >

          <div
            className="banner-container"
            style={{
              backgroundImage: `url(${home.background_image.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >

            <div className="banner-content">
              <div className="logo-container">

                <img
                  className="rounded-3 logo"
                  style={{
                    height: home.logo.style.height ? `${home.logo.style.height}px` : 'auto',
                    // width: home.logo.style.width ? `${home.logo.style.width}px` : 'auto',
                  }}
                  src={home.logo.url}
                  alt="Logo"
                />
              </div>
              <div className="banner-text">
                <div className="col-12 text-center">

                  <div className="headline-wrapper">
                    <h1
                      className='mb-4'
                      style={{
                        fontFamily: home.headline.style.fontFamily,
                        fontSize: home.headline.style.fontSize,
                        fontWeight: home.headline.style.fontWeight,
                        color: home.headline.style.color,
                        textAlign: home.headline.style.textAlign
                      }}>
                      {home.headline.title}
                    </h1>

                    <p style={{
                      fontFamily: home.subtitle.style.fontFamily,
                      fontSize: home.subtitle.style.fontSize,
                      fontWeight: home.subtitle.style.fontWeight,
                      color: home.subtitle.style.color,
                      textAlign: home.subtitle.style.textAlign
                    }}>
                      {home.subtitle.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Seção About */}
      {about && (
        <section
          id="about"
          className="section-pattern"
          style={{
            backgroundColor: about.section.background_color
          }}
        >

          <div className="row m-0 py-3 aling-items-center justify-content-start">
            <div className="col-12 d-flex align-items-end text-start border-bottom border-dark">
              <tt
                className='section-title'
                style={{
                  fontFamily: about.section.style.fontFamily,
                  fontWeight: about.section.style.fontWeight,
                  color: about.section.style.color,
                }}
              >
                {about.section.title}
              </tt>
            </div>
          </div>

          <div className="row">

            {renderAbout()}
          </div>
        </section>
      )}

      {/* Seção Products */}
      {product && (
        <section
          id="products"
          className="section-pattern"
          style={{
            backgroundColor: product.product1.section.background_color
          }}
        >

          <div className="row m-0 py-3 aling-items-center justify-content-start">
            <div className="col-12 d-flex align-items-end text-start border-bottom border-dark">
              <tt
                className='section-title'
                style={{
                  fontFamily: product.product1.section.style.fontFamily,
                  fontWeight: product.product1.section.style.fontWeight,
                  color: product.product1.section.style.color,
                }}
              >
                {product.product1.section.title}
              </tt>
            </div>
          </div>

          <div className="row">

            {renderProducts()}
          </div>
        </section>
      )}

      {/* Footer/Profile */}
      {profile && (
        <footer
          id="footer"
          className="section-pattern"
          style={{
            backgroundColor: profile.section.background_color
          }}
        >

          <div className="row m-0 py-3 aling-items-center justify-content-start">
            <div className="col-10 d-flex align-items-end text-start border-bottom border-dark">
              <tt
                className='section-title'
                style={{
                  fontFamily: profile.headline.style.fontFamily,
                  fontWeight: profile.headline.style.fontWeight,
                  color: profile.headline.style.color,
                }}
              >
                {profile.section.title ?? "Nome da empresa"}
              </tt>
            </div>

            <div className="col">
              <div className='row align-items-center justify-content-end'>
                {/* Ícone Google Maps */}
                <div className="col-auto">

                  <button
                    className="icon-button"
                    onClick={() => window.open(profile.company.socialMedia.google, '_blank')}
                    aria-label="Abrir Google Maps"
                  >
                    <i
                      className="icon-google3 social-icon"
                      style={{ color: profile.headline.style.color }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#c1c1c1';
                        e.target.style.transform = 'scale(1.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = profile.headline.style.color;
                        e.target.style.transform = 'scale(1)';
                      }}
                    />
                  </button>
                </div>

                {/* Ícone Facebook */}
                <div className="col-auto">

                  <button
                    className="icon-button mx-3"
                    onClick={() => window.open(profile.company.socialMedia.facebook, '_blank')}
                    aria-label="Acessar Facebook"
                  >
                    <i
                      className="icon-facebook2 social-icon"
                      style={{ color: profile.headline.style.color }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#c1c1c1';
                        e.target.style.transform = 'scale(1.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = profile.headline.style.color;
                        e.target.style.transform = 'scale(1)';
                      }}
                    />
                  </button>
                </div>

                {/* Ícone Instagram */}
                <div className="col-auto">

                  <button
                    className="icon-button"
                    onClick={() => window.open(profile.company.socialMedia.instagram, '_blank')}
                    aria-label="Acessar Instagram"
                  >
                    <i
                      className="icon-instagram social-icon"
                      style={{ color: profile.headline.style.color }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#c1c1c1';
                        e.target.style.transform = 'scale(1.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = profile.headline.style.color;
                        e.target.style.transform = 'scale(1)';
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row m-0 aling-items-center center">

            <div className="col-12 text-center my-5">
              <h1 style={{
                fontFamily: profile.headline.style.fontFamily,
                fontSize: profile.headline.style.fontSize,
                fontWeight: profile.headline.style.fontWeight,
                color: profile.headline.style.color,
                textAlign: profile.headline.style.textAlign
              }}>
                {profile.headline.title}
              </h1>
            </div>

            <div className="col-12">
              <div
                className="row align-items-center justify-content-center"
                style={{
                  borderBottom: `1px solid ${profile.contacts.style.color}`
                }}
              >

                <div className="col-12 col-md-4">

                  <div className="contact-container d-flex flex-column align-items-center justify-content-center">
                    <span className='contact-title my-2'>
                      <i
                        className="icon-phone contact-icon"
                        style={{ color: profile.contacts.style.color }}
                        onMouseEnter={(e) => {
                          e.target.style.color = '#c1c1c1';
                          e.target.style.transform = 'scale(1.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = profile.contacts.style.color;
                          e.target.style.transform = 'scale(1)';
                        }}
                      />
                      Telefone
                    </span>
                    <p
                      style={{
                        fontFamily: profile.contacts.style.fontFamily,
                        fontSize: profile.contacts.style.fontSize,
                        fontWeight: profile.contacts.style.fontWeight,
                        color: profile.contacts.style.color,
                        textAlign: profile.contacts.style.textAlign
                      }}
                    >
                      {profile.contacts.phone}
                    </p>
                  </div>
                </div>

                <div className="col-12 col-md-4">

                  <div
                    className="contact-container d-flex flex-column align-items-center justify-content-center"
                    style={{
                      borderLeft: `1px solid ${profile.contacts.style.color}`,
                      borderRight: `1px solid ${profile.contacts.style.color}`
                    }}
                  >
                    <span className='contact-title my-2'>
                      <i
                        className="icon-whatsapp contact-icon"
                        style={{ color: profile.contacts.style.color }}
                        onMouseEnter={(e) => {
                          e.target.style.color = '#c1c1c1';
                          e.target.style.transform = 'scale(1.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = profile.contacts.style.color;
                          e.target.style.transform = 'scale(1)';
                        }}
                        onClick={() => window.open(`https://wa.me/+55${profile.contacts.whatsapp}`, '_blank')}
                      />
                      WhatsApp
                    </span>
                    <p
                      style={{
                        fontFamily: profile.contacts.style.fontFamily,
                        fontSize: profile.contacts.style.fontSize,
                        fontWeight: profile.contacts.style.fontWeight,
                        color: profile.contacts.style.color,
                        textAlign: profile.contacts.style.textAlign
                      }}
                    >
                      {profile.contacts.whatsapp}
                    </p>
                  </div>
                </div>

                <div className="col-12 col-md-4">

                  <div className="contact-container d-flex flex-column align-items-center justify-content-center">
                    <span className='contact-title my-2'>
                      <i
                        className="icon-mail4 contact-icon"
                        style={{ color: profile.contacts.style.color }}
                        onMouseEnter={(e) => {
                          e.target.style.color = '#c1c1c1';
                          e.target.style.transform = 'scale(1.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = profile.contacts.style.color;
                          e.target.style.transform = 'scale(1)';
                        }}
                      />
                      E-mail
                    </span>
                    <p
                      style={{
                        fontFamily: profile.contacts.style.fontFamily,
                        fontSize: profile.contacts.style.fontSize,
                        fontWeight: profile.contacts.style.fontWeight,
                        color: profile.contacts.style.color,
                        textAlign: profile.contacts.style.textAlign
                      }}
                    >
                      {profile.contacts.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="row my-3">
                <div className="col-10 align-items-center">
                  <span
                    className="d-flex"
                    style={{
                      fontFamily: profile.contacts.style.fontFamily,
                      fontSize: profile.contacts.style.fontSize,
                      fontWeight: profile.contacts.style.fontWeight,
                      color: profile.contacts.style.color,
                      alignItems: profile.contacts.style.textAlign
                    }}
                  >
                    <i
                      className="icon-location contact-icon"
                      style={{ color: profile.contacts.style.color }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#c1c1c1';
                        e.target.style.transform = 'scale(1.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = profile.contacts.style.color;
                        e.target.style.transform = 'scale(1)';
                      }}
                    />
                    {profile.contacts.address}
                  </span>
                </div>

                <div className="col-2 text-end">
                  <button type="button" className="btn btn-primary" onClick={() => navigate('/login')}>Acesso admin</button>
                </div>
              </div>
            </div>
          </div>

        </footer>
      )}
    </div>
  );
};

export default Website;