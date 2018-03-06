export const ON_CHANGE_SELECT = "ON_CHANGE_SELECT";
export const ON_CHANGE_RADIO = "ON_CHANGE_RADIO";

export const onChangeSelect = (data) => {
  return {
    type: ON_CHANGE_SELECT,
    data: data
  };
}
export const onChangeRadio = (data) => {
  return {
    type: ON_CHANGE_RADIO,
    data: data
  };
}