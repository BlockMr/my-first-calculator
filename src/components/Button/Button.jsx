import './Button.css'

export default function Button({ symbol, color, text_color, handleClick }) {
    return (
    <div 
    onClick={() => handleClick(symbol)} 
    className="button-wrapper" 
    style={{ backgroundColor: color, color: text_color}}
    >
        {symbol}
    </div>
    )
}
