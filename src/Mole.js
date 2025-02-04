import { useEffect } from 'react'
import moleImg from './mole.png'

function Mole(props){
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    }, [props.setDisplayMole])

    return (
        <div>
            <img style={{ 'width': '30vw' }}
                src={moleImg}
                onClick={props.handleClick} />
        </div>
    )
}

export default Mole;
