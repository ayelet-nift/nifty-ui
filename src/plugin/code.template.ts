console.log("✅ code.ts loaded");

__INLINE_TOKENS__


function hexToRgb(hex: string): RGB {
  const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!res) throw new Error("Invalid hex color: " + hex);
  return {
    r: parseInt(res[1], 16) / 255,
    g: parseInt(res[2], 16) / 255,
    b: parseInt(res[3], 16) / 255,
  };
}

figma.on("run", async () => {
  console.log("🏁 Generating individual button components…");

  const container = figma.createFrame();
  container.name = "Buttons Container";
  container.layoutMode = "VERTICAL";
  container.primaryAxisSizingMode = "AUTO";
  container.counterAxisSizingMode = "AUTO";
  container.primaryAxisAlignItems = "MIN";
  container.counterAxisAlignItems = "CENTER";
  container.itemSpacing = 32;
  container.paddingTop = 20;
  container.paddingBottom = 20;
  container.paddingLeft = 20;
  container.paddingRight = 20;
  container.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];

  for (const [variantName, config] of Object.entries(buttonTokens.variants)) {
    const base = config.states.base;

    const frame = figma.createFrame();
    frame.name = `Button / ${variantName}`;
    frame.layoutMode = "HORIZONTAL";
    frame.counterAxisAlignItems = "CENTER";
    frame.primaryAxisAlignItems = "CENTER";
    frame.primaryAxisSizingMode = "AUTO";
    frame.counterAxisSizingMode = "AUTO";
    frame.itemSpacing = 8;
    frame.paddingTop = config.padding[0];
    frame.paddingBottom = config.padding[0];
    frame.paddingLeft = config.padding[1];
    frame.paddingRight = config.padding[1];
    frame.cornerRadius = config.radius;
    frame.fills = base.background
      ? [{ type: "SOLID", color: hexToRgb(base.background) }]
      : [];

    if (base.border) {
      frame.strokes = [{ type: "SOLID", color: hexToRgb(base.border) }];
      frame.strokeWeight = 2;
    }

    if ('opacity' in base && typeof base.opacity === "number") {
      frame.opacity = base.opacity;
    }

    const text = figma.createText();
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    text.characters = config.label;
    text.fills = base.textColor
      ? [{ type: "SOLID", color: hexToRgb(base.textColor) }]
      : [];
    text.textAutoResize = "WIDTH_AND_HEIGHT";
    text.textAlignHorizontal = "CENTER";
    text.textAlignVertical = "CENTER";

    frame.appendChild(text);

    const component = figma.createComponentFromNode(frame);
    component.name = `Button / ${variantName}`;
    container.appendChild(component);
  }

  container.x = figma.viewport.center.x - container.width / 2;
  container.y = figma.viewport.center.y - container.height / 2;
  figma.viewport.scrollAndZoomIntoView([container]);

  console.log("✅ Buttons generated into vertical container");
  figma.closePlugin("✅ Done!");
});
