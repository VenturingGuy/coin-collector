function Quantities(props){
    const { pennies, nickels, dimes, quarters } = props
    return (
        <span>Pennies: {pennies} Nickels: {nickels} Dimes: {dimes} Quarters: {quarters}</span>
    )
}

export default Quantities