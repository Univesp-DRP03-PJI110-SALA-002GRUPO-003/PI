import React, { useState } from 'react';
import { letterAlign, letterFamily, letterSeize, letterWeight } from '../Mocks/Estilization';
import "./home.scss";

const AdminHome = () => {
  const [homeData, setHomeData] = useState({
    headline: {
      title: '',
      style: {
        fontFamily: '',
        fontSize: '',
        fontWeight: '',
        textAlign: '',
        color: '#000000'
      }
    },
    subtitle: {
      text: '',
      style: {
        fontFamily: '',
        fontSize: '',
        fontWeight: '',
        textAlign: '',
        color: '#000000'
      }
    },
    background_image: {
      url: '',
      style: {
        height: '',
        width: '',
        align: ''
      }
    },
    logo: {
      url: '',
      style: {
        height: '',
        width: '',
        align: ''
      }
    }
  });

  const handleChange = (e, section, subSection = null, styleType = null) => {
    const { name, value } = e.target;

    setHomeData(prev => {
      const newData = { ...prev };

      if (styleType) {
        newData[section][subSection][styleType] = value;
      } else if (subSection) {
        newData[section][subSection] = value;
      } else {
        newData[section][name] = value;
      }

      return newData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados da home:', homeData);
    // Adicione aqui a lógica para enviar os dados
    alert('Configurações da home salvas com sucesso!');
  };

  // Componente reutilizável para controles de estilo
  const StyleControls = ({ section, styleType }) => (
    <>
      <section className='row aling-items-center'>
        <div className='col-md-6 col-lg-2 col-12'>
          <span className='input-title'>Fonte</span>
        </div>
        <div className='col-md-6 col-lg-2 col-12'>
          <span className='input-title'>Tamanho</span>
        </div>
        <div className='col-md-6 col-lg-2 col-12'>
          <span className='input-title'>Grossura</span>
        </div>
        <div className='col-md-6 col-lg-2 col-12'>
          <span className='input-title'>Alinhamento</span>
        </div>
        <div className='col-md-6 col-lg-2 col-12'>
          <span className='input-title'>Cor</span>
        </div>
      </section>

      <section className='row aling-items-center'>
        <div className='col-md-6 col-lg-2 col-12'>
          <select
            id="text-input"
            value={homeData[section][styleType].fontFamily}
            onChange={(e) => handleChange(e, section, styleType, 'fontFamily')}
          >
            <option value='' disabled>Selecione</option>
            {letterFamily.map((item, index) => (
              <option key={index} value={item.family}>{item.family}</option>
            ))}
          </select>
        </div>

        <div className='col-md-6 col-lg-2 col-12'>
          <select
            id="text-input"
            value={homeData[section][styleType].fontSize}
            onChange={(e) => handleChange(e, section, styleType, 'fontSize')}
          >
            <option value='' disabled>Selecione</option>
            {letterSeize.map((item, index) => (
              <option key={index} value={item.font}>{item.font}</option>
            ))}
          </select>
        </div>

        <div className='col-md-6 col-lg-2 col-12'>
          <select
            id="text-input"
            value={homeData[section][styleType].fontWeight}
            onChange={(e) => handleChange(e, section, styleType, 'fontWeight')}
          >
            <option value='' disabled>Selecione</option>
            {letterWeight.map((item, index) => (
              <option key={index} value={item.weight}>{item.weight}</option>
            ))}
          </select>
        </div>

        <div className='col-md-6 col-lg-2 col-12'>
          <select
            id="text-input"
            value={homeData[section][styleType].textAlign}
            onChange={(e) => handleChange(e, section, styleType, 'textAlign')}
          >
            <option value='' disabled>Selecione</option>
            {letterAlign.map((item, index) => (
              <option key={index} value={item.align}>{item.align}</option>
            ))}
          </select>
        </div>

        <div className='col-md-6 col-lg-2 col-12'>
          <input
            id="text-input"
            type="color"
            value={homeData[section][styleType].color}
            onChange={(e) => handleChange(e, section, styleType, 'color')}
          />
        </div>
      </section>
    </>
  );

  return (
    <div id="admin-home" className="admin-content container">
      <form
        className="admin-form-background row aling-items-center justify-content-center"
        onSubmit={handleSubmit}
        onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
      >
        <section className='col-12'>
          <div className='row aling-items-center justify-content-start p-3 container-border'>

            {/* Seção Headline */}
            <div className='col-12 my-4'>
              <span className='section-title'>Headline</span>
            </div>

            <div className='col-12'>
              <span className='input-title'>Título</span>
            </div>

            <div className='col-12 mb-3'>
              <input
                id="text-input"
                type="text"
                placeholder='Chamada'
                value={homeData.headline.title}
                onChange={(e) => handleChange(e, 'headline', 'title')}
              />
            </div>

            <div className='col-12 py-2'>
              <span className='section-title'>Estilização</span>
            </div>

            <StyleControls section="headline" styleType="style" />

            <hr className='my-4' />

            {/* Seção Subtítulo */}
            <div className='col-12 pb-4'>
              <span className='section-title'>Subtítulo</span>
            </div>

            <div className='col-12'>
              <span className='input-title'>Texto</span>
            </div>

            <div className='col-12 mb-3'>
              <textarea
                id="textarea-input"
                placeholder='Texto'
                value={homeData.subtitle.text}
                onChange={(e) => handleChange(e, 'subtitle', 'text')}
              />
            </div>

            <div className='col-12 py-2'>
              <span className='section-title'>Estilização</span>
            </div>

            <StyleControls section="subtitle" styleType="style" />

            <hr className='my-4' />

            {/* Seção Ilustração */}
            <div className='col-12 mb-4'>
              <span className='section-title'>Ilustração</span>
            </div>

            <div className='col-12'>
              <span className='input-title'>URL da ilustração</span>
            </div>

            <div className='col-12 mb-3'>
              <input
                id="text-input"
                type="text"
                placeholder='Url pública'
                value={homeData.illustration.url}
                onChange={(e) => handleChange(e, 'illustration', 'url')}
              />
            </div>

            <div className='col-12 py-2'>
              <span className='section-title'>Estilização</span>
            </div>

            <div className='col-12'>
              <div className='row aling-items-center'>
                <div className='col-4'>
                  <span className='input-title'>Altura (px)</span>
                </div>
                <div className='col-4'>
                  <span className='input-title'>Largura (px)</span>
                </div>
                <div className='col-4'>
                  <span className='input-title'>Alinhamento</span>
                </div>

                <div className='col-4 mb-3'>
                  <input
                    id="text-input"
                    type="number"
                    step={1}
                    placeholder='0'
                    value={homeData.illustration.style.height}
                    onChange={(e) => handleChange(e, 'illustration', 'style', 'height')}
                  />
                </div>

                <div className='col-4 mb-3'>
                  <input
                    id="text-input"
                    type="number"
                    step={1}
                    placeholder='0'
                    value={homeData.illustration.style.width}
                    onChange={(e) => handleChange(e, 'illustration', 'style', 'width')}
                  />
                </div>

                <div className='col-4'>
                  <select
                    id="text-input"
                    value={homeData.illustration.style.align}
                    onChange={(e) => handleChange(e, 'illustration', 'style', 'align')}
                  >
                    <option value='' disabled>Selecione</option>
                    {letterAlign.map((item, index) => (
                      <option key={index} value={item.align}>{item.align}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Botão de submit */}
            <div className='col-12 mt-4'>
              <button type="submit" className="btn btn-primary">
                Salvar Home
              </button>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default AdminHome;