const checkCart = (state, title, color) => {
  const result = !!state.selectedItems.find(
    (item) => item.title === title && item.color.title === color
  );
  return result;
};

export default checkCart;
