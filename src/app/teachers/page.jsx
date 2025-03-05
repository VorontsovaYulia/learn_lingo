import { TeachersList } from "../components/TeachersList/TeachersList";

async function getData() {

  const res = await fetch(
    "https://learnlingo-5b90d-default-rtdb.firebaseio.com/teachers.json",
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error(res.status);
  return res.json();
}

export default async function Teachers() {

   const allTeachers = await getData();

  return <TeachersList teachers={allTeachers} />;
};
