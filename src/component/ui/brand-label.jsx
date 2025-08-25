

const BrandLabel = ({
    text,
    style
}) => {
    return (
        <p 
            className={`${style} brand-bg-orange py-3 px-5 rounded-full font-heading whitespace-nowrap`}
        >
            {text} 
        </p> 
    )
}

export default BrandLabel;