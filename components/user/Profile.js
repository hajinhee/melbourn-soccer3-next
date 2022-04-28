import React,{useState} from 'react'
import Router from "next/router";
import styles from '@/styles/Table.module.css'

export function Profile(){
    const [profile, setProfile] =useState({})
    
    return <form >
        <table className={styles.table}>
            <thead>
                <tr>
                    <th colSpan={2}><h1>회원 프로필</h1></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>사용자ID</b></td>
                    <td><h3>{profile.userid}</h3></td>
                </tr>
                <tr>
                    <td htmlFor=""><b>이메일</b></td>
                    <td><h3>{profile.email}</h3></td>
                </tr>

                <tr>
                    <td htmlFor=""><b>이름</b></td>
                    <td><h3>{profile.name}</h3></td>
                </tr>

                <tr>
                    <td><b>전화번호</b></td>
                    <td><h3>{profile.phone}</h3></td>
                </tr>

                <tr>
                    <td><b>생년월일</b></td>
                    <td><h3>{profile.birth}</h3></td>
                </tr>
                <tr>
                    <td><b>주소</b></td>
                    <td><h3>{profile.address}</h3></td>
                </tr>
                <tr>
                    <td colSpan={2}><button>수정</button><button>탈퇴</button></td>
                </tr>
            </tbody>
        </table>
    </form>
}