import React from 'react'

function PartList({ total, set, selected, path, zoom = 1, top = '50%' }) {
    let partslist = [];
    for (let i = 0; i < total; i++) {
        partslist.push(
            <div key={i + 1} className={selected === i ? `selected square ` : `square`}
                onClick={() => { set(i) }} >
                <img src={`character/${path}/${i + 1}.png`} alt="" height={60 * zoom} className="img-center" style={{ top }} />
            </div>
        )
    }
    return (
        <div className='list'>
            {partslist}
        </div>
    )
}
export default PartList
