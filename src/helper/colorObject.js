const colorObject = (color, colors) => {
  if (color === "مشکی") {
    colors.push({ title: "مشکی", hex: "#333" });
  }
  if (color === "سفید") {
    colors.push({ title: "سفید", hex: "#fff" });
  }
  if (color === "آبی") {
    colors.push({ title: "آبی", hex: "#1388cd" });
  }
  if (color === "طلایی") {
    colors.push({ title: "طلایی", hex: "#cda113" });
  }
  if (color === "قرمز") {
    colors.push({ title: "قرمز", hex: "#bd0310" });
  }
  if (color === "خاکستری") {
    colors.push({ title: "خاکستری", hex: "#878787" });
  }
};

export default colorObject