import useBchPrice from "../hooks/useBchPrice"

const convertPrice = (price, priceBCH) => {
    

    const productPrice = (price / priceBCH).toFixed(4)
    if (priceBCH === null) {
      return <p className='loader'></p>
    }
    return <>{productPrice} BCH</>
  }

export default convertPrice