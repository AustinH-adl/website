import { Archivo } from 'next/font/google';
import '@/styles/globals.css';

const ARCHIVO = Archivo({
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" className={`${ARCHIVO.className} w-full overflow-x-hidden`}>
            <body className="flex w-full justify-center overflow-x-hidden bg-primary-bg">
                {children}
            </body>
        </html>
    );
}

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};
