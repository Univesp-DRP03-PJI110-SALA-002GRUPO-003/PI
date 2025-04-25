import React, { useState } from 'react';

import { letterAlign, letterCollors, letterFamily, letterSeize, letterWeight } from '../Mocks/Estilization';

import "./About.scss";

const About = () => {

  const [imagePreview, setImagePreview] = useState(null);
  const [imageQuantity, setImageQuantity] = useState(1);

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  return (
    <div id="admin-home" className="admin-content container">

      <form
        className="admin-form-background row aling-items-center justify-content-center"

        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            // onSubmit();
          }
        }}

      // onSubmit={handleSubmit(onSubmit)}
      >

        <section className='col-12'>
          <div className='row aling-items-center justify-content-start p-3 container-border'>

            <div className='col-12'>
              <span className='input-title'>Estilização</span>
            </div>

            <div className='col-12 mb-3'>
              <div className='row aling-items-center'>

                <div className='col-md-6 col-lg-3 col-12'>
                  <select
                    id="select-input"
                  >
                    <option value='' disabled selected>Selecione a quantidade de fotos</option>
                    <option value={1} onChange={(e) => setImageQuantity(e.target.value)}>1 imagem</option>
                    <option value={2} onChange={(e) => setImageQuantity(e.target.value)}>2 imagens</option>
                  </select>
                </div>
              </div>
            </div>



            {imageQuantity === 1 ? (
              <>
                <div className="col-12">
                  <div id="input-image">
                    {imagePreview && (
                      <div className="image-preview">
                        <img src={imagePreview} alt="Preview" />
                      </div>
                    )}

                    <label
                      htmlFor="imageUpload"
                      className="image-upload-button"
                    >
                      Alterar Imagem
                    </label>

                    <input
                      type="file"
                      id="imageUpload"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="col-6">
                  <div id="input-image">
                    {imagePreview && (
                      <div className="image-preview">
                        <img src={imagePreview} alt="Preview" />
                      </div>
                    )}

                    <label
                      htmlFor="imageUpload"
                      className="image-upload-button"
                    >
                      Alterar Imagem
                    </label>

                    <input
                      type="file"
                      id="imageUpload"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={handleImageChange}
                    />
                  </div>
                </div>

                <div className="col-6">
                  <div id="input-image">
                    {imagePreview && (
                      <div className="image-preview">
                        <img src={imagePreview} alt="Preview" />
                      </div>
                    )}

                    <label
                      htmlFor="imageUpload"
                      className="image-upload-button"
                    >
                      Alterar Imagem
                    </label>

                    <input
                      type="file"
                      id="imageUpload"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
              </>
            )}

          </div>
        </section>

        <section className="col-12 my-4">
          <div className='row aling-items-center justify-content-start p-3 container-border'>

            <div className='col-12'>
              <span className='input-title'>Headline</span>
            </div>

            <div className='col-12 mb-3'>
              <input
                id="text-input"
                className=''
                type="text"
                placeholder='Título da headline'
                value={""}
              // onChange={}
              ></input>
            </div>

            <div className='col-12'>
              <span className='input-title'>Estilização</span>
            </div>

            <div className='col-12 mb-3'>
              <div className='row aling-items-center'>

                <div className='col-md-6 col-lg-3 col-12'>
                  <select
                    id="text-input"
                  >
                    <option value='' disabled selected>Selecione uma fonte</option>
                    {letterFamily.map((item, index) => {
                      return (
                        <option
                          key={index}
                          value={item.family}
                        >
                          {item.family}
                        </option>
                      )
                    })}
                  </select>
                </div>

                <div className='col-md-6 col-lg-2 col-12'>
                  <select
                    id="text-input"
                  >
                    <option value='' disabled selected>Selecione um tamanho</option>
                    {letterSeize.map((item, index) => {
                      return (
                        <option
                          key={index}
                          value={item.font}
                        >
                          {item.font}
                        </option>
                      )
                    })}
                  </select>
                </div>

                <div className='col-md-6 col-lg-3 col-12'>
                  <select
                    id="text-input"
                  >
                    <option value='' disabled selected>Selecione um peso</option>
                    {letterWeight.map((item, index) => {
                      return (
                        <option
                          key={index}
                          value={item.weight}
                        >
                          {item.weight}
                        </option>
                      )
                    })}
                  </select>
                </div>

                <div className='col-md-6 col-lg-2 col-12'>
                  <select
                    id="text-input"
                  >
                    <option value='' disabled selected>Selecione um alinhamento</option>
                    {letterAlign.map((item, index) => {
                      return (
                        <option
                          key={index}
                          value={item.align}
                        >
                          {item.align}
                        </option>
                      )
                    })}
                  </select>
                </div>

                <div className='col-md-6 col-lg-2 col-12'>
                  <select
                    id="text-input"
                  >
                    <option value='' disabled selected>Selecione uma cor</option>
                    {letterCollors.map((item, index) => {
                      return (
                        <option
                          key={index}
                          value={item.color}
                        >
                          {item.color}
                        </option>
                      )
                    })}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className='row aling-items-center justify-content-start p-3 my-2 container-border'>

            <div className='col-12'>

              <span className='input-title'>Subtítulo</span>

              <textarea
                id="textarea-input"
                className=''
                placeholder='Subtítulo'
                value={""}
              />
            </div>

            <div className='col-12'>
              <span className='input-title'>Estilização</span>
            </div>

            <div className='col-12 mb-3'>
              <div className='row aling-items-center'>

                <div className='col-md-6 col-lg-3 col-12'>
                  <select
                    id="text-input"
                  >
                    <option value='' disabled selected>Selecione uma fonte</option>
                    {letterFamily.map((item, index) => {
                      return (
                        <option
                          key={index}
                          value={item.family}
                        >
                          {item.family}
                        </option>
                      )
                    })}
                  </select>
                </div>

                <div className='col-md-6 col-lg-2 col-12'>
                  <select
                    id="text-input"
                  >
                    <option value='' disabled selected>Selecione um tamanho</option>
                    {letterSeize.map((item, index) => {
                      return (
                        <option
                          key={index}
                          value={item.font}
                        >
                          {item.font}
                        </option>
                      )
                    })}
                  </select>
                </div>

                <div className='col-md-6 col-lg-3 col-12'>
                  <select
                    id="text-input"
                  >
                    <option value='' disabled selected>Selecione um peso</option>
                    {letterWeight.map((item, index) => {
                      return (
                        <option
                          key={index}
                          value={item.weight}
                        >
                          {item.weight}
                        </option>
                      )
                    })}
                  </select>
                </div>

                <div className='col-md-6 col-lg-2 col-12'>
                  <select
                    id="text-input"
                  >
                    <option value='' disabled selected>Selecione um alinhamento</option>
                    {letterAlign.map((item, index) => {
                      return (
                        <option
                          key={index}
                          value={item.align}
                        >
                          {item.align}
                        </option>
                      )
                    })}
                  </select>
                </div>

                <div className='col-md-6 col-lg-2 col-12'>
                  <select
                    id="select-input"
                  >
                    <option value='' disabled selected>Selecione uma cor</option>
                    {letterCollors.map((item, index) => {
                      return (
                        <option
                          key={index}
                          value={item.color}
                        >
                          {item.color}
                        </option>
                      )
                    })}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='col-12'>
          <div className='row aling-items-center justify-content-start p-3 container-border'>

            <div className='col-12'>
              <span className='input-title'>Estilização</span>
            </div>

            <div className='col-12 mb-3'>
              <div className='row aling-items-center'>

                <div className='col-md-6 col-lg-3 col-12'>
                  <select
                    id="select-input"
                  >
                    <option value='' disabled selected>Selecione uma cor de fundo</option>
                    {letterCollors.map((item, index) => {
                      return (
                        <option
                          key={index}
                          value={item.color}
                        >
                          {item.color}
                        </option>
                      )
                    })}
                  </select>
                </div>
              </div>
            </div>

          </div>
        </section>
      </form>
    </div>

  )
}

export default About;