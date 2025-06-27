import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import React from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline'
import './accordion.css'

export default function Accordion() {
    const items = [
        {
            title: 'What is React?',
            content: 'React is a Javascript library for building user interfaces'
        },
        {
            title: 'What is Headless UI?',
            content: 'Headless UI provides unstyled accessible components for React and Vue'
        },
        {
            title: 'How do I style it?',
            content: 'You can use Tailwind CSS or your own custom CSS'
        }
    ]

    return (
        <div className="accordion">
            { items.map((item, index) => (
                <Disclosure key={index}>
                    {({open}) => (
                        <>
                            <DisclosureButton className={open ? "button-open" : "button"}>
                                <span>{item.title}</span>
                                <ChevronUpIcon style={{ width: '16px', height: '16px' }} />
                            </DisclosureButton>

                            <DisclosurePanel>
                                {item.content}
                            </DisclosurePanel>
                        </>
                    )}
                </Disclosure>
            ))}
        </div>
    )
}