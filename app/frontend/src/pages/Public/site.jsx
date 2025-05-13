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
        align: 'left'
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
        align: 'right'
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