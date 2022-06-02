import React from 'react'
import Part from './Part'

function Avatar({ body, eyes, eyebrows, clothing1, clothing2, clothing3,
    hair, mouths, hat, glasses }) {
    return (
        <div className='avatar'>
            <Part path="body" index={body} zIndex={0}></Part>
            <Part path="eyes" index={eyes} zIndex={1}></Part>
            <Part path="eyebrows" index={eyebrows} zIndex={1}></Part>
            <Part path="clothing1" index={clothing1} zIndex={2}></Part>
            <Part path="clothing2" index={clothing2} zIndex={3}></Part>
            <Part path="clothing3" index={clothing3} zIndex={4}></Part>
            <Part path="hair" index={hair} zIndex={4}></Part>
            <Part path="mouths" index={mouths} zIndex={5}></Part>
            <Part path="hat" index={hat} zIndex={6}></Part>
            <Part path="glasses" index={glasses} zIndex={7}></Part>
        </div>
    )
}
export default Avatar

