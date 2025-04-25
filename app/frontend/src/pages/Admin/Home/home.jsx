import React, { useState } from 'react';

import { letterAlign, letterCollors, letterFamily, letterSeize, letterWeight } from '../Mocks/Estilization';

import "./home.css";

const AdminHome = () => {

  const [imagePreview, setImagePreview] = useState(null);

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

        <section className="col-9">
          <div className='headline-image-container'>

            <div className='row aling-items-center justify-content-start w-100 container-border'>

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

            <div className='row aling-items-center justify-content-start w-100 my-4 container-border'>

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
          </div>
        </section>

        <section className="col-3">
          <div className="headline-image-container">

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
        </section>

        <section className='col-12'>
          <div className='row aling-items-center justify-content-start w-100 p-2 container-border'>

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

export default AdminHome;

{/* <div id="input-image">
<div className="input-image-container">
  <img
    src={""}
    sizes=""
    alt=""
    draggable={false}
  />

  <div className="input-image-content">
    <div />

    <button>
      <i className="icon-edit-05" />
      <label>Alterar Imagem</label>
      <input
        accept="image/*"
        type="file"
      // onChange={handleChange}
      />
    </button>
  </div>
</div>
</div> */}