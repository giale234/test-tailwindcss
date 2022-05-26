import logo from './logo.svg';

import { useState } from 'react'

function App() {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow(!show)
  }
  const handleFocusTextArea = () => {
    document.getElementById('textArea').value = ''
  }
  return (
    <div className="App">
      <div className='wrapper w-full min-h-[1000px] my-0 mx-auto'>
        <div className='container w-full h-auto'>
          <div className='wrap-content w-4/6'>
          <div className='content w-5/6 h-auto m-2.5 shadow-xl rounded-md px-20px'>
            <div className='content-title w-full h-auto flex items-center font-medium py-15px' >
              <img className='rounded-lg w-30 h-30' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg" alt=''/>
              <h2 className='text-lg text-semilightblue ml-10px'>Thong tin chi tiet can ho</h2>
            </div>
            <div className='content-main w-full h-auto'>
              <div className='content-main-title w-full h-auto bg-lightblue cursor-pointer hover:bg-hoverColor'>
                <h2 className='main-title-h2 text-sm font-medium py-5px ml-15px'>Thong tin chi tiet</h2>
              </div>
              <div className={'content-list-item w-full h-auto pb-10px '}>
                <div className='content-item w-full h-auto flex border-b-1 border-lightblack'>
                  <div className='content-item-title w-40% h-auto'>
                    <p className='  py-10px font-medium'>Ngang</p>
                  </div>
                  <div className='content-item-subtitle w-60% h-auto w-60% h-auto'>
                    <p className='  py-10px'>10m</p>
                  </div>
                </div>
                <div className='content-item flex border-b-1 border-lightblack'>
                  <div className='content-item-title w-40% h-auto'>
                    <p className='  py-10px font-medium'>Dai</p>
                  </div>
                  <div className='content-item-subtitle w-60% h-auto'>
                    <p className='  py-10px'>20m</p>
                  </div>
                </div>
                <div className='content-item flex border-b-1 border-lightblack'>
                  <div className='content-item-title w-40% h-auto'>
                    <p className='  py-10px font-medium'>Dien tich</p>
                  </div>
                  <div className='content-item-subtitle w-60% h-auto'>
                    <p className='  py-10px'>200m</p>
                  </div>
                </div>
                <div className='content-item flex border-b-2 border-dashed border-exlightblack'>
                  <div className='content-item-title w-40% h-auto'>
                    <p className='  py-10px font-medium'>Gia</p>
                  </div>
                  <div className='content-item-subtitle w-60% h-auto'>
                    <p className='  py-10px text-red'>12,000,000 VND/m2</p>
                  </div>
                </div>
                <div className='content-item flex border-b-1 border-lightblack'>
                  <div className='content-item-title w-40% h-auto'>
                    <p className='  py-10px font-medium'>So luong phong ngu moi can ho</p>
                  </div>
                  <div className='content-item-subtitle w-60% h-auto'>
                    <p className='  py-10px'>2 - 3</p>
                  </div>
                </div>
                <div className='content-item flex border-b-1 border-lightblack'>
                  <div className='content-item-title w-40% h-auto'>
                    <p className='  py-10px font-medium'>Dien tich moi phong ngu</p>
                  </div>
                  <div className='content-item-subtitle w-60% h-auto'>
                    <p className='  py-10px'>5-25m2</p>
                  </div>
                </div>
                <div className='content-item flex border-b-1 border-lightblack'>
                  <div className='content-item-title w-40% h-auto'>
                    <p className='  py-10px font-medium'>So luong nha ve sinh moi can ho</p>
                  </div>
                  <div className='content-item-subtitle w-60% h-auto'>
                    <p className='  py-10px'>2 - 3</p>
                  </div>
                </div>
                <div className='content-item flex border-b-1 border-lightblack'>
                  <div className='content-item-title w-40% h-auto'>
                    <p className='  py-10px font-medium'>Dien tich moi nha ve sinh</p>
                  </div>
                  <div className='content-item-subtitle w-60% h-auto'>
                    <p className='  py-10px'>5 - 10 m2</p>
                  </div>
                </div>
                <div className='content-item flex border-b-1 border-lightblack'>
                  <div className='content-item-title w-40% h-auto'>
                    <p className='  py-10px font-medium'>View</p>
                  </div>
                  <div className='content-item-subtitle w-60% h-auto'>
                    <p className='  py-10px'>View bien, view pho</p>
                  </div>
                </div>
                <div className='content-item flex border-b-1 border-lightblack'>
                  <div className='content-item-title w-40% h-auto'>
                    <p className='  py-10px font-medium'>Gia theo tung giai doan</p>
                  </div>
                  <div className='content-item-subtitle w-full h-auto'>
                    <textarea id='textArea' className='textArea w-full max-h-[40px] border-lightblack py-8px text-lightblack' rows='1' defaultValue='chua co du lieu' onFocus={handleFocusTextArea}></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
