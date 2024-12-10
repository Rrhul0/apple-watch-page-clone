import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const displayRegular = localFont({
    src: './fonts/sf-pro-display_regular.woff2',
    variable: '--font-sf-display-regular',
    weight: '100 900'
})
const textRegular = localFont({
    src: './fonts/sf-pro-text_regular.woff2',
    variable: '--font-sf-text-regular',
    weight: '100 900'
})
const displaySemiBold = localFont({
    src: './fonts/sf-pro-display_semibold.woff2',
    variable: '--font-sf-display-semi-bold',
    weight: '600'
})
const textSemiBold = localFont({
    src: './fonts/sf-pro-text_semibold.woff2',
    variable: '--font-sf-text-semi-bold',
    weight: '600'
})
const iconsRegular = localFont({
    src: './fonts/sf-pro-icons_regular.woff2',
    variable: '--font-sf-icons-regular',
    weight: '100 900'
})

export const metadata: Metadata = {
    title: 'Create Your Apple Watch Series 10 Style - Apple',
    description:
        'Choose an Apple Watch and case. Pair any band. Express your style with a variety of colors, finishes, and materials in the Apple Watch Studio.'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body
                className={`${displayRegular.variable} ${textRegular.variable} ${displaySemiBold.variable} ${textSemiBold.variable} ${iconsRegular.variable}`}
            >
                {children}
            </body>
        </html>
    )
}
