import Image from "next/image";
import { unstable_noStore as noStore } from 'next/cache';

export default function Home() {
  noStore();

  const timeOnServer = new Date().toLocaleTimeString('en-US');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      Time on server is {timeOnServer}
    </main>
  );
}
