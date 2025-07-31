



const BrandLabel = ({
    text,
    style
}) => {
    return (
        <p 
            href="" 
            className={`${style} inline-flex items-center gap-2 brand-bg-orange py-3 px-5 rounded-full font-heading`}
        >
            {text} 
        </p> 
    )
}

export default BrandLabel;