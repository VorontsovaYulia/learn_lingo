// import { NextResponse } from 'next/server';

// export async function GET() {
//   console.log('Vercel API URL:', process.env.NEXT_PUBLIC_API_URL);
//   const res = await fetch(
//     'https://learnlingo-5b90d-default-rtdb.firebaseio.com/teachers.json',
//     {
//       next: { revalidate: 60 },
//     }
//   );

//   const data = await res.json();
//   return NextResponse.json(data);
// }

// export async function GET() {
//   const res = await fetch(
//     'https://learnlingo-5b90d-default-rtdb.firebaseio.com/teachers.json'
//   );
//   const data = await res.json();

//   return NextResponse.json(data, {
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
//       'Access-Control-Allow-Headers': 'Content-Type',
//     },
//   });
// }
