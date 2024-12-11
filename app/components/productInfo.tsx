import React from 'react'

const ProductInfo = () => {
    const onClickSideView = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        console.log('clicked', e.currentTarget.textContent)
        if (e.currentTarget.textContent === 'Side view') {
            e.currentTarget.textContent = 'Front view'
            document
                .querySelector('.showFrontView')
                ?.classList.replace('showFrontView', 'showSideView')
        } else {
            e.currentTarget.textContent = 'Side view'
            document
                .querySelector('.showSideView')
                ?.classList.replace('showSideView', 'showFrontView')
        }
    }

    return (
        <div className='wrapper'>
            <div className='productinfo'>
                <button
                    className='sideViewBtn showFrontView typography-caption button'
                    aria-hidden='true'
                    aria-label='Switch to side view'
                    type='button'
                    onClick={onClickSideView}
                >
                    Side view
                </button>
                <div
                    aria-live='polite'
                    role='text'
                >
                    <div className='productcollection typography-caption'>
                        {/*watch name*/}
                    </div>
                    <div className='producttitle'>
                        {/*size*/} {/* caseName*/} with {/*bandName*/}
                    </div>
                    <div className='productprice'>
                        <div className='pricepoint-fullPrice-comparative'>
                            From <span className='nowrap'>{/*price*/}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo
