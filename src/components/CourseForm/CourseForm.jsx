import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SkyLightStateless } from 'react-skylight';
import * as yup from 'yup';
import 'yup-phone';

import { contactFormErrors } from '../../utils/utilData';
import './CourseForm.css';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import { courseOptions, payFormOptions } from '../../utils/infoData';
import { ButtonLink } from '../Button/Button';

export const CourseForm = ({ ...props }) => {
    const [popupVisible, setPopupVisible] = useState(false);
    const [payLink, setPayLink] = useState('');
    const [userName, setUserName] = useState('');

    const schema = yup.object().shape({
        firstName: yup.string().required(),
        secondName: yup.string().required(),
        email: yup.string().required().email(),
        phone: yup.string().required().phone(),
        massage: yup.string(),
    });

    const { register, handleSubmit, errors, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const submitHandler = (data) => {
        console.log(data);
        console.log(data.course);

        const appLink =
            'https://script.google.com/macros/s/AKfycbxP87HSco4soeNN3o5cZNKkUI_' +
            'k8XFZpZIVcs3v_3In9lN9qAiqoTt-_g2AvmL2c-Uo/exec';

        let formData = new FormData();
        formData.append('имя', data.firstName);
        formData.append('фамилия', data.secondName);
        formData.append('email', data.email);
        formData.append('телефон', data.phone);
        formData.append('сообщение', data.massage);
        formData.append('курс', data.course);

        axios
            .post(appLink, formData)
            .then((response) => {
                console.log(response);
                reset();
                NotificationManager.success('Ваше сообщение отправлено, скоро мы с вами свяжемся', 'Успех!');

                if (
                    courseOptions
                        .slice(9)
                        .map((item) => item.value)
                        .includes(data.course)
                ) {
                    setUserName(data.firstName);
                    setPayLink(
                        `/pay/${getCourseId(data.course)}?firstName=${data.firstName}&secondName=${
                            data.secondName
                        }&email=${data.email}&phone=${data.phone}`,
                    );
                    setPopupVisible(true);
                }
            })
            .catch((error) => {
                console.log(error);
                NotificationManager.error(
                    'Призошла ошибка, попробуйте позже или свяжитесь с нами по телефон: +7 995 895 21 67',
                    'Ошибка!',
                    5000,
                );
            });
    };

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
    };

    const getCourseId = (title) => {
        for (let i = 0; i < payFormOptions.length; ++i) {
            if (payFormOptions[i].title === title) {
                return i;
            }
        }
        return 0;
    };

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

                <select name={'course'} ref={register} className={'ContactForm__select'}>
                    {courseOptions.map((value) => (
                        <option key={value.value} value={value.value} selected={props.course === value.value}>
                            {value.value}
                        </option>
                    ))}
                </select>
                {errors.phone && <span>{getErrorText(errors.phone.type)}</span>}
                <textarea
                    name="massage"
                    ref={register}
                    placeholder={'Ваше сообщение'}
                    className={errors.massage ? 'Input-error' : ''}
                />
                {errors.massage && <span>{getErrorText(errors.massage.type)}</span>}
                <input value={'Записаться'} type="submit" className={'Form-btn'} />
            </form>
            <SkyLightStateless
                isVisible={popupVisible}
                onCloseClicked={() => {
                    window.location.href = '/main';
                    setPopupVisible(false);
                }}
                title={`${userName}, ваша запись прошла успешно!`}
            >
                <div>
                    <p>Вы можете произвести оплату выбранного курса прямо сейчас или же дождаться нашего ответа!</p>
                    <ButtonLink path={payLink} children={'Перейти к оплате'} />
                </div>
            </SkyLightStateless>
        </>
    );
};
