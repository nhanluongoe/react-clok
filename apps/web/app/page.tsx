import AnalogClockSection from "@/components/AnalogClockSection";
import DigitalClockSection from "@/components/DigitalClockSection";

export default function Home() {
  return (
    <div className="container mx-auto">
      <AnalogClockSection />
      <DigitalClockSection />
    </div>
  );
}
