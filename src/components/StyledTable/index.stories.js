import StyledTable from "./";

export const StyledTableTest = {
  args: {
    title: "title",
  },
};

export default {
  component: StyledTable,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
      default: "title",
    },
  },
};
