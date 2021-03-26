import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import 'yup-phone';

import { contactFormErrors } from '../../utils/utilData';
import './ContactForm.css';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';

export const ContactForm = ({ ...props }) => {
    const schema = yup.object().shape({
        firstName: yup.string().required(),
        secondName: yup.string().required(),
        email: yup.string().required().email(),
        phone: yup.string().required().phone(),
        massage: yup.string().required()
    });

    const { register, handleSubmit, errors, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const submitHandler = data => {
        console.log(data);

        // eslint-disable-next-line max-len
        const appLink = "https://script.google.com/macros/s/AKfycbyCmc4suEEULu9W6UISKkjVhEuEPkYjVLu3oGu_OkMA5EfSc2V3IYWQ6c6F00eCKaPa/exec";

        let formData = new FormData();
        formData.append('имя', data.firstName);
        formData.append('фамилия', data.secondName);
        formData.append('email', data.email);
        formData.append('телефон', data.phone);
        formData.append('сообщение', data.massage);

        axios.post(appLink, formData)
            .then(response => {
                console.log(response);
                reset();
                NotificationManager.success('Ваше сообщение отправлено, скоро мы с вами свяжемся', 'Успех!');
            })
            .catch(error => {
                console.log(error);
                // eslint-disable-next-line max-len
                NotificationManager.error('Призошла ошибка, попробуйте позже или свяжитесь с нами по телефон: +7 995 895 21 67', 'Ошибка!', 5000);
            })
    }

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
        <>
            <form onSubmit={handleSubmit(submitHandler)} className={'ContactForm ' + props.className}>
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
        </>
    );
};
