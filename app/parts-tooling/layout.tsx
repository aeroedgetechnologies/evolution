import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gas Turbine Parts - Fuel Nozzles, Turbine Blades, Shrouds, Flame Sensors | Energy World",
  description: "Find gas turbine parts including fuel nozzles, fuel nozzle blades, shrouds, flame sensors, centrifugal atomising compressors, turbine blades, turbine wheels, turbine rotor, combustion section parts, and overhauling services.",
  keywords: "fuel nozzles, fuel nozzle blades, shrouds, flame sensors, centrifugal atomising compressors, turbine blades, turbine wheels, turbine rotor, combustion section parts, overhauling, gas turbine parts, LM2500, LM6000, SGT-600, SGT-800, Frame 5B, Frame 9E",
};

export default function PartsToolingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}