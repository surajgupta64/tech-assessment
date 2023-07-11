import React from "react"

const History = () => {
    const list = JSON.parse(localStorage.getItem('history'));
    console.log(list)
    return (
        <>
            <div className='content grid3 mtop'>

                {list?.map((imageUrl, index) => (
                    <div className='mr-2 ml-2' key={index}>
                        <div className='img'>
                            <img src={imageUrl} alt={`Dog image ${index + 1}`} width='300px' height='300px' />
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

export default History
