const intitialState = "#FFFFFF"

export default (state = intitialState,action) => {
    // console.log("called the reducer")
   switch(action.type){
       case 'HOME_STYLE_RECEIVED':
       console.log(action.payload)
       return action.payload.bgcolor


       case 'UPDATED_HOME_BG':
       console.log(action.payload)
       return action.payload
       
       default:
       return state

   }
   
}