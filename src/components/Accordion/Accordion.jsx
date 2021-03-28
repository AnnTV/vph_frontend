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
import { NavHashLink } from '../Link/Link';

export const Accordion = ({ ...props }) => {
    return (
        <SuperAccordion
            className={'Accordion ' + props.className}
            allowZeroExpanded
            allowMultipleExpanded
            preExpanded={['uuid_0']}
        >
            {props.items.map((item, idx) => (
                <AccordionItem key={idx} uuid={`uuid_${idx}`}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {item.heading}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className={'Accordion__panel'}>
                            <div className={'Accordion__text'}>
                                {
                                    item.content.map((item, idx) => (
                                      <p key={idx}>{item}</p>
                                    ))
                                }
                            </div>
                            <div className={'Accordion__steps'}>
                                {
                                    item.steps.map((step, idx) => (
                                        <div className={'Accordion__steps__step'}>
                                            <NavHashLink
                                                path={`/education${step.path}`}
                                            >
                                                {step.text}
                                            </NavHashLink>
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
