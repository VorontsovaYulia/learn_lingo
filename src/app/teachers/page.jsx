import { TeachersList } from "../components/TeachersList/TeachersList";

export const metadata = {
  title: 'Teachers | LearnLingo',
};

async function getData() {

  const res = await fetch(
    "https://learnlingo-5b90d-default-rtdb.firebaseio.com/teachers.json",
    { next: { revalidate: 60 } }
  );

   if (!res.ok) throw new Error('Unable to fetch teachers');
   
  return res.json();
};

export default async function Teachers() {

   const allTeachers = await getData();

  return <TeachersList teachers={allTeachers} />;
};
