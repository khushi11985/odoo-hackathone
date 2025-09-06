import Image from "next/image";
import styles from "./page.module.css";
import { redirect } from 'next/navigation';
import Home from "./Home/home";



export default function main() {
  return (
    <>
      <Home />
       
    </>
  );
}
