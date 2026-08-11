"use client";

type Deco =
  | { type: "text"; text: string; className: string; mobile?: boolean }
  | { type: "star"; className: string; mobile?: boolean }
  | { type: "heart"; className: string; mobile?: boolean }
  | { type: "grid"; className: string; mobile?: boolean }
  | { type: "folder"; className: string; mobile?: boolean };

const items: Deco[] = [
  { type: "star", className: "top-[5%] left-[6%] drift-a twinkle text-[9px]" },
  { type: "star", className: "top-[9%] left-[22%] drift-b twinkle text-[7px]", mobile: false },
  { type: "star", className: "top-[7%] right-[18%] drift-c twinkle text-[8px]", mobile: false },
  { type: "star", className: "top-[14%] right-[7%] drift-a twinkle text-[10px]" },
  { type: "star", className: "top-[28%] left-[4%] drift-b twinkle text-[8px]" },
  { type: "star", className: "top-[36%] right-[3%] drift-c twinkle text-[7px]", mobile: false },
  { type: "star", className: "top-[48%] left-[2%] drift-a twinkle text-[9px]", mobile: false },
  { type: "star", className: "top-[55%] right-[5%] drift-b twinkle text-[8px]", mobile: false },
  { type: "star", className: "top-[68%] left-[7%] drift-c twinkle text-[7px]", mobile: false },
  { type: "star", className: "top-[74%] right-[10%] drift-a twinkle text-[9px]" },
  { type: "star", className: "top-[82%] left-[16%] drift-b twinkle text-[6px]", mobile: false },
  { type: "star", className: "top-[88%] right-[22%] drift-c twinkle text-[8px]", mobile: false },
  { type: "star", className: "top-[42%] left-[8%] drift-a twinkle text-[6px]", mobile: false },
  { type: "star", className: "top-[18%] left-[48%] drift-b twinkle text-[6px]", mobile: false },
  { type: "heart", className: "top-[22%] right-[5%] drift-b text-[9px]", mobile: false },
  { type: "heart", className: "bottom-[26%] left-[3%] drift-c text-[8px]", mobile: false },
  { type: "heart", className: "top-[60%] right-[2%] drift-a text-[7px]", mobile: false },
  { type: "grid", className: "top-[50%] right-[7%] drift-b", mobile: false },
  { type: "grid", className: "bottom-[16%] left-[5%] drift-a", mobile: false },
  { type: "folder", className: "bottom-[22%] right-[4%] drift-c", mobile: false },
  { type: "text", text: "</>", className: "top-[16%] left-[5%] drift-a text-[13px]" },
  { type: "text", text: "{ }", className: "top-[40%] left-[2.5%] drift-b text-[12px]", mobile: false },
  { type: "text", text: "01", className: "bottom-[32%] right-[2.5%] drift-c text-[11px]" },
  { type: "text", text: "const", className: "top-[58%] left-[2%] drift-a text-[10px]", mobile: false },
  { type: "text", text: ">_", className: "bottom-[12%] right-[12%] drift-b text-[12px]" },
  { type: "text", text: "=>", className: "top-[52%] left-[6%] drift-c text-[12px]", mobile: false },
  { type: "text", text: ";", className: "top-[30%] right-[8%] drift-a text-[14px]", mobile: false },
  {
    type: "text",
    text: ".me {\n  passion: true;\n}",
    className: "top-[11%] left-[12%] drift-a whitespace-pre text-[9px] leading-tight",
    mobile: false,
  },
  {
    type: "text",
    text: 'const dreams = ["code","coffee"];',
    className: "top-[19%] right-[10%] drift-b text-[9px]",
    mobile: false,
  },
  {
    type: "text",
    text: "/* building one line at a time */",
    className: "bottom-[14%] left-[14%] drift-c text-[9px]",
    mobile: false,
  },
  {
    type: "text",
    text: "> hello world_",
    className: "top-[86%] left-[7%] drift-a text-[10px]",
    mobile: false,
  },
  {
    type: "text",
    text: "<div> building my story </div>",
    className: "top-[44%] right-[3.5%] drift-b text-[9px]",
    mobile: false,
  },
  {
    type: "text",
    text: "01100 10110 11101",
    className: "top-[78%] right-[16%] drift-c text-[9px]",
    mobile: false,
  },
  {
    type: "text",
    text: "fn main() {}",
    className: "top-[33%] left-[3%] drift-a text-[9px]",
    mobile: false,
  },
  {
    type: "text",
    text: "npm start",
    className: "bottom-[40%] left-[4%] drift-b text-[9px]",
    mobile: false,
  },
];

function Star() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
      <path d="M6 0h1v4h4v1H7v4H6V5H2V4h4V0z" />
      <path d="M2 2h1v1H2zm7 0h1v1H9zM2 8h1v1H2zm7 0h1v1H9z" opacity="0.7" />
    </svg>
  );
}

function Heart() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M6 9S1.5 6 1.5 3.4C1.5 2 2.5 1.2 3.6 1.2c.9 0 1.5.5 2.4 1.4.9-.9 1.5-1.4 2.4-1.4 1.1 0 2.1.8 2.1 2.2C10.5 6 6 9 6 9Z" />
    </svg>
  );
}

function Grid() {
  return (
    <div
      className="h-7 w-7"
      style={{
        backgroundImage: "radial-gradient(circle, currentColor 0.9px, transparent 1px)",
        backgroundSize: "4px 4px",
      }}
      aria-hidden="true"
    />
  );
}

function Folder() {
  return (
    <div className="flex flex-col items-center gap-0.5 leading-none">
      <svg width="14" height="12" viewBox="0 0 14 12" fill="currentColor" aria-hidden="true">
        <path d="M0 2h4l1.5 1.5H14V11H0V2Z" />
      </svg>
      <span className="text-[7px]">projects(4)</span>
    </div>
  );
}

export function FloatingDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {items.map((item, i) => {
        const hide = item.mobile === false ? "hidden md:block" : "";
        const base = `absolute select-none font-pixel text-pink-bright/35 ${item.className} ${hide}`;

        if (item.type === "star") {
          return (
            <span key={i} className={base}>
              <Star />
            </span>
          );
        }
        if (item.type === "heart") {
          return (
            <span key={i} className={base}>
              <Heart />
            </span>
          );
        }
        if (item.type === "grid") {
          return (
            <span key={i} className={`${base} text-pink/30`}>
              <Grid />
            </span>
          );
        }
        if (item.type === "folder") {
          return (
            <span key={i} className={`${base} text-pink/40`}>
              <Folder />
            </span>
          );
        }
        return (
          <span key={i} className={base}>
            {item.text}
          </span>
        );
      })}
    </div>
  );
}
