export const UpdateBG = (color) => {
    console.log("Called the update bg action ")
    return{
        type : 'UPDATE_BG',
        payload : color
    }
}