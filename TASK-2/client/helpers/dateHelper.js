export const dateHelper = (compDate) => {
    const date = new Date()
    return date.toLocaleDateString(compDate,'en-US'); 
}