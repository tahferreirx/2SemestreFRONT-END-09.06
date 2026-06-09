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

    async function excluirPessoa(id: number) {

        const confirmar = confirm('Deseja realmente excluir este aluno?')

        if (confirmar) {
            await axios.delete(
                `http://localhost:8080/pessoas/${id}`
            )

            alert('Pessoa excluída com sucesso!')

            buscarPessoas()
        }
    }

    function editarPessoa(id: number) {
        navigate(`/pessoas/editar/${id}`)
    }

    return (
        <div className="pessoas-pagina">

            <div className="pessoas-container">

                <div className="pessoas-topo">

                    <div>
                        <h1>Consulta de Pessoas</h1>

                        <p>
                            Visualize, edite ou exclua as pessoas cadastradas
                        </p>
                    </div>

                    <div className="pessoas-topo-botoes">

                        <button
                            className="pessoas-botao-novo"
                            onClick={() => navigate('/pessoas/cadastro')}
                        >
                            Nova pessoa
                        </button>

                        <button
                            className="pessoas-botao-voltar"
                            onClick={() => navigate('/logado')}
                        >
                            Voltar
                        </button>

                    </div>

                </div>

                <div className="pessoas-lista-card">

                    <div className="pessoas-lista-topo">

                        <div>
                            <h2>Pessoas cadastradas</h2>

                            <p>
                                Total de pessoas: {pessoas.length}
                            </p>
                        </div>

                    </div>

                    <div className="pessoas-tabela-container">

                        <table className="pessoas-tabela">

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
                                                <div className="pessoas-acoes">

                                                    <button
                                                        className="pessoas-botao-editar"
                                                        onClick={() => editarPessoa(pessoa.id)}
                                                    >
                                                        Editar
                                                    </button>

                                                    <button
                                                        className="pessoas-botao-excluir"
                                                        onClick={() => excluirPessoa(pessoa.id)}
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