import React from 'react';
import {
    Accordion as SuperAccordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import { ArrowDownIcon } from '../Icon';

import 'react-accessible-accordion/dist/fancy-example.css';
import './Accordion.css';

export const Accordion = ({ ...props }) => {
    return (
        <SuperAccordion className={'Accordion ' + props.className} allowZeroExpanded>
            {props.items.map((item, idx) => (
                <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {item.heading}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className={'Accordion__panel'}>
                            <div className={'Accordion__text'}>
                                {item.content}
                            </div>
                            <div className={'Accordion__steps'}>
                                {
                                    item.steps.map((step, idx) => (
                                        <div className={'Accordion__steps__step'}>
                                            <span>{step.text}</span>
                                            {idx !== (item.steps.length - 1) &&
                                                <ArrowDownIcon width={24} height={24} />
                                            }
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        </SuperAccordion>
    );
};
