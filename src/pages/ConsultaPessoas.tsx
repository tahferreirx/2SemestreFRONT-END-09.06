import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import './Alunos.css'

function ConsultaPessoas() {

    const navigate = useNavigate()

    const [pessoas, setPessoas] = useState<any[]>([])

    useEffect(() => {
        buscarPessoas()
    }, [])

    async function buscarPessoas() {
        const response = await axios.get(
            'http://localhost:8080/pessoas'
        )

        setPessoas(response.data)
    }

    async function excluirPessoas(id: number) {

        const confirmar = confirm('Deseja realmente excluir esta pessoa?')

        if (confirmar) {
            await axios.delete(
                `http://localhost:8080/pessoas/${id}`
            )

            alert('Pessoa excluída com sucesso!')

            buscarPessoas()
        }
    }

    function editarPessoas(id: number) {
        navigate(`/pessoas/editar/${id}`)
    }

    return (
        <div className="alunos-pagina">

            <div className="alunos-container">

                <div className="alunos-topo">

                    <div>
                        <h1>Consulta de Pessoas</h1>

                        <p>
                            Visualize, edite ou exclua as pessoas cadastradas
                        </p>
                    </div>

                    <div className="alunos-topo-botoes">

                        <button
                            className="alunos-botao-novo"
                            onClick={() => navigate('/pessoas/cadastro')}
                        >
                            Nova pessoa
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
                            <h2>Pessoas cadastradas</h2>

                            <p>
                                Total de pessoas: {pessoas.length}
                            </p>
                        </div>

                    </div>

                    <div className="alunos-tabela-container">

                        <table className="alunos-tabela">

                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Idade</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    pessoas.map((pessoa) => (

                                        <tr key={pessoa.id}>

                                            <td>{pessoa.nome}</td>
                                            <td>{pessoa.idade}</td>


                                            <td>
                                                <div className="alunos-acoes">

                                                    <button
                                                        className="alunos-botao-editar"
                                                        onClick={() => editarPessoas(pessoa.id)}
                                                    >
                                                        Editar
                                                    </button>

                                                    <button
                                                        className="alunos-botao-excluir"
                                                        onClick={() => excluirPessoas(pessoa.id)}
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

export default ConsultaPessoas