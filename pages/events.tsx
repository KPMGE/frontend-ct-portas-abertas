import { NextPage } from "next";
import NavBar from "../components/NavBar";
import Image from 'next/image';
import styles from '../styles/pages/Events.module.css'
import HeaderBanner from '../assets/HEADER.png'
import Footer from "../components/Footer";
import Title from "../components/Title";
import Table from "../components/Table";
import Button from "../components/Button";

const Events: NextPage = () => {
    return (
        <main className={styles.container}>
            <NavBar />

            <Image src={HeaderBanner} alt="Banner CT Portas Abertas" />

            <Title />

            <h1>INSCRIÇÃO NOS EVENTOS</h1>

            <Table />

            <Button text="Salvar Inscrições"/>

            <Footer />
        </main>
    )
}

export default Events;
    