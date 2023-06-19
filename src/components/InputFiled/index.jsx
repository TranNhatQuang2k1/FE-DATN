import React from 'react'
import { Controller } from 'react-hook-form'
import './index.scss'
import images from '../../assets'

function InputField({
    label,
    name,
    type = 'input',
    form,
    placeholder,
    icon,
    defaultvalue,
    disabled
}) {
    const {
        formState: { errors }
    } = form
    const err = errors[name]
    return (
        <div className='input-wrap'>
        <div className='input-container'>
            <label className="input-field__label" htmlFor={name}>{label}</label>
            <Controller
                name={name}
                control={form.control}
                render={({
                    field: { onChange, onBlur, name }
                }) => (
                    <div className="input-field__container">
                        <div className="input-field__icon">
                            {true && 
                                <img
                                    src={icon}
                                    className='icon-img'
                                />}
                        </div>
                        <input
                            formNoValidate
                            id = {name}
                            onChange={onChange}
                            defaultValue={defaultvalue}
                            onBlur={onBlur}
                            value={form.getValues(name)}
                            type={type}
                            placeholder={placeholder}
                            disabled = {disabled}
                            className={`${
                                type === 'date' ? 'inputDate ' : ''
                            }input-field__input`}
                        />
                    </div>
                )}
            />
        </div>
        <div className="input-field__err">
            {err && err.message}
        </div>
    </div>
    )
}

export default InputField
