import React from 'react';

export default function DeactivateButton() {
    return (
        <div className="row mt-3">
            <div className="col-7">
                <h5 className="mt-3 ml-4" style={{textAlign:'left'}}>Deactive Page</h5> 
            </div>
            <div className="col-3 mt-3">
                <div className='custom-control custom-switch' style={{textAlign:'left'}}>
                    <input
                        type='checkbox'
                        className='custom-control-input'
                        id='deactivateSwitchesChecked'
                        defaultChecked
                    />
                    <label className='custom-control-label' htmlFor='deactivateSwitchesChecked'>
                    </label>
                </div>
            </div>
        </div> 
    )
}
