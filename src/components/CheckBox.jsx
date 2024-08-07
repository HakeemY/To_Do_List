import { useState } from "react"

const CheckBox = () => {
    const [checked, setChecked] = useState('')
    const handleChange = (e) => {
        setChecked({...checked, [e.target.name] : e.target.checked})

    }

    return (
        <>
            <input 
            name="checkbox"
            value={checked.checkbox}
            onChange={handleChange}
            type="checkbox" />
        </>
    )
}

export default CheckBox