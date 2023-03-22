
# IF WE USE "REDUX-TOOLKIT"

create a slice first in our case userSlice and todoSlice for every slice we have to create a object for the createSlice() function. As a argument object must have three values.


## createSlice Object Property  
```
const initialState = {}

const todoSlice = createSlice({
    name:"",
    initialState,
    reducers: {}
})
```

 - Name:- `name:todos`
 - Initial State:- ` initialState `
 - Reducers:- it is an object in this object we will define all the logic for this particular slice 
 ``` 
 reducers: {
    task: (state) => {
      state.numOfTask--;
    },
    addTask: (state, action) => {
      state.numOfTask += action.payload;
    },
  },
```