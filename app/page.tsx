import { unstable_noStore as noStore } from 'next/cache';
import { CurrentTimeFromAPI } from '@/components/CurrentTimeFromApi'

export default function Home() {
  noStore();

  const timeOnServer = new Date().toLocaleTimeString('en-US');
  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <div>Time on server is {timeOnServer}</div>
      <div>Client component added</div>
      <div>Env variable for server
        <ul>
          <li>Node version: {process.env.NODE_ENV}</li>
          <li>Cosmos Connection: {process.env.COSMOS_CONNECTION}</li>
        </ul>
      </div>
      <CurrentTimeFromAPI />
    </main>
  );
}
