'use client';

export default function ErrorHome({ error }) {
  return <h1>Ooops!{error.message}</h1>;
}
