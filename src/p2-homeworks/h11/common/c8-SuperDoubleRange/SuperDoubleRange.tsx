import React, {ChangeEvent} from 'react'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {


    const onChangeCallBack = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeRange && onChangeRange([+e.currentTarget.value, +e.currentTarget.value])
    }

    return (
        <>
            <input onChange={onChangeCallBack} type="range"/>
        </>
    )
}

export default SuperDoubleRange
