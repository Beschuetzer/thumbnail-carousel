import React from "react";

export const decorators = [
  (Story: any) => (
    <div style={{ marginTop: 4 }}>
      {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
      <Story />
    </div>
  ),
];
