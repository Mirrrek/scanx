import style from '@/style/Fullscreen.module.css';

export type FullscreenProps = {
    children?: React.ReactNode;
}

export default function Fullscreen(props: FullscreenProps) {
    return <div className={style.fullscreen}>
        {props.children}
    </div>
}
