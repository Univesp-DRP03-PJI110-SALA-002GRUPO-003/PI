import React, { useState } from 'react';
import { letterAlign, letterFamily, letterSeize, letterWeight } from '../Mocks/Estilization';
import "./Products.scss";

const Products = () => {
  const [productsData, setProductsData] = useState({
    product1: {
      title: '',
      titleStyle: {
        fontFamily: '',
        fontSize: '',
        fontWeight: '',
        textAlign: '',
        color: '#000000'
      },
      details: '',
      detailsStyle: {
        fontFamily: '',
        fontSize: '',
        fontWeight: '',
        textAlign: '',
        color: '#000000'
      },
      illustrationUrl: '',
      illustrationStyle: {
        height: '',
        width: '',
        align: ''
      }
    },
    product2: {
      title: '',
      titleStyle: {
        fontFamily: '',
        fontSize: '',
        fontWeight: '',
        textAlign: '',
        color: '#000000'
      },
      details: '',
      detailsStyle: {
        fontFamily: '',
        fontSize: '',
        fontWeight: '',
        textAlign: '',
        color: '#000000'
      },
      illustrationUrl: '',
      illustrationStyle: {
        height: '',
        width: '',
        align: ''
      }
    }
  });

  const handleChange = (e, productKey, field, subField = null) => {
    const { name, value } = e.target;
    
    setProductsData(prev => {
      const newData = {...prev};
      if (subField) {
        newData[productKey][field][subField] = value;
      } else {
        newData[productKey][field] = value;
      }
      return newData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', productsData);
    // Aqui você pode adicionar a lógica para enviar os dados para o backend
    // Exemplo: api.post('/products', productsData).then(...)
    
    // Adicione também lógica de feedback para o usuário (sucesso/erro)
    alert('Dados dos produtos salvos com sucesso!');
  };

  return (
    <div id="admin-products" className="admin-content container">
      <form
        className="admin-form-background row aling-items-center justify-content-center"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
        onSubmit={handleSubmit}
      >
        {/* Produto 1 */}
        <section className='col-12 mb-2'>
          <div className='row aling-items-center justify-content-start p-3 container-border'>
            <div className='col-12 my-4'>
              <span className='section-title'>Produto 01</span>
            </div>

            <div className='col-12'>
              <span className='input-title'>Título produto</span>
            </div>

            <div className='col-12 mb-3'>
              <input
                id="text-input"
                className=''
                type="text"
                name="title"
                placeholder='Nome do produto'
                value={productsData.product1.title}
                onChange={(e) => handleChange(e, 'product1', 'title')}
              />
            </div>

            <div className='col-12 py-2'>
              <span className='section-title'>Estilização</span>
            </div>

            {/* Estilização do título */}
            <section className='row aling-items-center'>
              <div className='col-md-6 col-lg-2 col-12'>
                <select
                  id="text-input"
                  name="fontFamily"
                  value={productsData.product1.titleStyle.fontFamily}
                  onChange={(e) => handleChange(e, 'product1', 'titleStyle', 'fontFamily')}
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
                  name="fontSize"
                  value={productsData.product1.titleStyle.fontSize}
                  onChange={(e) => handleChange(e, 'product1', 'titleStyle', 'fontSize')}
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
                  name="fontWeight"
                  value={productsData.product1.titleStyle.fontWeight}
                  onChange={(e) => handleChange(e, 'product1', 'titleStyle', 'fontWeight')}
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
                  name="textAlign"
                  value={productsData.product1.titleStyle.textAlign}
                  onChange={(e) => handleChange(e, 'product1', 'titleStyle', 'textAlign')}
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
                  name="color"
                  value={productsData.product1.titleStyle.color}
                  onChange={(e) => handleChange(e, 'product1', 'titleStyle', 'color')}
                />
              </div>
            </section>

            <hr className='my-4'></hr>

            <div className='col-12 pb-4'>
              <span className='section-title'>Detalhes produto</span>
            </div>

            <div className='col-12'>
              <span className='input-title'>Detalhes</span>
            </div>

            <div className='col-12 mb-3'>
              <textarea
                id="textarea-input"
                className=''
                placeholder='Texto'
                name="details"
                value={productsData.product1.details}
                onChange={(e) => handleChange(e, 'product1', 'details')}
              />
            </div>

            <div className='col-12 py-2'>
              <span className='section-title'>Estilização</span>
            </div>

            {/* Estilização dos detalhes */}
            <div className='row aling-items-center'>
              <div className='col-md-6 col-lg-2 col-12'>
                <select
                  id="text-input"
                  name="fontFamily"
                  value={productsData.product1.detailsStyle.fontFamily}
                  onChange={(e) => handleChange(e, 'product1', 'detailsStyle', 'fontFamily')}
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
                  name="fontSize"
                  value={productsData.product1.detailsStyle.fontSize}
                  onChange={(e) => handleChange(e, 'product1', 'detailsStyle', 'fontSize')}
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
                  name="fontWeight"
                  value={productsData.product1.detailsStyle.fontWeight}
                  onChange={(e) => handleChange(e, 'product1', 'detailsStyle', 'fontWeight')}
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
                  name="textAlign"
                  value={productsData.product1.detailsStyle.textAlign}
                  onChange={(e) => handleChange(e, 'product1', 'detailsStyle', 'textAlign')}
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
                  name="color"
                  value={productsData.product1.detailsStyle.color}
                  onChange={(e) => handleChange(e, 'product1', 'detailsStyle', 'color')}
                />
              </div>
            </div>

            <hr className='my-4'></hr>

            <div className='col-12 mb-4'>
              <span className='section-title'>Ilustração</span>
            </div>

            <div className='col-12'>
              <span className='input-title'>URL da ilustração do produto</span>
            </div>

            <div className='col-12 mb-3'>
              <input
                id="text-input"
                className=''
                type="text"
                placeholder='Url pública'
                name="illustrationUrl"
                value={productsData.product1.illustrationUrl}
                onChange={(e) => handleChange(e, 'product1', 'illustrationUrl')}
              />
            </div>

            <div className='col-12 py-2'>
              <span className='section-title'>Estilização</span>
            </div>

            <div className='col-12'>
              <div className='row aling-items-center'>
                <div className='col-4'>
                  <span className='input-title'>Selecione uma altura em px</span>
                </div>

                <div className='col-4'>
                  <span className='input-title'>Selecione uma largura em px</span>
                </div>

                <div className='col-4'>
                  <span className='input-title'>Selecione um alinhamento para a imagem</span>
                </div>

                <div className='col-4 mb-3'>
                  <input
                    id="text-input"
                    className=''
                    type="number"
                    step={1}
                    placeholder='0'
                    name="height"
                    value={productsData.product1.illustrationStyle.height}
                    onChange={(e) => handleChange(e, 'product1', 'illustrationStyle', 'height')}
                  />
                </div>

                <div className='col-4 mb-3'>
                  <input
                    id="text-input"
                    className=''
                    type="number"
                    step={1}
                    placeholder='0'
                    name="width"
                    value={productsData.product1.illustrationStyle.width}
                    onChange={(e) => handleChange(e, 'product1', 'illustrationStyle', 'width')}
                  />
                </div>

                <div className='col-4'>
                  <select
                    id="text-input"
                    name="align"
                    value={productsData.product1.illustrationStyle.align}
                    onChange={(e) => handleChange(e, 'product1', 'illustrationStyle', 'align')}
                  >
                    <option value='' disabled>Selecione</option>
                    {letterAlign.map((item, index) => (
                      <option key={index} value={item.align}>{item.align}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Produto 2 */}
        <section className='col-12 mb-2'>
          <div className='row aling-items-center justify-content-start p-3 container-border'>
            <div className='col-12 my-4'>
              <span className='section-title'>Produto 01</span>
            </div>

            <div className='col-12'>
              <span className='input-title'>Título produto</span>
            </div>

            <div className='col-12 mb-3'>
              <input
                id="text-input"
                className=''
                type="text"
                name="title"
                placeholder='Nome do produto'
                value={productsData.product2.title}
                onChange={(e) => handleChange(e, 'product2', 'title')}
              />
            </div>

            <div className='col-12 py-2'>
              <span className='section-title'>Estilização</span>
            </div>

            {/* Estilização do título */}
            <section className='row aling-items-center'>
              <div className='col-md-6 col-lg-2 col-12'>
                <select
                  id="text-input"
                  name="fontFamily"
                  value={productsData.product2.titleStyle.fontFamily}
                  onChange={(e) => handleChange(e, 'product2', 'titleStyle', 'fontFamily')}
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
                  name="fontSize"
                  value={productsData.product2.titleStyle.fontSize}
                  onChange={(e) => handleChange(e, 'product2', 'titleStyle', 'fontSize')}
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
                  name="fontWeight"
                  value={productsData.product2.titleStyle.fontWeight}
                  onChange={(e) => handleChange(e, 'product2', 'titleStyle', 'fontWeight')}
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
                  name="textAlign"
                  value={productsData.product2.titleStyle.textAlign}
                  onChange={(e) => handleChange(e, 'product2', 'titleStyle', 'textAlign')}
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
                  name="color"
                  value={productsData.product2.titleStyle.color}
                  onChange={(e) => handleChange(e, 'product2', 'titleStyle', 'color')}
                />
              </div>
            </section>

            <hr className='my-4'></hr>

            <div className='col-12 pb-4'>
              <span className='section-title'>Detalhes produto</span>
            </div>

            <div className='col-12'>
              <span className='input-title'>Detalhes</span>
            </div>

            <div className='col-12 mb-3'>
              <textarea
                id="textarea-input"
                className=''
                placeholder='Texto'
                name="details"
                value={productsData.product2.details}
                onChange={(e) => handleChange(e, 'product2', 'details')}
              />
            </div>

            <div className='col-12 py-2'>
              <span className='section-title'>Estilização</span>
            </div>

            {/* Estilização dos detalhes */}
            <div className='row aling-items-center'>
              <div className='col-md-6 col-lg-2 col-12'>
                <select
                  id="text-input"
                  name="fontFamily"
                  value={productsData.product2.detailsStyle.fontFamily}
                  onChange={(e) => handleChange(e, 'product2', 'detailsStyle', 'fontFamily')}
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
                  name="fontSize"
                  value={productsData.product2.detailsStyle.fontSize}
                  onChange={(e) => handleChange(e, 'product2', 'detailsStyle', 'fontSize')}
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
                  name="fontWeight"
                  value={productsData.product2.detailsStyle.fontWeight}
                  onChange={(e) => handleChange(e, 'product2', 'detailsStyle', 'fontWeight')}
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
                  name="textAlign"
                  value={productsData.product2.detailsStyle.textAlign}
                  onChange={(e) => handleChange(e, 'product2', 'detailsStyle', 'textAlign')}
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
                  name="color"
                  value={productsData.product2.detailsStyle.color}
                  onChange={(e) => handleChange(e, 'product2', 'detailsStyle', 'color')}
                />
              </div>
            </div>

            <hr className='my-4'></hr>

            <div className='col-12 mb-4'>
              <span className='section-title'>Ilustração</span>
            </div>

            <div className='col-12'>
              <span className='input-title'>URL da ilustração do produto</span>
            </div>

            <div className='col-12 mb-3'>
              <input
                id="text-input"
                className=''
                type="text"
                placeholder='Url pública'
                name="illustrationUrl"
                value={productsData.product2.illustrationUrl}
                onChange={(e) => handleChange(e, 'product2', 'illustrationUrl')}
              />
            </div>

            <div className='col-12 py-2'>
              <span className='section-title'>Estilização</span>
            </div>

            <div className='col-12'>
              <div className='row aling-items-center'>
                <div className='col-4'>
                  <span className='input-title'>Selecione uma altura em px</span>
                </div>

                <div className='col-4'>
                  <span className='input-title'>Selecione uma largura em px</span>
                </div>

                <div className='col-4'>
                  <span className='input-title'>Selecione um alinhamento para a imagem</span>
                </div>

                <div className='col-4 mb-3'>
                  <input
                    id="text-input"
                    className=''
                    type="number"
                    step={1}
                    placeholder='0'
                    name="height"
                    value={productsData.product2.illustrationStyle.height}
                    onChange={(e) => handleChange(e, 'product2', 'illustrationStyle', 'height')}
                  />
                </div>

                <div className='col-4 mb-3'>
                  <input
                    id="text-input"
                    className=''
                    type="number"
                    step={1}
                    placeholder='0'
                    name="width"
                    value={productsData.product2.illustrationStyle.width}
                    onChange={(e) => handleChange(e, 'product2', 'illustrationStyle', 'width')}
                  />
                </div>

                <div className='col-4'>
                  <select
                    id="text-input"
                    name="align"
                    value={productsData.product2.illustrationStyle.align}
                    onChange={(e) => handleChange(e, 'product2', 'illustrationStyle', 'align')}
                  >
                    <option value='' disabled>Selecione</option>
                    {letterAlign.map((item, index) => (
                      <option key={index} value={item.align}>{item.align}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="col-12 mt-4">
          <button type="submit" className="btn btn-primary">
            Salvar Produtos
          </button>
        </div>
      </form>
    </div>
  )
}

export default Products;