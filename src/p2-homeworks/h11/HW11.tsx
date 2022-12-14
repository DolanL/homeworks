import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)



    const onChangeHandler = (value: number) => {
        setValue1(value)
    }

    const onChangeHandler2 = ([firstValue, secondValue]: Array<number>) => {
        setValue1(firstValue)
        setValue2(secondValue)
    }


    return (

        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>

                <div><span>{value1}</span></div>
                <SuperRange
                    onChangeRange={onChangeHandler}
                />
            </div>

            <div>

                <span>{value1}</span>
                <SuperDoubleRange
                    onChangeRange={onChangeHandler2}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
