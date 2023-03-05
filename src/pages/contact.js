import React, { useEffect, useState } from "react";
import {FaEnvelope} from "react-icons/fa";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    const schema = yup.object().shape({
        name: yup.string().required("Escreva seu nome"),
        email: yup.string().email("Esse email não é válido").required("Escreva seu email"),
        menssage: yup.string().required("Escreva sua mensagem"),
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="contact-container" id="contact">
            <div><span>&lt;</span><h1>Entrar em Contato</h1><span>/&gt;</span></div>
            <div className="form-wrapper" data-aos="fade-down">
            <div className="form-container">
                <div className="form-header">
                <FaEnvelope />
                </div>
                <div className="form-text">
                    <h1>Entre em contato</h1>
                    <p className="description">Se você estiver procurando por um desenvolvedor frontend dedicado e capacitado, sinta-se à vontade para me enviar um email e vamos conversar sobre como posso ajudá-lo a alcançar seus objetivos online!</p>
                </div>
                <div className="form-inputs">
                    <form onSubmit={handleSubmit(onSubmit)}>

                    <input type="text" placeholder="Seu nome" name="name" {...register("name")} className="name-input" onChange={(e) => setName(e.target.value)} value={name}/>
                    <p data-aos="fade-right">{errors.name?.message}</p>

                    <input type="email" placeholder="Seu email" name="email" {...register("email")} className="email-input" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <p data-aos="fade-right">{errors.email?.message}</p>

                    <div className="menssage-container">
                    <textarea  placeholder="Sua mensagem" name="menssage" {...register("menssage")} onChange={(e) => setMessage(e.target.value)} value={message}/>
                    <p data-aos="fade-right">{errors.menssage?.message}</p>

                    </div>
                    <input type="submit" placeholder="Enviar Mensagem" className="form"/>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Contact;
