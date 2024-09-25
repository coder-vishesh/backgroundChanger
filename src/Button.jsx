function Button({buttonColor, changeColor}) { 
    return (
        <div> 
            <button className="btn" style={{backgroundColor: buttonColor}} onClick={()=>changeColor(buttonColor)}>{buttonColor}</button>
        </div>
    )
}
export default Button