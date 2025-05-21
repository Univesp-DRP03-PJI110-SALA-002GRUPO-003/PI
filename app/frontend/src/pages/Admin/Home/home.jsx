import React, { useState, useEffect } from 'react';
import { letterAlign, letterFamily, letterSeize, letterWeight } from '../Mocks/Estilization';
import "./home.scss";
import { dbClient } from "../../../services/db";

const AdminHome = () => {
  const [homeData, setHomeData] = useState({
    section: {
      background_color: '#ffff',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Dados da home:', homeData);
    // Adicione aqui a lógica para enviar os dados
    const formattedHome = JSON.stringify(homeData);
    console.log(formattedHome);

    const response = await dbClient.from('page')
      .update({
        content: formattedHome
      })
      .eq('id_user', 1)
      .eq('page_name', 'home')

    if (response.error) {
      console.error();
    } else {

      console.log(response.data);
      alert('Configurações da home salvas com sucesso!');
      return response.data;
    }
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await dbClient.from('page')
        .select('content')
        .eq('id_user', 1)
        .eq('page_name', 'home')

      if (response.error) {
        console.error();
      } else {

        const formattedHome = JSON.parse(response.data[0].content);
        console.log(formattedHome);
        return setHomeData(formattedHome);
      }
    }

    fetch();
  }, []);


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
          <div
            className='row aling-items-center justify-content-start p-3 container-border'
            style={{
              backgroundColor: homeData.section.background_color
            }}
          >

            <div className='col-12'>
              <span className='section-title'>Cor de fundo da sessão</span>
            </div>

            <div className='col-1 mb-3'>
              <input
                id="text-input"
                type="color"
                value={homeData.section.background_color}
                onChange={(e) => handleChange(e, 'section', 'background_color')}
              />
            </div>

            <hr className='my-4' />

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
              <span className='section-title'>Banner</span>
            </div>

            <div className='col-12'>
              <span className='input-title'>URL do banner</span>
            </div>

            <div className='col-12 mb-3'>
              <input
                id="text-input"
                type="text"
                placeholder='Url pública'
                value={homeData.background_image.url}
                onChange={(e) => handleChange(e, 'background_image', 'url')}
              />
            </div>

            <div className='col-12 mb-4'>
              <span className='section-title'>Logo</span>
            </div>

            <div className='col-12'>
              <span className='input-title'>URL do logo</span>
            </div>

            <div className='col-12 mb-3'>
              <input
                id="text-input"
                type="text"
                placeholder='Url pública'
                value={homeData.logo.url}
                onChange={(e) => handleChange(e, 'logo', 'url')}
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
                    value={homeData.logo.style.height}
                    onChange={(e) => handleChange(e, 'logo', 'style', 'height')}
                  />
                </div>

                <div className='col-4 mb-3'>
                  <input
                    id="text-input"
                    type="number"
                    step={1}
                    placeholder='0'
                    value={homeData.logo.style.width}
                    onChange={(e) => handleChange(e, 'logo', 'style', 'width')}
                  />
                </div>

                <div className='col-4'>
                  <select
                    id="text-input"
                    value={homeData.logo.style.align}
                    onChange={(e) => handleChange(e, 'logo', 'style', 'align')}
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

// import React, { useState, useEffect } from 'react';
// import { letterAlign, letterFamily, letterSeize, letterWeight } from '../Mocks/Estilization';
// import "./home.scss";
// import { dbClient } from "../../../services/db";

// // Estrutura padrão para garantir que sempre existam os campos necessários
// const DEFAULT_HOME_DATA = {
//   section: {
//     background_color: '#ffffff',
//   },
//   headline: {
//     title: '',
//     style: {
//       fontFamily: '',
//       fontSize: '',
//       fontWeight: '',
//       textAlign: '',
//       color: '#000000'
//     }
//   },
//   subtitle: {
//     text: '',
//     style: {
//       fontFamily: '',
//       fontSize: '',
//       fontWeight: '',
//       textAlign: '',
//       color: '#000000'
//     }
//   },
//   background_image: {
//     url: '',
//   },
//   logo: {
//     url: '',
//     style: {
//       height: '',
//       width: '',
//       align: ''
//     }
//   }
// };

// const AdminHome = () => {
//   const [homeData, setHomeData] = useState(DEFAULT_HOME_DATA);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Função para mesclar dados recebidos com a estrutura padrão
//   const mergeWithDefault = (apiData) => {
//     return {
//       ...DEFAULT_HOME_DATA,
//       ...apiData,
//       section: {
//         ...DEFAULT_HOME_DATA.section,
//         ...(apiData.section || {})
//       },
//       headline: {
//         ...DEFAULT_HOME_DATA.headline,
//         ...(apiData.headline || {}),
//         style: {
//           ...DEFAULT_HOME_DATA.headline.style,
//           ...(apiData.headline?.style || {})
//         }
//       },
//       subtitle: {
//         ...DEFAULT_HOME_DATA.subtitle,
//         ...(apiData.subtitle || {}),
//         style: {
//           ...DEFAULT_HOME_DATA.subtitle.style,
//           ...(apiData.subtitle?.style || {})
//         }
//       },
//       background_image: {
//         ...DEFAULT_HOME_DATA.background_image,
//         ...(apiData.background_image || {})
//       },
//       logo: {
//         ...DEFAULT_HOME_DATA.logo,
//         ...(apiData.logo || {}),
//         style: {
//           ...DEFAULT_HOME_DATA.logo.style,
//           ...(apiData.logo?.style || {})
//         }
//       }
//     };
//   };

//   const handleChange = (e, section, subSection = null, styleType = null) => {
//     const { name, value } = e.target;

//     setHomeData(prev => {
//       const newData = JSON.parse(JSON.stringify(prev)); // Deep clone

//       if (styleType) {
//         if (!newData[section][subSection]) {
//           newData[section][subSection] = {};
//         }
//         newData[section][subSection][styleType] = value;
//       } else if (subSection) {
//         newData[section][subSection] = value;
//       } else {
//         newData[section][name] = value;
//       }

//       return newData;
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formattedHome = JSON.stringify(homeData);
      
//       const response = await dbClient.from('page')
//         .update({ content: formattedHome })
//         .eq('id_user', 1, 'page_name', 'home')
//         // .eq('page_name', 'home');

//       if (response.error) {
//         throw response.error;
//       }

//       alert('Configurações da home salvas com sucesso!');
//     } catch (err) {
//       console.error('Erro ao salvar:', err);
//       alert('Erro ao salvar as configurações');
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       setError(null);
      
//       try {
//         const response = await dbClient.from('page')
//           .select('content')
//           .eq('id_user', 1)
//           .eq('page_name', 'home');

//         if (response.error) {
//           throw response.error;
//         }

//         if (response.data && response.data.length > 0 && response.data[0].content) {
//           const apiData = JSON.parse(response.data[0].content);
//           setHomeData(mergeWithDefault(apiData));
//         } else {
//           setHomeData(DEFAULT_HOME_DATA);
//         }
//       } catch (err) {
//         console.error('Erro ao carregar:', err);
//         setError('Erro ao carregar dados');
//         setHomeData(DEFAULT_HOME_DATA);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Componente reutilizável para controles de estilo com proteção contra undefined
//   const StyleControls = ({ section, styleType }) => {
//     // Verifica se a estrutura de dados existe
//     if (!homeData[section] || !homeData[section][styleType]) {
//       return (
//         <div className="col-12 text-danger mb-3">
//           Estrutura de dados inválida para {section}.{styleType}
//         </div>
//       );
//     }

//     return (
//       <>
//         <section className='row aling-items-center'>
//           <div className='col-md-6 col-lg-2 col-12'>
//             <span className='input-title'>Fonte</span>
//           </div>
//           <div className='col-md-6 col-lg-2 col-12'>
//             <span className='input-title'>Tamanho</span>
//           </div>
//           <div className='col-md-6 col-lg-2 col-12'>
//             <span className='input-title'>Grossura</span>
//           </div>
//           <div className='col-md-6 col-lg-2 col-12'>
//             <span className='input-title'>Alinhamento</span>
//           </div>
//           <div className='col-md-6 col-lg-2 col-12'>
//             <span className='input-title'>Cor</span>
//           </div>
//         </section>

//         <section className='row aling-items-center'>
//           <div className='col-md-6 col-lg-2 col-12'>
//             <select
//               id="text-input"
//               value={homeData[section][styleType].fontFamily || ''}
//               onChange={(e) => handleChange(e, section, styleType, 'fontFamily')}
//             >
//               <option value='' disabled>Selecione</option>
//               {letterFamily.map((item, index) => (
//                 <option key={index} value={item.family}>{item.family}</option>
//               ))}
//             </select>
//           </div>

//           <div className='col-md-6 col-lg-2 col-12'>
//             <select
//               id="text-input"
//               value={homeData[section][styleType].fontSize || ''}
//               onChange={(e) => handleChange(e, section, styleType, 'fontSize')}
//             >
//               <option value='' disabled>Selecione</option>
//               {letterSeize.map((item, index) => (
//                 <option key={index} value={item.font}>{item.font}</option>
//               ))}
//             </select>
//           </div>

//           <div className='col-md-6 col-lg-2 col-12'>
//             <select
//               id="text-input"
//               value={homeData[section][styleType].fontWeight || ''}
//               onChange={(e) => handleChange(e, section, styleType, 'fontWeight')}
//             >
//               <option value='' disabled>Selecione</option>
//               {letterWeight.map((item, index) => (
//                 <option key={index} value={item.weight}>{item.weight}</option>
//               ))}
//             </select>
//           </div>

//           <div className='col-md-6 col-lg-2 col-12'>
//             <select
//               id="text-input"
//               value={homeData[section][styleType].textAlign || ''}
//               onChange={(e) => handleChange(e, section, styleType, 'textAlign')}
//             >
//               <option value='' disabled>Selecione</option>
//               {letterAlign.map((item, index) => (
//                 <option key={index} value={item.align}>{item.align}</option>
//               ))}
//             </select>
//           </div>

//           <div className='col-md-6 col-lg-2 col-12'>
//             <input
//               id="text-input"
//               type="color"
//               value={homeData[section][styleType].color || '#000000'}
//               onChange={(e) => handleChange(e, section, styleType, 'color')}
//             />
//           </div>
//         </section>
//       </>
//     );
//   };

//   if (isLoading) {
//     return (
//       <div className="admin-content container d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Carregando...</span>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="admin-content container text-danger text-center py-5">
//         <h4>{error}</h4>
//         <button 
//           className="btn btn-primary mt-3"
//           onClick={() => window.location.reload()}
//         >
//           Tentar novamente
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div id="admin-home" className="admin-content container">
//       <form
//         className="admin-form-background row aling-items-center justify-content-center"
//         onSubmit={handleSubmit}
//         onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
//       >
//         <section className='col-12'>
//           <div
//             className='row aling-items-center justify-content-start p-3 container-border'
//             style={{
//               backgroundColor: homeData.section.background_color || '#ffffff'
//             }}
//           >
//             <div className='col-12'>
//               <span className='section-title'>Cor de fundo da sessão</span>
//             </div>

//             <div className='col-1 mb-3'>
//               <input
//                 id="text-input"
//                 type="color"
//                 value={homeData.section.background_color || '#ffffff'}
//                 onChange={(e) => handleChange(e, 'section', 'background_color')}
//               />
//             </div>

//             <hr className='my-4' />

//             {/* Seção Headline */}
//             <div className='col-12 mb-4'>
//               <span className='section-title'>Headline</span>
//             </div>

//             <div className='col-12'>
//               <span className='input-title'>Título</span>
//             </div>

//             <div className='col-12 mb-3'>
//               <input
//                 id="text-input"
//                 type="text"
//                 placeholder='Chamada'
//                 value={homeData.headline.title || ''}
//                 onChange={(e) => handleChange(e, 'headline', 'title')}
//               />
//             </div>

//             <div className='col-12 py-2'>
//               <span className='section-title'>Estilização</span>
//             </div>

//             <StyleControls section="headline" styleType="style" />

//             <hr className='my-4' />

//             {/* Seção Subtítulo */}
//             <div className='col-12 pb-4'>
//               <span className='section-title'>Subtítulo</span>
//             </div>

//             <div className='col-12'>
//               <span className='input-title'>Texto</span>
//             </div>

//             <div className='col-12 mb-3'>
//               <textarea
//                 id="textarea-input"
//                 placeholder='Texto'
//                 value={homeData.subtitle.text || ''}
//                 onChange={(e) => handleChange(e, 'subtitle', 'text')}
//               />
//             </div>

//             <div className='col-12 py-2'>
//               <span className='section-title'>Estilização</span>
//             </div>

//             <StyleControls section="subtitle" styleType="style" />

//             <hr className='my-4' />

//             {/* Seção Banner */}
//             <div className='col-12 mb-4'>
//               <span className='section-title'>Banner</span>
//             </div>

//             <div className='col-12'>
//               <span className='input-title'>URL do banner</span>
//             </div>

//             <div className='col-12 mb-3'>
//               <input
//                 id="text-input"
//                 type="text"
//                 placeholder='Url pública'
//                 value={homeData.background_image.url || ''}
//                 onChange={(e) => handleChange(e, 'background_image', 'url')}
//               />
//             </div>

//             {/* Seção Logo */}
//             <div className='col-12 mb-4'>
//               <span className='section-title'>Logo</span>
//             </div>

//             <div className='col-12'>
//               <span className='input-title'>URL do logo</span>
//             </div>

//             <div className='col-12 mb-3'>
//               <input
//                 id="text-input"
//                 type="text"
//                 placeholder='Url pública'
//                 value={homeData.logo.url || ''}
//                 onChange={(e) => handleChange(e, 'logo', 'url')}
//               />
//             </div>

//             <div className='col-12 py-2'>
//               <span className='section-title'>Estilização</span>
//             </div>

//             <div className='col-12'>
//               <div className='row aling-items-center'>
//                 <div className='col-4'>
//                   <span className='input-title'>Altura (px)</span>
//                 </div>
//                 <div className='col-4'>
//                   <span className='input-title'>Largura (px)</span>
//                 </div>
//                 <div className='col-4'>
//                   <span className='input-title'>Alinhamento</span>
//                 </div>

//                 <div className='col-4 mb-3'>
//                   <input
//                     id="text-input"
//                     type="number"
//                     step={1}
//                     placeholder='0'
//                     value={homeData.logo.style.height || ''}
//                     onChange={(e) => handleChange(e, 'logo', 'style', 'height')}
//                   />
//                 </div>

//                 <div className='col-4 mb-3'>
//                   <input
//                     id="text-input"
//                     type="number"
//                     step={1}
//                     placeholder='0'
//                     value={homeData.logo.style.width || ''}
//                     onChange={(e) => handleChange(e, 'logo', 'style', 'width')}
//                   />
//                 </div>

//                 <div className='col-4'>
//                   <select
//                     id="text-input"
//                     value={homeData.logo.style.align || ''}
//                     onChange={(e) => handleChange(e, 'logo', 'style', 'align')}
//                   >
//                     <option value='' disabled>Selecione</option>
//                     {letterAlign.map((item, index) => (
//                       <option key={index} value={item.align}>{item.align}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Botão de submit */}
//             <div className='col-12 mt-4'>
//               <button type="submit" className="btn btn-primary">
//                 Salvar Home
//               </button>
//             </div>
//           </div>
//         </section>
//       </form>
//     </div>
//   );
// };

// export default AdminHome;