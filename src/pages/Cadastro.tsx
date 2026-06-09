import { useState } from 'react'
import axios from 'axios'
import {
    Link,
    useNavigate
} from 'react-router-dom'

import './Cadastro.css'

function Cadastro() {

    const navigate = useNavigate()

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function cadastrar() {

        const usuario = {
            nome,
            email,
            senha
        }

        const response = await axios.post(
            'http://localhost:8080/usuario/cadastrar',
            usuario
        )

        alert(response.data)

        navigate('/')
    }

    return (

        <div className="container">

            <div className="card">

                <h1>Criar Conta</h1>

                <p>
                    Preencha os dados abaixo
                </p>

                <input
                    placeholder="Nome"
                    onChange={(e) =>
                        setNome(e.target.value)}
                />

                <input
                    placeholder="Email"
                    onChange={(e) =>
                        setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Senha"
                    onChange={(e) =>
                        setSenha(e.target.value)}
                />

                <button onClick={cadastrar}>
                    Cadastrar
                </button>

                <Link to="/">
                    Fazer login
                </Link>

            </div>

        </div>
    )
}

export default Cadastro