// Inline SVG icons. No icon library, no network request, no layout shift.
type P = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const PhoneIcon = ({ className = "h-6 w-6" }: P) => (
  <svg {...base} className={className}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

export const FlameIcon = ({ className = "h-7 w-7" }: P) => (
  <svg {...base} className={className}>
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3.3.3 1.3 1.3 2.4 2.5 2.8z" />
  </svg>
);

export const SnowIcon = ({ className = "h-7 w-7" }: P) => (
  <svg {...base} className={className}>
    <path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1 19.1 4.9M9 4l3 2 3-2M9 20l3-2 3 2M4 9l2 3-2 3M20 9l-2 3 2 3" />
  </svg>
);

export const WrenchIcon = ({ className = "h-7 w-7" }: P) => (
  <svg {...base} className={className}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z" />
  </svg>
);

export const ClockIcon = ({ className = "h-7 w-7" }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

export const AlertIcon = ({ className = "h-7 w-7" }: P) => (
  <svg {...base} className={className}>
    <path d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3z" />
    <path d="M12 9v4M12 17h.01" />
  </svg>
);

export const WindIcon = ({ className = "h-7 w-7" }: P) => (
  <svg {...base} className={className}>
    <path d="M17.7 7.7A2.5 2.5 0 1 1 19.5 12H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2" />
  </svg>
);

export const ThermostatIcon = ({ className = "h-7 w-7" }: P) => (
  <svg {...base} className={className}>
    <path d="M14 4v10.5a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" />
    <path d="M12 9v7" />
  </svg>
);

export const NoiseIcon = ({ className = "h-7 w-7" }: P) => (
  <svg {...base} className={className}>
    <path d="M11 5 6 9H2v6h4l5 4V5z" />
    <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" />
  </svg>
);

export const SmokeIcon = ({ className = "h-7 w-7" }: P) => (
  <svg {...base} className={className}>
    <path d="M8 20c-2 0-3-1.5-3-3 0-2 2-2.5 2-4.5S5 9 6.5 7M13 20c-2 0-3-1.5-3-3 0-2 2-2.5 2-4.5S10 9 11.5 7M18 20c-2 0-3-1.5-3-3 0-2 2-2.5 2-4.5S15 9 16.5 7" />
  </svg>
);

export const PowerOffIcon = ({ className = "h-7 w-7" }: P) => (
  <svg {...base} className={className}>
    <path d="M18.4 6.6a9 9 0 1 1-12.8 0M12 2v10" />
  </svg>
);

export const HouseIcon = ({ className = "h-7 w-7" }: P) => (
  <svg {...base} className={className}>
    <path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M9 22V12h6v10" />
  </svg>
);

export const DuctIcon = ({ className = "h-7 w-7" }: P) => (
  <svg {...base} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M7 9h10M7 12h10M7 15h10" />
  </svg>
);

export const CheckIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const ArrowIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export const PinIcon = ({ className = "h-6 w-6" }: P) => (
  <svg {...base} className={className}>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const ICONS = {
  flame: FlameIcon,
  snow: SnowIcon,
  wrench: WrenchIcon,
  clock: ClockIcon,
  alert: AlertIcon,
  wind: WindIcon,
  thermostat: ThermostatIcon,
  noise: NoiseIcon,
  smoke: SmokeIcon,
  power: PowerOffIcon,
  house: HouseIcon,
  duct: DuctIcon,
} as const;

export type IconName = keyof typeof ICONS;
