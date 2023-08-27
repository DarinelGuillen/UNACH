import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import arrowselector from '../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../assets/img/Icon/checkSinNada.svg";
import logoSave from "../assets/img/Icon/Save.svg";
import "../assets/css/botoncito.css";
import "../assets/css/modal.css";
import ButtonSaveInfo from '../atoms/ButtonSaveInfo';
import SharedDataContext from '../contexts/SharedDataContext';
import Modal from 'react-modal';
Modal.setAppElement('#root');

function Seccion2Pag10() {
    const { isShareData, setIsShareData } = useContext(SharedDataContext);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const navigate = useNavigate();
  
    function openModal() {
      setModalOpen(true);
    }
  
    function closeModal() {
      setModalOpen(false);
    }
  
    async function handleEnviarClick() {
      openModal();
    }
  
    async function handleConfirmarEnvio() {
      setIsSending(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
  
      setIsSending(false);
      closeModal();
  

      const fakeApiUrl = 'https://example.com/api';
      const requestData = {
        ...isShareData,
        references: isShareData.references || '',
      };
  
      try {
        const response = await fetch(fakeApiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });
  
        if (response.ok) {
          console.log('Proyecto enviado exitosamente');
          navigate('/');
        } else {
          console.error('Error al enviar el proyecto:', response.statusText);
        }
      } catch (error) {
        console.error('Error al enviar el proyecto:', error);
      }
    }
  
    function handleSaveLocally() {
      const updatedData = {
        ...isShareData,
        references: document.getElementById('references').value,
      };
      setIsShareData(updatedData);
      console.log('Local data saved:', updatedData);
    }
    return (
        <>
            <Header />
            <div className="flex font-sans">
                <div className="flex hidden lg:block lg:w-1/6 lg:justify-center lg:mt-20 lg:mb-20">
                    <VerticalText />
                </div>

                <div className='flex flex-col w-full lg:w-5/6 bg-white lg:rounded-tl-lg'>
                    <div>
                        <ClaveDeAcceso />
                    </div>

                    <div class="flex items-center place-content-around text-center w-full mt-10 lg:mt-20">
                        <img src={logoSinNadita} className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px]'></img>

                        <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
                            <p className='text-xl lg:text-3xl'>2.17 Referencias </p>
                        </div>
                        {/* NO GUARDA DATOS */}
                        <ButtonSaveInfo />
                    </div>

                    <div className="flex justify-center">
                        <div className='text-center w-5/6 '>
                            <p className='text-gray-700 text-base mt-1 lg:text-xl lg:mb-5 mt-5 mb-5'>Indicar las referencias en estilo de citación de la American Psychological Association, APA 7º edición</p>
                        </div>
                    </div>

                    <div className='flex flex-col w-full items-center'>
                        <simple-textarea class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" height="30px" type="text" placeholder="Especifique" id="references" value={isShareData.references || ''}></simple-textarea>
                    </div>

                    <div className='text-center mt-16'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl'>Declaración de cesión de derechos, de originalidad y autoría</p>
                    </div>

                    <div className="flex justify-center">
                        <div className='text-center w-5/6 mt-2'>
                            <p className='text-gray-700 text-base mt-1 lg:text-xl lg:mb-5'>Manifiesto bajo protesta de decir verdad que esta propuesta es original y soy el autor intelectual y la inclusión de material de terceros en esta propuesta está debidamente referenciada y cuento con la autorización respecto de los derechos de Claro que la propuesta no presenta plagios parciales o totales ni controversiales legales a la vez que el desarrollo de la investigación adoptaré las medidas éticas y consideraciones legales pertinentes a sí mismo se darán los créditos a la Universidad Autónoma de Chiapas de los productos académicos que de esta propuesta emanen al participar en este proceso de registro acato los procedimientos lineamientos y políticas que la Universidad Autónoma de Chiapas establezca para tales efectos.</p>
                        </div>
                    </div>


                    <div className='flex place-content-around mt-10 mb-10 lg:mt-[201px]'>
                        <Link to="/seccion2Pag9">
                            <button>
                                <div className='grid'>
                                    <div className='grid place-content-center bg-[#BCB785] w-[3rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[6rem]'>
                                        <img src={arrowselector}></img>
                                    </div>
                                </div>
                            </button>
                        </Link>
                        <button onClick={handleEnviarClick}>
                            <div className='grid'>
                                <div className='grid place-content-center bg-[#BCB785] text-white w-[10rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[16rem]'>
                                    <p className='text-2xl lg:text-3xl'>Enviar</p>
                                </div>
                            </div>
                        </button>
                        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <div className="text-center">
            <p className="text-lg font-semibold mb-2 estiloTextoRegistro">
              ¿Está seguro que quiere enviar el proyecto? Ya no tendrá otra oportunidad de modificación.
            </p>
            <button onClick={handleConfirmarEnvio} className="estiloBotonSiguiente" disabled={isSending}>
              {isSending ? 'Enviando...' : 'Enviar'}
            </button>
            <button
              onClick={closeModal}
              className="border px-4 py-2 rounded-md ml-2 estiloBotonCierre cancel-button"
            >
              Cancelar
            </button>
          </div>
        </Modal>



                        <div className='flex'>
                            <p className='grid bg-[#BCB785] w-[4rem] h-[3rem] place-content-center text-white text-xl rounded-md lg:text-3xl lg:h-[4rem] lg:w-[6rem]'>10 - 10</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Seccion2Pag10;