/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import './News.css';
import { BlockTitle } from '../../components/BlockTitle/BlockTitle';
import { Devider } from '../../components/Devider/Devider';
import { NewsCard } from '../../components/NewsCard/NewsCard';
import axios from 'axios';
import GridLoader from 'react-spinners/GridLoader';

export const News = () => {
    const [newsCards, setNewsCards] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        const appLink =
            'https://script.google.com/macros/s/AKfycbxWkfRUud7c_' +
            'w4SauLMSVkuWKb2D138PlvdJ9KNh_bLTG3Xzj1OkVKX-QenXstUrPiX/exec';

        axios
            .get(appLink)
            .then((response) => {
                console.log(response);
                setNewsCards(response.data.result);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className={'Page'}>
            <BlockTitle children={'Ближайшие программы'} className={'Page__block'} />

            {loading ? (
                <div className={'Page__loader'}>
                    <GridLoader color={'var(--primary-2)'} loading={loading} size={25} margin={4} />
                </div>
            ) : (
                <div className={'Page__block News_courses'}>
                    <ul className={'News_courses_ul'}>
                        {newsCards.map((item) => (
                            <li key={item.id}>
                                <NewsCard children={item} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <Devider className={'Page__devider'} />
        </div>
    );
};
