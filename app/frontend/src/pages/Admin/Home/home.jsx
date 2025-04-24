import React, { useState } from 'react';
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
        className="admin-form-background"

        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            // onSubmit();
          }
        }}

      // onSubmit={handleSubmit(onSubmit)}
      >

        <div className="headline-container">
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
                  <input
                    id="text-input"
                    placeholder='Cor da fonte'
                  ></input>
                </div>

                <div className='col-md-6 col-lg-3 col-12'>
                  <input
                    id="text-input"
                    placeholder='Tamanho da fonte'
                  ></input>
                </div>

                <div className='col-md-6 col-lg-3 col-12'>
                  <input
                    id="text-input"
                    placeholder='Estilo da fonte'
                  ></input>
                </div>

                <div className='col-md-6 col-lg-3 col-12'>
                  <input
                    id="text-input"
                    placeholder='Alinhamento de texto'
                  ></input>
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
              <input
                    id="text-input"
                    placeholder='Cor da fonte'
                  ></input>
                </div>

                <div className='col-md-6 col-lg-3 col-12'>
                  <input
                    id="text-input"
                    placeholder='Tamanho da fonte'
                  ></input>
                </div>

                <div className='col-md-6 col-lg-3 col-12'>
                  <input
                    id="text-input"
                    placeholder='Estilo da fonte'
                  ></input>
                </div>

                <div className='col-md-6 col-lg-3 col-12'>
                  <input
                    id="text-input"
                    placeholder='Alinhamento de texto'
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="headline-image-container">

          <div id="input-image" className="image-upload-container">
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Preview" />
              </div>
            )}

            <label htmlFor="imageUpload" className="image-upload-button">
              <i className="icon-edit-05" />
              <span>Alterar Imagem</span>
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