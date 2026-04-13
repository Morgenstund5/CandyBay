import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

function displayRating(rating) {
    const stars = []

        for (let i = 0; i < 5; i++) {
          stars.push(
            <FontAwesomeIcon
              key={i}
              icon={i < rating ? faStarSolid : faStarRegular}
            />
          )
        }
    return (
      <>
        {stars}
      </>
    )
  }

export default displayRating;