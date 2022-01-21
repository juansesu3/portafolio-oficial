import React from 'react';
import '../../styles/Logo.css'

const Logo = () => {
  return (
    <div>

      
      <div className='principal-container'>
        <div className='center-container'>
          <div className='i-point'></div>
          {/* <div className='i-body'></div> */}

        </div>
        <input type="checkbox" id="animation" className="checkbox" />

        <div className='j-body-lef-1'></div>
        <div className='j-body-rig-1'></div>
        <div className='j-body-lef-2'></div>
        <div className='j-body-rig-2'></div>
        <div className='j-body-lef-3'></div>
        <div className='j-body-rig-3'></div>
        <div className='j-body-lef-4'></div>
        <div className='j-body-rig-4'></div>
        <div className='j-body-lef-5'></div>
        <div className='j-body-rig-5'></div>
        <label for="animation">
        <div className="btn-action">Arm</div>
        <div className="btn-revers">Disarm</div>
      </label>

      </div>
     


    </div>
  );
};

export default Logo;
