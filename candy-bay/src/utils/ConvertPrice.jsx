import useBchPrice from "../hooks/useBchPrice"

const convertPrice = (price, priceBCH) => {
    

    const productPrice = (price / priceBCH).toFixed(4)
    if (priceBCH === null) {
      return <span className='loader'></span>
    }
    return <>{productPrice} BCH</>
  }

export default convertPrice