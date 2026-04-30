export const generateOrderId = () => {
    const num = Math.floor(Math.random()*9999);
    const padded = String(num).padStart(4, "0");
    let letters = ''
    for(let i = 0; i < 2; i++) {
        const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        letters += randomLetter;
    }
    const orderId = `#${letters}-${padded}`
    return orderId
}