const intitialState = 0

export default (state = intitialState,action) => {
    // console.log("called the reducer")
   switch(action.type){
       case 'UPDATE_COUNT':
       return state + action.payload

       default:
       return 0

   }
   
}