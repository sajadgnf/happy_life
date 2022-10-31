const quantityCount = (state, title, color) => {
  const index = state.selectedItems.findIndex(
    (item) => item.title === title && item.color.title === color
  );
  if (index === -1) {
    return false;
  } else {
    return state.selectedItems[index].quantity;
  }
};

export default quantityCount;
