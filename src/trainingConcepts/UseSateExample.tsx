import {FC, useState} from 'react'

const UseStateExample: FC = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')
    const [fruta, setFruta] = useState("Mango")
    const setFrutaFunction = (fruta: string) =>{
        setFruta(fruta);
    }
    const countUntilTen = () =>{
        const tmpCount = count + 1;
        const showText= 'Felicidades haz llegado a 10'
        setCount(tmpCount)
        if(tmpCount > 10) {
            setCount(0)
        }
        if(tmpCount === 10){
            setText(showText)
        } else {
            setText('')
        }
        //{tmpCount === 10 && setText(showText)}
        //{tmpCount < 10 && setText('')}
    }
    return(
        <div>
            <p>Haz clickeado {count} veces.</p>
            <p>{text}</p>
            <p>Haz elegido {fruta} como tu fruta preferida.</p>
            <button onClick={countUntilTen}>Click Here</button>
            <button onClick={() => setFruta("Melon")}>Melon</button>
            <button onClick={() => setFruta("Sandia")}>Sandia</button>
        </div>
    )
}
export default UseStateExample