import { HTMLAttributes, ReactNode } from "react"
import styles from './styles.module.scss'
import { cn } from "@/utils"

interface ContainerProps extends HTMLAttributes<HTMLDivElement> { }

export function Container(props: ContainerProps) {
    return (
        <div {...props} className={cn(styles.container, props.className)} />
    )

}