import { GraduationCap, MapPin, University } from "lucide-react";
import { LinkItem } from "./components/LinkItem";
import { InfoItem } from "./components/InfoItem";

export default function Home() {
  return (
    <div role="main">
      <h1 className="text-2xl font-bold py-4 text-red-700">arnav bharti</h1>
      <div className="py-2">
        <InfoItem Icon={MapPin} text="india" />
        <InfoItem Icon={University} text="bits pilani" />
        <InfoItem Icon={GraduationCap} text="computer science and biology" />
      </div>
      <p className="py-4">
        i enjoy machine learning and building apps. outside of programming, i
        like minecraft, harry potter, and game of thrones.
      </p>
      <div className="flex flex-row flex-wrap space-x-2 py-2">
        <LinkItem
          href="https://www.linkedin.com/in/arnavbharti01/"
          label="linkedin"
        />
        <LinkItem href="https://github.com/arnavbharti" label="github" />
        <LinkItem
          href="mailto:f20221585@pilani.bits-pilani.ac.in"
          label="email"
        />
        <LinkItem href={process.env.NEXT_PUBLIC_RESUME_URL!} label="resume" />
        <LinkItem href="https://x.com/arnavbharti01" label="x" />
      </div>
      <p className="py-2">© {new Date().getFullYear()}</p>
    </div>
  );
}
