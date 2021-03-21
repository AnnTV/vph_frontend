import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import 'yup-phone';

import { contactFormErrors } from '../../utils/utilData';
import './ContactForm.css';

export const ContactForm = ({ ...props }) => {
    const schema = yup.object().shape({
        firstName: yup.string().required(),
        secondName: yup.string().required(),
        email: yup.string().required().email(),
        phone: yup.string().required().phone(),
        massage: yup.string().required()
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => console.log(data);

    const getErrorText = (errorType) => {
        switch (errorType) {
            case 'required':
                return contactFormErrors.empty;
            case 'matches':
                return contactFormErrors.notCorrect;
            case 'email':
                return contactFormErrors.notCorrect;
            case 'phone':
                return contactFormErrors.notCorrect;
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'ContactForm ' + props.className}>
            <input
                name="firstName"
                ref={register}
                placeholder={'Имя'}
                className={errors.firstName ? 'Input-error' : ''}
            />
            {errors.firstName && <span>{getErrorText(errors.firstName.type)}</span>}
            <input
                name="secondName"
                ref={register}
                placeholder={'Фамилия'}
                className={errors.secondName ? 'Input-error' : ''}
            />
            {errors.secondName && <span>{getErrorText(errors.secondName.type)}</span>}
            <input
                name="email"
                ref={register({ required: true })}
                placeholder={'Email'}
                className={errors.email ? 'Input-error' : ''}
            />
            {errors.email && <span>{getErrorText(errors.email.type)}</span>}
            <input
                name="phone"
                ref={register}
                placeholder={'Телефон'}
                className={errors.phone ? 'Input-error' : ''}
            />
            {errors.phone && <span>{getErrorText(errors.phone.type)}</span>}
            <textarea
                name="massage"
                ref={register}
                placeholder={'Ваше сообщение'}
                className={errors.massage ? 'Input-error' : ''}
            />
            {errors.massage && <span>{getErrorText(errors.massage.type)}</span>}
            <input value={'Написать нам'} type="submit" className={'Form-btn'}/>
        </form>
    );
};
