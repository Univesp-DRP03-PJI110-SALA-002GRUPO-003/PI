import React from 'react';
import "./site.scss";
// import { useHomeData, useAboutData, useProductsData, useProfileData } from '../admin/hooks'; // Hooks das telas admin

const Website = () => {
  // Consome os dados definidos nas telas administrativas
  // const { homeData } = useHomeData();
  // const { aboutData } = useAboutData();
  // const { productsData } = useProductsData();
  // const { profileData } = useProfileData();

  const homeData = {
    section: {
      background_color: '#ffff',
    },
    background_image: {
      url: "data:image/jpeg;base64,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",
    },
    logo: {
      url: "https://www.citypng.com/public/uploads/preview/lamborghini-black-logo-png-701751694773088y5vbex4kvp.png",
      style: {
        height: '300px',
        width: '300px',
        align: 'center'
      }
    },
    headline: {
      title: "SUA EMPRESA AQUI",
      style: {
        fontFamily: 'Roboto',
        fontSize: '30px',
        fontWeight: '800',
        textAlign: 'center',
        color: '#fff'
      }
    },
    subtitle: {
      text: "Soluções inovadoras para seu negócio",
      style: {
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: '400',
        textAlign: 'center',
        color: '#fff'
      }
    }
  };

  const profileData = {
    section: {
      title: 'Nossos contatos',
      background_color: '#b1b1b1',
      style: {
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: '400',
        textAlign: 'center',
        color: '#000000'
      }
    },
    company: {
      name: "Minha Empresa",
      socialMedia: {
        google: "https://www.google.com",
        facebook: "https://www.facebook.com",
        instagram: "https://www.instagram.com"
      }
    },
    headline: {
      title: "Sobre a minha empresa",
      style: {
        fontFamily: 'Arial',
        fontSize: '20px',
        fontWeight: '800',
        textAlign: 'center',
        color: '#101bb3'
      }
    },
    contacts: {
      phone: "(11) 1234-5678",
      whatsapp: "(11) 98765-4321",
      email: "WY4oO@example.com",
      address: "Rua Exemplo, 123 - Bairro Exemplo",
      style: {
        fontFamily: 'Arial',
        fontSize: '14px',
        fontWeight: '400',
        textAlign: 'left',
        color: '#108087'
      }
    }
  };

  const aboutData = {
    section: {
      title: 'História de Papel Recriado',
      background_color: '#a91919',
      style: {
        fontFamily: 'Times New Roman',
        fontSize: '16px',
        fontWeight: '800',
        textAlign: 'center',
        color: '#c2c2c2'
      }
    },
    headline: {
      title: "Bem-vindo à nossa plataforma",
      style: {
        fontFamily: 'Arial',
        fontSize: '20px',
        fontWeight: '800',
        textAlign: 'center',
        color: '#000000'
      }
    },
    subtitle: {
      text: "Soluções inovadoras para seu negócio",
      style: {
        fontFamily: 'Arial',
        fontSize: '14px',
        fontWeight: '400',
        textAlign: 'left',
        color: '#000000'
      }
    },
    illustration: {
      url: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/6192/live/61bb3530-f641-11ee-91c5-c92e09ae6ba7.jpg.webp",
      style: {
        height: '300px',
        width: '300px',
        align: 'left'
      }
    }
  };

  const productsData = {
    product1: {
      section: {
        title: 'Nossos produtos',
        background_color: '#2719a9',
        style: {
          fontFamily: 'Arial',
          fontSize: '16px',
          fontWeight: '500',
          textAlign: 'center',
          color: '#000000'
        }
      },
      title: "Smartphone Premium",
      titleStyle: {
        fontFamily: "'Roboto', sans-serif",
        fontSize: "1.8rem",
        fontWeight: "700",
        textAlign: "left",
        color: "#2c3e50"
      },
      details: "O mais avançado smartphone do mercado com câmera tripla de 108MP, processador Snapdragon 8 Gen 2 e tela AMOLED de 120Hz.",
      detailsStyle: {
        fontFamily: "'Open Sans', sans-serif",
        fontSize: "1rem",
        fontWeight: "400",
        textAlign: "left",
        color: "#7f8c8d"
      },
      illustrationUrl: "data:image/jpeg;base64,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",
      illustrationStyle: {
        height: "400",
        width: "600",
        align: "left"
      }
    },
    product2: {
      title: "Notebook Ultrafino",
      titleStyle: {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "2rem",
        fontWeight: "600",
        textAlign: "right",
        color: "#e74c3c"
      },
      details: "Notbook com tela de 14\" 4K, processador Intel Core i9, 32GB RAM e 1TB SSD. Design ultraleve de apenas 1,2kg.",
      detailsStyle: {
        fontFamily: "'Lato', sans-serif",
        fontSize: "1.1rem",
        fontWeight: "300",
        textAlign: "right",
        color: "#34495e"
      },
      illustrationUrl: "data:image/jpeg;base64,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",
      illustrationStyle: {
        height: "500",
        width: "800",
        align: "right"
      }
    }
  };

  const renderAbout = () => {
    return (
      <div className="row mt-4">

        {aboutData.illustration.style.align === 'center' ? (
          <>
            <div className="col-12 text-center">
              <img
                src={aboutData.illustration.url}
                alt="Ilustração"
                style={{
                  height: aboutData.illustration.style.height ? `${aboutData.illustration.style.height}px` : 'auto',
                  width: aboutData.illustration.style.width ? `${aboutData.illustration.style.width}px` : '100%',
                  maxWidth: '100%'
                }}
                className="mb-4"
              />
            </div>

            <div className="col-12">

              <div className="mb-4">
                <h1 style={{
                  fontFamily: aboutData.headline.style.fontFamily,
                  fontSize: aboutData.headline.style.fontSize,
                  fontWeight: aboutData.headline.style.fontWeight,
                  color: aboutData.headline.style.color,
                  textAlign: aboutData.headline.style.textAlign
                }}>
                  {aboutData.headline.title}
                </h1>

                <p style={{
                  fontFamily: aboutData.subtitle.style.fontFamily,
                  fontSize: aboutData.subtitle.style.fontSize,
                  fontWeight: aboutData.subtitle.style.fontWeight,
                  color: aboutData.subtitle.style.color,
                  textAlign: aboutData.subtitle.style.textAlign
                }}>
                  {aboutData.subtitle.text}
                </p>
              </div>
            </div>
          </>

        ) : (
          aboutData.illustration.style.align === 'left') ? (

          <>
            <div className="col-auto">
              <img
                src={aboutData.illustration.url}
                alt="Ilustração"
                style={{
                  height: aboutData.illustration.style.height ? `${aboutData.illustration.style.height}px` : 'auto',
                  width: aboutData.illustration.style.width ? `${aboutData.illustration.style.width}px` : 'auto',
                  maxHeight: '500px'
                }}
              />
            </div>

            <div className="col">
              <div className="d-flex flex-column">

                <div className="mb-4">
                  <h1 style={{
                    fontFamily: aboutData.headline.style.fontFamily,
                    fontSize: aboutData.headline.style.fontSize,
                    fontWeight: aboutData.headline.style.fontWeight,
                    color: aboutData.headline.style.color,
                    textAlign: aboutData.headline.style.textAlign
                  }}>
                    {aboutData.headline.title}
                  </h1>
                </div>

                <div>
                  <p style={{
                    fontFamily: aboutData.subtitle.style.fontFamily,
                    fontSize: aboutData.subtitle.style.fontSize,
                    fontWeight: aboutData.subtitle.style.fontWeight,
                    color: aboutData.subtitle.style.color,
                    textAlign: aboutData.subtitle.style.textAlign
                  }}>
                    {aboutData.subtitle.text}
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
                    fontFamily: aboutData.headline.style.fontFamily,
                    fontSize: aboutData.headline.style.fontSize,
                    fontWeight: aboutData.headline.style.fontWeight,
                    color: aboutData.headline.style.color,
                    textAlign: aboutData.headline.style.textAlign
                  }}>
                    {aboutData.headline.title}
                  </h1>
                </div>

                <div>
                  <p style={{
                    fontFamily: aboutData.subtitle.style.fontFamily,
                    fontSize: aboutData.subtitle.style.fontSize,
                    fontWeight: aboutData.subtitle.style.fontWeight,
                    color: aboutData.subtitle.style.color,
                    textAlign: aboutData.subtitle.style.textAlign
                  }}>
                    {aboutData.subtitle.text}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-auto">
              <img
                src={aboutData.illustration.url}
                alt="Ilustração"
                style={{
                  height: aboutData.illustration.style.height ? `${aboutData.illustration.style.height}px` : 'auto',
                  width: aboutData.illustration.style.width ? `${aboutData.illustration.style.width}px` : 'auto',
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
    return Object.values(productsData).map((product, index) => (

      <div
        className="col-12 mb-5"
        key={`product-${index}`}
      >

        <div className="row">
          {product.illustrationStyle.align === 'center' ? (
            <>

              <div className="col-12 text-center">
                <img
                  src={product.illustrationUrl}
                  alt={product.title}
                  style={{
                    height: product.illustrationStyle.height ? `${product.illustrationStyle.height}px` : 'auto',
                    width: product.illustrationStyle.width ? `${product.illustrationStyle.width}px` : '100%',
                    maxWidth: '100%'
                  }}
                  className="mb-4"
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
      <section
        id="home"
        style={{
          backgroundColor: homeData.section.background_color
        }}
      >

        <div
          className="banner-container"
          style={{
            backgroundImage: `url(${homeData.background_image.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >

          <div className="banner-content">
            <div className="logo-container">

              <img
                className="logo"
                style={{
                  height: homeData.logo.style.height ? `${homeData.logo.style.height}px` : 'auto',
                  width: homeData.logo.style.width ? `${homeData.logo.style.width}px` : 'auto',
                }}
                src={homeData.logo.url}
                alt="Logo"
              />
            </div>
            <div className="banner-text">
              <div className="col-12 text-center">

                <div className="headline-wrapper">
                  <h1
                    className='mb-4'
                    style={{
                      fontFamily: homeData.headline.style.fontFamily,
                      fontSize: homeData.headline.style.fontSize,
                      fontWeight: homeData.headline.style.fontWeight,
                      color: homeData.headline.style.color,
                      textAlign: homeData.headline.style.textAlign
                    }}>
                    {homeData.headline.title}
                  </h1>

                  <p style={{
                    fontFamily: homeData.subtitle.style.fontFamily,
                    fontSize: homeData.subtitle.style.fontSize,
                    fontWeight: homeData.subtitle.style.fontWeight,
                    color: homeData.subtitle.style.color,
                    textAlign: homeData.subtitle.style.textAlign
                  }}>
                    {homeData.subtitle.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção About */}
      <section
        id="about"
        className="section-pattern"
        style={{
          backgroundColor: aboutData.section.background_color
        }}
      >

        <div className="row m-0 py-3 aling-items-center justify-content-start">
          <div className="col-12 d-flex align-items-end text-start border-bottom border-dark">
            <tt
              className='section-title'
              style={{
                fontFamily: aboutData.section.style.fontFamily,
                fontWeight: aboutData.section.style.fontWeight,
                color: aboutData.section.style.color,
              }}
            >
              {aboutData.section.title}
            </tt>
          </div>
        </div>

        <div className="row">

          {renderAbout()}
        </div>
      </section>

      {/* Seção Products */}
      <section
        id="products"
        className="section-pattern"
        style={{
          backgroundColor: productsData.product1.section.background_color
        }}
      >

        <div className="row m-0 py-3 aling-items-center justify-content-start">
          <div className="col-12 d-flex align-items-end text-start border-bottom border-dark">
            <tt
              className='section-title'
              style={{
                fontFamily: productsData.product1.section.style.fontFamily,
                fontWeight: productsData.product1.section.style.fontWeight,
                color: productsData.product1.section.style.color,
              }}
            >
              {productsData.product1.section.title}
            </tt>
          </div>
        </div>

        <div className="row">

          {renderProducts()}
        </div>
      </section>

      {/* Footer/Profile */}
      <footer
        id="footer"
        className="section-pattern"
        style={{
          backgroundColor: profileData.section.background_color
        }}
      >

        <div className="row m-0 py-3 aling-items-center justify-content-start">
          <div className="col-10 d-flex align-items-end text-start border-bottom border-dark">
            <tt
              className='section-title'
              style={{
                fontFamily: profileData.headline.style.fontFamily,
                fontWeight: profileData.headline.style.fontWeight,
                color: profileData.headline.style.color,
              }}
            >
              {profileData.section.title ?? "Nome da empresa"}
            </tt>
          </div>

          <div className="col">
            <div className='row align-items-center justify-content-end'>
              {/* Ícone Google Maps */}
              <div className="col-auto">

                <button
                  className="icon-button"
                  onClick={() => window.open(profileData.company.socialMedia.googleMaps, '_blank')}
                  aria-label="Abrir Google Maps"
                >
                  <i
                    className="icon-google3 social-icon"
                    style={{ color: profileData.headline.style.color }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#c1c1c1';
                      e.target.style.transform = 'scale(1.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = profileData.headline.style.color;
                      e.target.style.transform = 'scale(1)';
                    }}
                  />
                </button>
              </div>

              {/* Ícone Facebook */}
              <div className="col-auto">

                <button
                  className="icon-button mx-3"
                  onClick={() => window.open(profileData.company.socialMedia.facebook, '_blank')}
                  aria-label="Acessar Facebook"
                >
                  <i
                    className="icon-facebook2 social-icon"
                    style={{ color: profileData.headline.style.color }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#c1c1c1';
                      e.target.style.transform = 'scale(1.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = profileData.headline.style.color;
                      e.target.style.transform = 'scale(1)';
                    }}
                  />
                </button>
              </div>

              {/* Ícone Instagram */}
              <div className="col-auto">

                <button
                  className="icon-button"
                  onClick={() => window.open(profileData.company.socialMedia.instagram, '_blank')}
                  aria-label="Acessar Instagram"
                >
                  <i
                    className="icon-instagram social-icon"
                    style={{ color: profileData.headline.style.color }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#c1c1c1';
                      e.target.style.transform = 'scale(1.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = profileData.headline.style.color;
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
              fontFamily: profileData.headline.style.fontFamily,
              fontSize: profileData.headline.style.fontSize,
              fontWeight: profileData.headline.style.fontWeight,
              color: profileData.headline.style.color,
              textAlign: profileData.headline.style.textAlign
            }}>
              {profileData.headline.title}
            </h1>
          </div>

          <div className="col-12">
            <div
              className="row align-items-center justify-content-center"
              style={{
                borderBottom: `1px solid ${profileData.contacts.style.color}`
              }}
            >

              <div className="col-12 col-md-4">

                <div className="contact-container d-flex flex-column align-items-center justify-content-center">
                  <span className='contact-title my-2'>
                    <i
                      className="icon-phone contact-icon"
                      style={{ color: profileData.contacts.style.color }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#c1c1c1';
                        e.target.style.transform = 'scale(1.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = profileData.contacts.style.color;
                        e.target.style.transform = 'scale(1)';
                      }}
                    />
                    Telefone
                  </span>
                  <p
                    style={{
                      fontFamily: profileData.contacts.style.fontFamily,
                      fontSize: profileData.contacts.style.fontSize,
                      fontWeight: profileData.contacts.style.fontWeight,
                      color: profileData.contacts.style.color,
                      textAlign: profileData.contacts.style.textAlign
                    }}
                  >
                    {profileData.contacts.phone}
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-4">

                <div
                  className="contact-container d-flex flex-column align-items-center justify-content-center"
                  style={{
                    borderLeft: `1px solid ${profileData.contacts.style.color}`,
                    borderRight: `1px solid ${profileData.contacts.style.color}`
                  }}
                >
                  <span className='contact-title my-2'>
                    <i
                      className="icon-whatsapp contact-icon"
                      style={{ color: profileData.contacts.style.color }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#c1c1c1';
                        e.target.style.transform = 'scale(1.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = profileData.contacts.style.color;
                        e.target.style.transform = 'scale(1)';
                      }}
                      onClick={() => window.open(`https://wa.me/+55${profileData.contacts.whatsapp}`, '_blank')}
                    />
                    WhatsApp
                  </span>
                  <p
                    style={{
                      fontFamily: profileData.contacts.style.fontFamily,
                      fontSize: profileData.contacts.style.fontSize,
                      fontWeight: profileData.contacts.style.fontWeight,
                      color: profileData.contacts.style.color,
                      textAlign: profileData.contacts.style.textAlign
                    }}
                  >
                    {profileData.contacts.whatsapp}
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-4">

                <div className="contact-container d-flex flex-column align-items-center justify-content-center">
                  <span className='contact-title my-2'>
                    <i
                      className="icon-mail4 contact-icon"
                      style={{ color: profileData.contacts.style.color }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#c1c1c1';
                        e.target.style.transform = 'scale(1.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = profileData.contacts.style.color;
                        e.target.style.transform = 'scale(1)';
                      }}
                    />
                    E-mail
                  </span>
                  <p
                    style={{
                      fontFamily: profileData.contacts.style.fontFamily,
                      fontSize: profileData.contacts.style.fontSize,
                      fontWeight: profileData.contacts.style.fontWeight,
                      color: profileData.contacts.style.color,
                      textAlign: profileData.contacts.style.textAlign
                    }}
                  >
                    {profileData.contacts.email}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 align-items-center justify-content-center my-3">
              <span
                className="d-flex"
                style={{
                  fontFamily: profileData.contacts.style.fontFamily,
                  fontSize: profileData.contacts.style.fontSize,
                  fontWeight: profileData.contacts.style.fontWeight,
                  color: profileData.contacts.style.color,
                  alignItems: profileData.contacts.style.textAlign
                }}
              >
                <i
                  className="icon-location contact-icon"
                  style={{ color: profileData.contacts.style.color }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#c1c1c1';
                    e.target.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = profileData.contacts.style.color;
                    e.target.style.transform = 'scale(1)';
                  }}
                />
                {profileData.contacts.address}
              </span>
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
};

export default Website;