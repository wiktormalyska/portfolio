export const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className="w-full pt-20 flex justify-center text-neutral-600">
            Copyright © Wiktor Małyska {year}
        </div>
    )
}