import React from "react";

export const marginTop = [
  (Story: any) => (
    <div style={{ marginTop: 4 }}>
      {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
      <Story />
    </div>
  ),
];

export const maringAllAround = [
  (Story: any) => (
    <div style={{ margin: `10px ${window.innerWidth / 4}px 100px ${window.innerWidth / 4}px` }}>
      {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
      <Story />
    </div>
  ),
];
