'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react';
import { IconPtbr } from '../svg/iconPtbr';
import styles from './styles.module.scss'
import { IconEn } from '../svg/iconEn';
import { cn } from '@/utils';


const options = [
    { value: 'pt', label: <IconPtbr /> },
    { value: 'en', label: <IconEn /> },
];


export default function LanguageSwitcher() {
    const router = useRouter()
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(options[0]);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(prev => !prev);

    const handleSelect = (option: typeof options[0]) => {
        setSelected(option);
        setIsOpen(false);
        const newPath = `/${option.value}${pathname.slice(3)}`
        router.push(newPath)
    };

    useEffect(() => {
        let currentLocale = options.filter(val => val.value == pathname.split('/')[1])
        setSelected(currentLocale[0])
    }, [])

    // Fecha o dropdown ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={styles.select} ref={dropdownRef}>
            <div className={styles.action}
                onClick={toggleDropdown}
            >
                {selected.label}
            </div>

            {isOpen && (
                <div className={styles.selectGroup}
                >
                    {options.map(option => (
                        <div className={cn(styles.selectOptions, option.value == selected.value && styles.hide)}
                            key={option.value}
                            onClick={() => handleSelect(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}