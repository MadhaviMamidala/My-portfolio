type DividerProps = {
  variant?: 'wave' | 'diagonal' | 'curve' | 'zigzag';
  flip?: boolean;
  color?: string;
};

const SectionDivider = ({ variant = 'wave', flip = false, color = 'currentColor' }: DividerProps) => {
  const dividers = {
    wave: (
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full h-12 md:h-20 ${flip ? 'rotate-180' : ''}`}
        style={{ fill: color }}
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
      </svg>
    ),
    diagonal: (
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full h-12 md:h-16 ${flip ? 'rotate-180' : ''}`}
        style={{ fill: color }}
      >
        <polygon points="0,0 1200,120 1200,0" />
      </svg>
    ),
    curve: (
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full h-16 md:h-24 ${flip ? 'rotate-180' : ''}`}
        style={{ fill: color }}
      >
        <path d="M0,0 Q600,120 1200,0 L1200,0 L0,0 Z" />
      </svg>
    ),
    zigzag: (
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full h-10 md:h-16 ${flip ? 'rotate-180' : ''}`}
        style={{ fill: color }}
      >
        <path d="M0,0 L200,60 L400,0 L600,60 L800,0 L1000,60 L1200,0 L1200,120 L0,120 Z" />
      </svg>
    ),
  };

  return <div className="relative">{dividers[variant]}</div>;
};

export default SectionDivider;
