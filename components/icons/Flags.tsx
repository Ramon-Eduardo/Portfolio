export function USFlag({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 640 480" className={className} xmlns="http://www.w3.org/2000/svg">
            <path fill="#bd3d44" d="M0 0h640v480H0" />
            <path stroke="#fff" strokeWidth="37" d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640" />
            <path fill="#192f5d" d="M0 0h257v221H0z" />
            <path fill="#fff" d="M37 28h15v15H37m48 0h15v15H85m49 0h15v15h-15m48 0h15v15h-15m48 0h15v15h-15M14 65h15v15H14m48 0h15v15H62m48 0h15v15h-15m48 0h15v15h-15m49 0h15v15h-15M37 101h15v15H37m48 0h15v15H85m49 0h15v15h-15m48 0h15v15h-15m48 0h15v15h-15M14 138h15v15H14m48 0h15v15H62m48 0h15v15h-15m48 0h15v15h-15m49 0h15v15h-15M37 175h15v15H37m48 0h15v15H85m49 0h15v15h-15m48 0h15v15h-15m48 0h15v15h-15" />
        </svg>
    );
}

export function BRFlag({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 640 480" className={className} xmlns="http://www.w3.org/2000/svg">
            <path fill="#009c3b" d="M0 0h640v480H0z" />
            <path fill="#fdf402" d="M85 240l235-165 235 165-235 165z" />
            <circle fill="#002776" cx="320" cy="240" r="108" />
            <path fill="#fff" d="M320 240l87-54-18 108z" transform="scale(0)" />
            <path fill="#fff" fillRule="evenodd" d="M228 243c53-24 133-14 186 16v13c-53-30-134-40-186-16v-13z" />
        </svg>
    );
}
