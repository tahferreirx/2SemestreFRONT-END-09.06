import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import './Alunos.css'

function ConsultaHobbies() {

    const navigate = useNavigate()

    const [hobbies, setHobbies] = useState<any[]>([])

    useEffect(() => {
        buscarHobbies()
    }, [])

    async function buscarHobbies() {
        const response = await axios.get(
            'http://localhost:8080/hobbies'
        )

        setHobbies(response.data)
    }

    async function excluirHobby(id: number) {

        const confirmar = confirm('Deseja realmente excluir este hobby?')

        if (confirmar) {
            await axios.delete(
                `http://localhost:8080/hobbies/${id}`
            )

            alert('Hobby excluído com sucesso!')

            buscarHobbies()
        }
    }

    function editarHobby(id: number) {
        navigate(`/hobbies/editar/${id}`)
    }

    return (
        <div className="alunos-pagina">

            <div className="alunos-container">

                <div className="alunos-topo">

                    <div>
                        <h1>Consulta de Hobbies</h1>

                        <p>
                            Visualize, edite ou exclua os hobbies cadastrados
                        </p>
                    </div>

                    <div className="alunos-topo-botoes">

                        <button
                            className="alunos-botao-novo"
                            onClick={() => navigate('/hobbies/cadastro')}
                        >
                            Novo hobby
                        </button>

                        <button
                            className="alunos-botao-voltar"
                            onClick={() => navigate('/logado')}
                        >
                            Voltar
                        </button>

                    </div>

                </div>

                <div className="alunos-lista-card">

                    <div className="alunos-lista-topo">

                        <div>
                            <h2>Hobbies cadastrados</h2>

                            <p>
                                Total de hobbies: {hobbies.length}
                            </p>
                        </div>

                    </div>

                    <div className="alunos-tabela-container">

                        <table className="alunos-tabela">

                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Categoria</th>
                                    <th>Plataforma</th>
                                    <th>Tempo Semanal</th>
                                    <th>Nivel Habilidade</th>
                                    <th>Status</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    hobbies.map((hobby) => (

                                        <tr key={hobby.id}>

                                            <td>{hobby.nome}</td>
                                            
                                            <td>
                                                <span className="alunos-status">
                                                    {hobby.categoria}
                                                </span>
                                            </td>

                                            <td>{hobby.plataforma}</td>
                                            <td>{hobby.tempoSemanal}</td>
                                            <td>{hobby.nivelHabilidade}</td>

                                            <td>
                                                <span className="alunos-status">
                                                    {hobby.status}
                                                </span>
                                            </td>

                                            <td>
                                                <div className="alunos-acoes">

                                                    <button
                                                        className="alunos-botao-editar"
                                                        onClick={() => editarHobby(hobby.id)}
                                                    >
                                                        Editar
                                                    </button>

                                                    <button
                                                        className="alunos-botao-excluir"
                                                        onClick={() => excluirHobby(hobby.id)}
                                                    >
                                                        Excluir
                                                    </button>

                                                </div>
                                            </td>

                                        </tr>

                                    ))
                                }

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ConsultaHobbies