import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import './Alunos.css'

function CadastroTarefas() {

    const navigate = useNavigate()
    const { id } = useParams()

    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [materia, setMateria] = useState('')
    const [dataEntrega, setDataEntrega] = useState('')
    const [prioridade, setPrioridade] = useState('')
    const [status, setStatus] = useState('Ativo')

    useEffect(() => {
        if (id) {
            buscarAlunoPorId()
        }
    }, [id])

    async function buscarAlunoPorId() {
        const response = await axios.get(
            `http://localhost:8080/tarefas/${id}`
        )

        setTitulo(response.data.titulo)
        setDescricao(response.data.descricao)
        setMateria(response.data.materia)
        setDataEntrega(response.data.dataEntrega)
        setPrioridade(response.data.prioridade)
        setStatus(response.data.status)
    }

    async function salvarTarefa() {

        const aluno = {
            titulo,
            descricao,
            materia,
            dataEntrega,
            prioridade,
            status
        }

        if (id) {
            await axios.put(
                `http://localhost:8080/tarefas/${id}`,
                aluno
            )

            alert('Tarefa atualizada com sucesso!')
        } else {
            await axios.post(
                'http://localhost:8080/tarefas',
                aluno
            )

            alert('Tarefa cadastrada com sucesso!')
        }

        navigate('/tarefas')
    }

    return (
        <div className="alunos-pagina">

            <div className="alunos-container">

                <div className="alunos-topo">

                    <div>
                        <h1>
                            {id ? 'Editar Tarefa' : 'Cadastro de Tarefa'}
                        </h1>

                        <p>
                            Preencha os dados do aluno abaixo
                        </p>
                    </div>

                    <button
                        className="alunos-botao-voltar"
                        onClick={() => navigate('/tarefas/consulta')}
                    >
                        Consultar tarefas
                    </button>

                </div>

                <div className="alunos-form-card alunos-form-centralizado">

                    <h2>
                        {id ? 'Alterar informações' : 'Novo Tarefa'}
                    </h2>

                    <div className="alunos-formulario">

                        <input
                            type="text"
                            placeholder="Nome da tarefa"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Descrição"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Materia"
                            value={materia}
                            onChange={(e) => setMateria(e.target.value)}
                        />

                        <input
                            type="date"
                            placeholder="Data de entrega"
                            value={dataEntrega}
                            onChange={(e) => setDataEntrega(e.target.value)}
                        />

                        <select
                            value={prioridade}
                            onChange={(e) => setPrioridade(e.target.value)}
                        >
                            <option value="Baixa">Baixa</option>
                            <option value="Media">Média</option>
                            <option value="Alta">Alta</option>
                            <option value="Urgente">Urgente</option>
                        </select>

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
                            onClick={salvarTarefa}
                        >
                            {id ? 'Salvar alterações' : 'Cadastrar tarefa'}
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

export default CadastroTarefas