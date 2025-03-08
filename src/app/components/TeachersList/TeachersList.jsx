"use client";

import { useEffect, useState } from "react";
import {useStore} from "../../store/store";
import { TeacherCard } from "../TeacherCard/TeacherCard";
import styles from './TeachersList.module.css';

export const TeachersList = ({teachers}) => {

    const setTeachers = useStore((state) => state.setTeachers);
    const [showTeachers, setShowTeachers] = useState(3)

    const loadMore = () => {
        setShowTeachers(showTeachers + 3);
    }

    useEffect(() => {
        setTeachers(teachers);
    }, [teachers, setTeachers]);

    return (
        <ul className={styles.layout}>
            {teachers.slice(0, showTeachers).map(teacher => {
                return (
                    <li key={teacher.id} className={styles.wrapper}>
                        <TeacherCard teacher={teacher} />
                    </li>
                )
            })}
            {showTeachers < teachers.length &&
                <button className={styles.btn} onClick={loadMore} type="button">Load more</button>}
         
        </ul>
    );
}