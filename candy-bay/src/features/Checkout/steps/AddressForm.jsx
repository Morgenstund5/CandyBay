import React, { useState } from 'react'
import ReactFlagsSelect from "react-flags-select";
import "./addressform.css"
import {countries, customLabels} from '../../../data/flagSelect';
import { validateData } from '../../../utils/validateData';

function AddressForm({ step, setStep }) {
  const [selected, setSelected] = useState("")
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    country: "",
  })
  const [errors, setErrors] = useState({})

  const handleSubmit = () => {
    const response = validateData(formData)
    console.log(response)
    if(Object.keys(response).length === 0) {
      const validatedData = {
      ...formData,
      first_name: formData.first_name.trim(),
      last_name: formData.last_name.trim(),
      address: formData.address.trim(),
      city: formData.city.trim(),
      country: formData.country,
    }
    setFormData(() => {
      validatedData
    })
    console.log("Es ist funktioniert", validatedData)
    setStep(prev => prev + 1)
    }

    else {
      console.log("Errors: ",response)
      setErrors(response)
    }
  }

  return (
    <div>
        <div className="address-form-div">
          <h2>Enter your address</h2>
                  <form action="post">
                    <fieldset className='fieldset row1'>
                      <p>
                        <label htmlFor="first-name">First name</label>
                        <input placeholder={errors.first_name? `${errors.first_name}` : "First name"} type="text" id='name' name='first-name'  
                        onChange={(e) =>
                        setFormData({ ...formData, first_name: (e.target.value) })
                        }
                        minLength={3}
                        required
                        className={errors.first_name? 'error' : ''}
                        />
                      </p>
        
                      <p>
                        <label htmlFor="last-name">Last name</label>
                        <input placeholder={errors.last_name? `${errors.last_name}` : "Last name"}  type="text" name='last-name' id='last-name'
                        required
                        minLength={3}
                        onChange={(e) =>
                        setFormData({ ...formData, last_name: e.target.value })
                        }
                        className={errors.last_name? 'error' : ''}
                        />
                      </p>
                    </fieldset>
                    <fieldset className='fieldset row2'>
                      <p>
                        <label htmlFor="address">Address</label>
                        <input placeholder={errors.address? `${errors.address}` : "Address"}  type="text" id="address" name='address'
                        onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                        }
                        className={errors.address? 'error' : ''}
                        required
                        />
                      </p>
                      
                     <p>
                       <label htmlFor="city">City</label>
                       <input placeholder={errors.city? `${errors.city}` : "City"}  type="text" id="city" name='city'
                       onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                        }
                        className={errors.city? 'error' : ''}
                        required
                        />
                     </p>
                    </fieldset>
                    
                    <fieldset className='c-fieldset'>
                      <p>
                        <span>Country</span>
                        <ReactFlagsSelect 
                        
                        selected={selected}
                        onSelect={code => {
                          setSelected(code)
                          setFormData({ ...formData, country: code })
                        }}
                        countries = {countries}
                        customLabels = {customLabels}                     
                        required
                        className={errors.country? 'select-flag error-flag' : 'select-flag'}
                        placeholder={errors.country? `${errors.country}` : "Select a country"}
                        />
                    </p>
                </fieldset>
                <button 
                  className='cont-btn'
                  onClick={(e) => {
                    e.preventDefault()
                    handleSubmit()
                  }}>Continue to payment
              </button>
              </form>
        </div>
    </div>
  )
}

export default AddressForm