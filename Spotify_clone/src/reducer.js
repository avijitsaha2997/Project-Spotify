export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discoverWeekly: null
  // token: "BQBVFXwCbStDWFN6hkQSi21EJ7pIDsvpe7P36w1j2DztcseRcEDtq4JTxBFHYddhsJIZp6ZaC6XMSS9zflKKT4_M7LWF3CfRsfr6XoN1iCRxfJuNK8QOwGO0-wLus6Sc2ADkNAc0RP2KZ7JREryWmYBSFHQjFY0aesMGCMKnkrElBWfnu2EBMixNfKTk47Z8pn-5D9CRK6GpeeG5eL24"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discoverWeekly: action.discoverWeekly
      };
    default:
      return state;
  }
};
export default reducer;
