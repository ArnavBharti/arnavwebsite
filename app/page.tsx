import { GraduationCap, MapPin, University } from "lucide-react";
import { LinkItem } from "./components/LinkItem";

export default function Home() {
  return (
    <>
      <h1>arnav bharti</h1>
      <div className="flex flex-row items-center space-x-1">
        <MapPin className="h-4 w-4" />
        <span>india</span>
      </div>
      <div className="flex flex-row items-center space-x-1">
        <University className="h-4 w-4" />
        <span>bits pilani</span>
      </div>
      <div className="flex flex-row items-center space-x-1">
        <GraduationCap className="h-4 w-4" />
        <span>computer science and biology</span>
      </div>
      <p>
        i enjoy machine learning and building apps. outside of programming, i
        like minecraft, harry potter, and game of thrones.
      </p>
      <div className="flex flex-row flex-wrap space-x-2">
        <LinkItem
          href="https://www.linkedin.com/in/arnavbharti01/"
          label="linkedin"
        />
        <LinkItem href="https://github.com/arnavbharti" label="github" />
        <LinkItem
          href="mailto:f20221585@pilani.bits-pilani.ac.in"
          label="email"
        />
        <LinkItem href="https://x.com/arnavbharti01" label="x" />
        <LinkItem href={process.env.NEXT_PUBLIC_RESUME_URL!} label="resume" />
      </div>
      <p>© {new Date().getFullYear()}</p>
    </>
  );
}
