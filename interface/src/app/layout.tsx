import { Metadata } from 'next';
import { Google_Sans_Flex } from 'next/font/google';
import '@/style/global.css';

export const metadata: Metadata = {
    title: 'scanx • Digitize pictures in seconds',
    robots: 'index, follow'
}

const font = Google_Sans_Flex({ subsets: ['latin'] });

export default function RootLayout(props: { children: React.ReactNode }) {
    return <html lang='en'>
        <body className={font.className}>
            {props.children}
        </body>
    </html>
}
