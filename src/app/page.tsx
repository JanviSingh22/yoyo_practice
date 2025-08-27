// 'use client';
// import { useEffect, useState } from "react";
import ConcertCard from "./concertcard";

export type Concert = {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  venue: string;
};

// export default async function Home() {
//   // const [concerts, setConcerts] = useState<Concert[]>([]);
//   // const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//     async function getConcert() {
//       const res = await fetch('https://turbo-concert.onrender.com/api/concerts?page=1&limit=10&throttle=5000');
//       const data = await res.json();
//       return data ;
//       // setConcerts(data);
//       // setLoading(false);
//     }
//     const concert = getConcert();
//   // }, []);

//   return (
//     <div>
//       <h1>Concerts</h1>
//         concerts.map((concert) => (
//           <ConcertCard key={concert.id} concert={concert} />
        
//         ));
//     </div>
//   );
// }


async function getConcerts(): Promise<Concert[]> {
  const res = await fetch('https://turbo-concert.onrender.com/api/concerts?page=1&limit=10&throttle=5000');
  const data = await res.json();
  return data;
}

export default async function Home() {
  const concerts = await getConcerts();

  return (
    <div>
      <h1>Concerts</h1>
      {concerts.map((concert) => (
        <ConcertCard key={concert.id} concert={concert} />
      ))}
    </div>
  );
}
