
import { useState, useEffect } from 'react'
import styles from './swicher.module.css'

const month = [
    {
        name : 'Basic',
        cost : 19.99,
        storage: 500,
        allowed : 2,
        send : 3
    },
    {
        name : 'Professional',
        cost : 24.99,
        storage: 1,
        allowed :5,
        send : 10
    },
    {
        name : 'Master',
        cost : 39.99,
        storage: 2,
        allowed : 10,
        send : 20
    }
]

const anual = [
    {
        name : 'Basic',
        cost : 199.99,
        storage: 500,
        allowed : 2,
        send : 3
    },
    {
        name : 'Professional',
        cost : 249.99,
        storage: 1,
        allowed :5,
        send : 10
    },
    {
        name : 'Master',
        cost : 399.99,
        storage: 2,
        allowed : 10,
        send : 20
    }
]


function Swicher() {
    
    const [ swicher, setSwicher ] = useState(true)
    const [ data, setData] = useState(month)


    const handdleChange = () => {

        setSwicher(!swicher)
        swicher ? setData(anual) : setData(month)
    }

    return (
        <div className={styles.app}>
            <div className={styles.status}>
                <h1 className={styles.mainTitle}>Our Pricing</h1>
                <span className={styles.selectionCont}> 
                    Annually 
                    <div  className={styles.ballCont} onClick={handdleChange}>
                        <div id={swicher ? styles.ballLeft : undefined} className={styles.ball}>
                    </div>
                    </div> Monthly
                </span>
            </div>
            <div className={styles.contentCont}>
                {data.map( e => 
                    <div id={e.name === 'Professional' ? styles.selected : undefined } className={styles.card} key={e.name}>
                        <div className={styles.firstCont}>
                            <span className={styles.title}>{e.name}</span>
                            <span className="animate__animated animate__bounceIn" id={styles.price}>${e.cost}</span>
                        </div>
                        <ul className={styles.benefits}>
                            <li className={styles.item}>{e.storage} GB Storage</li>
                            <li className={styles.item}>{e.allowed} Users Allowed</li>
                            <li className={styles.item}>Send up to {e.send} GB</li>
                        </ul>
                        <button className={styles.button} id={e.name === 'Professional' ? styles.buttonSelected : undefined } >LEARN MORE</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Swicher