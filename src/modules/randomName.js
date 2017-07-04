export const GET_RANDOM_NAME = 'randomName/GET_RANDOM_NAME'

let nameCur = "adam";

const nameList = ["adam", "bob", "carl", "david", "edgar", "fred", "george", "henry", "izzy", "james", "kurt"]
const initialState = {
  name: nameCur
}

function getRandom() {
	let nameNew = "";

	console.log("---");
	console.log("nameCur:", nameCur);
	console.log("nameNew:", nameNew);
	while (nameNew === "" || nameNew === nameCur) {
	  console.log("...recursing");
		nameNew = nameList[Math.floor(Math.random() * nameList.length)];
		//getRandom()
	}
	console.log("nameCur:", nameCur);
	console.log("nameNew:", nameNew);
	nameCur = nameNew;
	return nameCur;
}


export default (state = initialState, action) => {

  switch (action.type) {
    case GET_RANDOM_NAME:
      return {
        ...state,
        name: getRandom()
      }

    default:
      return state
  }
}

export const getRandomName = () => {
  return dispatch => {
    dispatch({
      type: GET_RANDOM_NAME
    })
  }
}
