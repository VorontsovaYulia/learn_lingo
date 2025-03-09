"use client";

import { useEffect, useState } from "react";
import {useStore} from "../../store/store";
import { TeacherCard } from "../TeacherCard/TeacherCard";
import styles from './TeachersList.module.css';
import { LanguageSelect } from '../LanguageSelect/LanguageSelect';

export const TeachersList = ({ teachers }) => {
    
    const setTeachers = useStore((state) => state.setTeachers);
    
    const [showTeachers, setShowTeachers] = useState(3);
    const [selected, setSelected] = useState("All");
    const [isClient, setIsClient] = useState(false);

    const lang = [...new Set(teachers.flatMap(el => el.languages))];

    const loadMore = () => {
        setShowTeachers(showTeachers + 3);
    };

    useEffect(() => {
        setTeachers(teachers);
        setIsClient(true);
    }, [teachers, setTeachers]);

    return (
        <div className={styles.container}>
            <div className={styles.box}>
               
                {isClient && <LanguageSelect options={lang} selected={selected} setSelected={setSelected} />}

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
           
            </div>
        </div>
    );
}