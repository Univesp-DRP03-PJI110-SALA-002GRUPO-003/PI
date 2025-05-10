import React, { useState } from 'react';
import { letterAlign, letterFamily, letterSeize, letterWeight } from '../Mocks/Estilization';
import "./Profile.scss";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    company: {
      name: '',
      socialMedia: {
        google: '',
        facebook: '',
        instagram: ''
      }
    },
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
    contacts: {
      phone: '',
      whatsapp: '',
      email: '',
      address: '',
      style: {
        fontFamily: '',
        fontSize: '',
        fontWeight: '',
        textAlign: '',
        color: '#000000'
      }
    }
  });

  const handleChange = (e, section, subSection = null, styleType = null) => {
    const { name, value } = e.target;
    
    setProfileData(prev => {
      const newData = {...prev};
      
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
    console.log('Dados do perfil:', profileData);
    // Adicione aqui a lógica para enviar os dados
    alert('Perfil salvo com sucesso!');
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
            value={profileData[section][styleType].fontFamily}
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
            value={profileData[section][styleType].fontSize}
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
            value={profileData[section][styleType].fontWeight}
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
            value={profileData[section][styleType].textAlign}
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
            value={profileData[section][styleType].color}
            onChange={(e) => handleChange(e, section, styleType, 'color')}
          />
        </div>
      </section>
    </>
  );

  return (
    <div id="admin-profile" className="admin-content container">
      <form
        className="admin-form-background row aling-items-center justify-content-center"
        onSubmit={handleSubmit}
        onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
      >
        <section className='col-12'>
          <div className='row aling-items-center justify-content-start p-3 container-border'>

            {/* Seção Redes Sociais */}
            <div className='col-12 my-4'>
              <span className='section-title'>Redes sociais</span>
            </div>

            <div className='col-12'>
              <span className='input-title'>Nome da empresa</span>
            </div>

            <div className='col-12 mb-3'>
              <input
                id="text-input"
                type="text"
                placeholder='Nome da empresa'
                value={profileData.company.name}
                onChange={(e) => handleChange(e, 'company', 'name')}
              />
            </div>

            <section className='row aling-items-center'>
              <div className='col-md-4 col-12'>
                <span className='input-title'>Google</span>
              </div>
              <div className='col-md-4 col-12'>
                <span className='input-title'>Facebook</span>
              </div>
              <div className='col-md-4 col-12'>
                <span className='input-title'>Instagram</span>
              </div>
            </section>

            <section className='row aling-items-center'>
              <div className='col-md-4 col-12 mb-3'>
                <input
                  id="text-input"
                  type="text"
                  placeholder='URL do Google'
                  value={profileData.company.socialMedia.google}
                  onChange={(e) => handleChange(e, 'company', 'socialMedia', 'google')}
                />
              </div>
              <div className='col-md-4 col-12 mb-3'>
                <input
                  id="text-input"
                  type="text"
                  placeholder='URL do Facebook'
                  value={profileData.company.socialMedia.facebook}
                  onChange={(e) => handleChange(e, 'company', 'socialMedia', 'facebook')}
                />
              </div>
              <div className='col-md-4 col-12 mb-3'>
                <input
                  id="text-input"
                  type="text"
                  placeholder='URL do Instagram'
                  value={profileData.company.socialMedia.instagram}
                  onChange={(e) => handleChange(e, 'company', 'socialMedia', 'instagram')}
                />
              </div>
            </section>

            <hr className='my-4'/>

            {/* Seção Headline */}
            <div className='col-12 mb-4'>
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
                value={profileData.headline.title}
                onChange={(e) => handleChange(e, 'headline', 'title')}
              />
            </div>

            <div className='col-12 py-2'>
              <span className='section-title'>Estilização</span>
            </div>

            <StyleControls section="headline" styleType="style" />

            <hr className='my-4'/>

            {/* Seção Contatos */}
            <div className='col-12 my-4'>
              <span className='section-title'>Contatos</span>
            </div>

            <section className='row aling-items-center'>
              <div className='col-md-4 col-12'>
                <span className='input-title'>Telefone</span>
              </div>
              <div className='col-md-4 col-12'>
                <span className='input-title'>WhatsApp</span>
              </div>
              <div className='col-md-4 col-12'>
                <span className='input-title'>E-mail</span>
              </div>
            </section>

            <section className='row aling-items-center'>
              <div className='col-md-4 col-12 mb-3'>
                <input
                  id="text-input"
                  type="tel"
                  name="phone"
                  placeholder='(00) 00000-0000'
                  value={profileData.contacts.phone}
                  onChange={(e) => handleChange(e, 'contacts', 'phone')}
                />
              </div>
              <div className='col-md-4 col-12 mb-3'>
                <input
                  id="text-input"
                  type="tel"
                  name="whatsapp"
                  placeholder='(00) 00000-0000'
                  value={profileData.contacts.whatsapp}
                  onChange={(e) => handleChange(e, 'contacts', 'whatsapp')}
                  maxLength={11}
                />
              </div>
              <div className='col-md-4 col-12 mb-3'>
                <input
                  id="text-input"
                  type="email"
                  name="email"
                  placeholder='E-mail'
                  value={profileData.contacts.email}
                  onChange={(e) => handleChange(e, 'contacts', 'email')}
                />
              </div>
            </section>

            <div className='col-12'>
              <span className='input-title'>Endereço</span>
            </div>

            <div className='col-12 mb-3'>
              <input
                id="text-input"
                type="text"
                name="address"
                placeholder='Endereço completo'
                value={profileData.contacts.address}
                onChange={(e) => handleChange(e, 'contacts', 'address')}
              />
            </div>

            <div className='col-12 py-2'>
              <span className='section-title'>Estilização</span>
            </div>

            <StyleControls section="contacts" styleType="style" />

            {/* Botão de submit */}
            <div className='col-12 mt-4'>
              <button type="submit" className="btn btn-primary">
                Salvar Perfil
              </button>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Profile;