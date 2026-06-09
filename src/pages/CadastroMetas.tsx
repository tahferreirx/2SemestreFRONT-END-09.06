import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import './Alunos.css'

function CadastroMeta() {

    const navigate = useNavigate()
    const { id } = useParams()

    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [categoria, setCategoria] = useState('Estudo')
    const [prazo, setPrazo] = useState('')
    const [progresso, setProgresso] = useState('')
    const [status, setStatus] = useState('Ativo')

    useEffect(() => {
        if (id) {
            buscarMetaPorId()
        }
    }, [id])

    async function buscarMetaPorId() {
        const response = await axios.get(
            `http://localhost:8080/metas/${id}`
        )

        setTitulo(response.data.titulo)
        setDescricao(response.data.descricao)
        setCategoria(response.data.categoria)
        setPrazo(response.data.prazo)
        setProgresso(response.data.progresso)
        setStatus(response.data.status)
    }

    async function salvarMeta() {

        const meta = {
            titulo,
            descricao,
            categoria,
            prazo,
            progresso,
            status
        }

        if (id) {
            await axios.put(
                `http://localhost:8080/metas/${id}`,
                meta
            )

            alert('Meta atualizada com sucesso!')
        } else {
            await axios.post(
                'http://localhost:8080/metas',
                meta
            )

            alert('Meta cadastrada com sucesso!')
        }

        navigate('/metas')
    }

    return (
        <div className="alunos-pagina">

            <div className="alunos-container">

                <div className="alunos-topo">

                    <div>
                        <h1>
                            {id ? 'Editar Meta' : 'Cadastro de Meta'}
                        </h1>

                        <p>
                            Preencha os dados da meta abaixo
                        </p>
                    </div>

                    <button
                        className="alunos-botao-voltar"
                        onClick={() => navigate('/metas/consulta')}
                    >
                        Consultar metas
                    </button>

                </div>

                <div className="alunos-form-card alunos-form-centralizado">

                    <h2>
                        {id ? 'Alterar informações' : 'Nova meta'}
                    </h2>

                    <div className="alunos-formulario">

                        <input
                            type="text"
                            placeholder="Título da meta"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Descrição"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />

                        <select
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                        >
                            <option value="Estudo">Estudo</option>
                            <option value="Saúde">Saúde</option>
                            <option value="Trabalho">Trabalho</option>
                            <option value="Financeiro">Financeiro</option>
                        </select>

                        <input
                            type="date"
                            placeholder="Prazo"
                            value={prazo}
                            onChange={(e) => setPrazo(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Progresso"
                            value={progresso}
                            onChange={(e) => setProgresso(e.target.value)}
                        />

                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="Ativo">Ativo</option>
                            <option value="Inativo">Inativo</option>
                        </select>

                        <button
                            className="alunos-botao-salvar"
                            onClick={salvarMeta}
                        >
                            {id ? 'Salvar alterações' : 'Cadastrar meta'}
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

export default CadastroMeta