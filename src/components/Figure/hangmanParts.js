export const Head = () => {
  return (
    <g id="head">
      <circle cx="200" cy="80" r="20" stroke-width="4" fill="rgb(86, 9, 102)" />
    </g>
  );
};

export const Body = () => {
  return <line x1="200" y1="100" x2="200" y2="150" />;
};

export const LeftArm = () => {
  return <line id="armL" x1="200" y1="120" x2="170" y2="140" />;
};

export const RightArm = () => {
  return <line id="armR" x1="200" y1="120" x2="230" y2="140" />;
};
export const LeftLeg = () => {
  return <line id="legL" x1="200" y1="150" x2="180" y2="190" />;
};
export const RightLeg = () => {
  return <line id="legR" x1="200" y1="150" x2="220" y2="190" />;
};

export const Lines = () => {
  return (
    <>
      <line x1="10" y1="250" x2="150" y2="250" />
      <line id="door1" x1="150" y1="250" x2="200" y2="250" />
      <line id="door2" x1="200" y1="250" x2="250" y2="250" />
      <line x1="250" y1="250" x2="390" y2="250" />
      <line x1="100" y1="250" x2="100" y2="20" />
      <line x1="100" y1="20" x2="200" y2="20" />
      <line id="rope" x1="200" y1="20" x2="200" y2="60" />
    </>
  );
};
