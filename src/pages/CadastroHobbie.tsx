import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import './Alunos.css'

function CadastroHobbies() {

    const navigate = useNavigate()
    const { id } = useParams()

    const [nome, setNome] = useState('')
    const [categoria, setCategoria] = useState('Game')
    const [plataforma, setPlataforma] = useState('')
    const [tempoSemanal, setTempoSemanal] = useState('')
    const [nivelHabilidade, setNivelHabilidade] = useState('')
    const [status, setStatus] = useState('Ativo')

    useEffect(() => {
        if (id) {
            buscarHobbyPorId()
        }
    }, [id])

    async function buscarHobbyPorId() {
        const response = await axios.get(
            `http://localhost:8080/hobbies/${id}`
        )

        setNome(response.data.nome)
        setCategoria(response.data.categoria)
        setPlataforma(response.data.plataforma)
        setTempoSemanal(response.data.tempoSemanal)
        setNivelHabilidade(response.data.nivelHabilidade)
        setStatus(response.data.status)
    }

    async function salvarHobby() {

        const hobby = {
            nome,
            categoria,
            plataforma,
            tempoSemanal,
            nivelHabilidade,
            status
        }

        if (id) {
            await axios.put(
                `http://localhost:8080/hobbies/${id}`,
                hobby
            )

            alert('Hobby atualizado com sucesso!')
        } else {
            await axios.post(
                'http://localhost:8080/hobbies',
                hobby
            )

            alert('Hobby cadastrado com sucesso!')
        }

        navigate('/hobbies')
    }

    return (
        <div className="alunos-pagina">

            <div className="alunos-container">

                <div className="alunos-topo">

                    <div>
                        <h1>
                            {id ? 'Editar Hobby' : 'Cadastro de Hobby'}
                        </h1>

                        <p>
                            Preencha os dados do hobby abaixo
                        </p>
                    </div>

                    <button
                        className="alunos-botao-voltar"
                        onClick={() => navigate('/hobbies/consulta')}
                    >
                        Consultar hobbies
                    </button>

                </div>

                <div className="alunos-form-card alunos-form-centralizado">

                    <h2>
                        {id ? 'Alterar informações' : 'Novo hobby'}
                    </h2>

                    <div className="alunos-formulario">

                        <input
                            type="text"
                            placeholder="Nome do hobby"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />

                        <select
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                        >
                            <option value="Game">Game</option>
                            <option value="Esporte">Esporte</option>
                            <option value="Música">Música</option>
                            <option value="Leitura">Leitura</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Plataforma"
                            value={plataforma}
                            onChange={(e) => setPlataforma(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Tempo semanal"
                            value={tempoSemanal}
                            onChange={(e) => setTempoSemanal(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Nível de habilidade"
                            value={nivelHabilidade}
                            onChange={(e) => setNivelHabilidade(e.target.value)}
                        />

                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="Ativo">Ativo</option>
                            <option value="Inativo">Inativo</option>
                            <option value="Transferido">Transferido</option>
                        </select>

                        <button
                            className="alunos-botao-salvar"
                            onClick={salvarHobby}
                        >
                            {id ? 'Salvar alterações' : 'Cadastrar hobby'}
                        </button>

                        <button
                            className="alunos-botao-cancelar"
                            onClick={() => navigate('/logado')}
                        >
                            Voltar ao painel
                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default CadastroHobbies