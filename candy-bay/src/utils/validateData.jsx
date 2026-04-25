export const validateData =(formData) => {
    let newErrors = {}
    if(!formData.first_name || formData.first_name.trim().length < 2) {
      console.log("First name must have at least two characters")
      newErrors.first_name="First name must have at least two characters"
    }
    if(!formData.last_name || formData.last_name.trim().length < 2) {
      console.log("Last name must have at least two characters")
      newErrors.last_name = "Last name must have at least two characters"
    }
    if(!formData.address || formData.address.trim() === "") {
      console.log("Address is required")
      newErrors.address="Address is required"
    }
    if(!formData.city||formData.city.trim() === "") {
      console.log("City is required")
      newErrors.city="City is required"
    }
    if(!formData.country) {
      console.log("Country is required")
      newErrors.country="Country is required"
    }
    return newErrors
  }