import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import './Alunos.css'

function CadastroPessoas() {

    const navigate = useNavigate()
    const { id } = useParams()

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')

    useEffect(() => {
        if (id) {
            buscarPessoaPorId()
        }
    }, [id])

    async function buscarPessoaPorId() {
        const response = await axios.get(
            `http://localhost:8080/pessoas/${id}`
        )

        setNome(response.data.nome)
        setIdade(response.data.idade)
    }

    async function salvarPessoa() {

        const aluno = {
            nome,
            idade: Number(idade)
        }

        if (id) {
            await axios.put(
                `http://localhost:8080/pessoas/${id}`,
                aluno
            )

            alert('Pessoa atualizada com sucesso!')
        } else {
            await axios.post(
                'http://localhost:8080/pessoas',
                aluno
            )

            alert('Pessoa cadastrada com sucesso!')
        }

        navigate('/pessoas/consulta')
    }

    return (
        <div className="alunos-pagina">

            <div className="alunos-container">

                <div className="alunos-topo">

                    <div>
                        <h1>
                            {id ? 'Editar Pessoa' : 'Cadastro de Pessoa'}
                        </h1>

                        <p>
                            Preencha os dados da pessoa abaixo
                        </p>
                    </div>

                    <button
                        className="alunos-botao-voltar"
                        onClick={() => navigate('/pessoas/consulta')}
                    >
                        Consultar pessoas
                    </button>

                </div>

                <div className="alunos-form-card alunos-form-centralizado">

                    <h2>
                        {id ? 'Alterar informações' : 'Novo Pessoa'}
                    </h2>

                    <div className="alunos-formulario">

                        <input
                            type="text"
                            placeholder="Nome da pessoa"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />

                        <input
                            type="number"
                            placeholder="Idade"
                            value={idade}
                            onChange={(e) => setIdade(e.target.value)}
                        />

                        <button
                            className="alunos-botao-salvar"
                            onClick={salvarPessoa}
                        >
                            {id ? 'Salvar alterações' : 'Cadastrar pessoa'}
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

export default CadastroPessoas