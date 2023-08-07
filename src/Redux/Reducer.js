

const init={
    data:[]
}

export default function Reducer(state=init,action) {
  if(action.type===""){
    return ({...state,data:action.payload})
  }
  else{
    return state;
  }
}
