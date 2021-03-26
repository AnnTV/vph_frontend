/* eslint-disable max-len */
import React from 'react';
import './News.css';
import { BlockTitle } from '../../components/BlockTitle/BlockTitle';
import { Devider } from '../../components/Devider/Devider';
import { newsCards } from '../../utils/infoData';
import { NewsCard } from '../../components/NewsCard/NewsCard';

export const News = () => {
    return (
        <div className={'Page'}>
            <BlockTitle
                children={'Ближайшие программы'}
                className={'Page__block'}
            />

            <div className={'Page__block News_courses'}>
                <ul className={'News_courses_ul'}>
                    {
                        newsCards.map(item => (
                            <li key={item.id}>
                                <NewsCard children={item} />
                            </li>
                        ))
                    }
                </ul>
            </div>

            <Devider className={'Page__devider'}/>
        </div>
    );
};
