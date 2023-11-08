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
    <div style={{ margin: `10px 25% 100px 25%` }}>
      {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
      <Story />
    </div>
  ),
];
