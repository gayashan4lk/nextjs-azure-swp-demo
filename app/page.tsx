import Image from "next/image";
import { unstable_noStore as noStore } from 'next/cache';
import { CurrentTimeFromAPI } from '@/app/components/CurrentTimeFromApi'

export default function Home() {
  noStore();

  const timeOnServer = new Date().toLocaleTimeString('en-US');
  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <div>Time on server is {timeOnServer}</div>
      <div>Client component added</div>
      <CurrentTimeFromAPI />
    </main>
  );
}
