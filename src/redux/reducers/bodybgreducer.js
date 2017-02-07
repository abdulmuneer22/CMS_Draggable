const intitialState = "#966A30"

export default (state = intitialState,action) => {
    // console.log("called the reducer")
   switch(action.type){
       case 'UPDATE_BG':
       return action.payload

       default:
       return state

   }
   
}