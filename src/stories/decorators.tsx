import React from "react";

export const container = [
  (Story: any) => (
    <div style={{ padding: 10, maxWidth: 750, backgroundColor: "#888"}}>
      {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
      <Story />
    </div>
  ),
];

export const maringAllAround = [
  (Story: any) => (
    <div style={{ margin: `10px 25% 100px 25%` }}>
      {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
      <Story />
    </div>
  ),
];

export const halfWidthOneCarousel = [
  (Story: any) => (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%" }}>
        <Story />
      </div>
    </div>
  ),
];

export const halfWidthTwoCarousels = [
  (Story: any) => (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%", marginRight: "4px" }}>
        <Story />
      </div>
      <div style={{ width: "50%", marginLeft: "4px" }}>
        <Story />
      </div>
    </div>
  ),
];

export const paddingTop = [
  (Story: any) => (
    <div style={{ maxWidth: 750, paddingTop: 100, backgroundColor: "#eee" }}>
      <Story />
    </div>
  ),
];

