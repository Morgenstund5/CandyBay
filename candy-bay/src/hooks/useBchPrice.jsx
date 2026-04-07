import React, { useEffect, useState } from 'react'

const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin-cash&vs_currencies=usd"

function useBchPrice() {
  const [price, setPrice] = useState(null)

  useEffect(() => {
    async function fetchPrice() {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
         /* 'x-cg-pro-api-key': '' */
        }
      }
    );
    const data = await response.json()
    setPrice(data["bitcoin-cash"].usd)
    }

    fetchPrice()
  },[])
  
  return price
}

export default useBchPrice