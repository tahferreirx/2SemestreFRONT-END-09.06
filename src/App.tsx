import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Logado from './pages/Logado'

import CadastroAluno from './pages/CadastroAlunos'
import ConsultaAlunos from './pages/ConsultaAlunos'
import CadastroTarefas from './pages/CadastroTarefas'
import ConsultaTarefas from './pages/ConsultaTarefas'
import CadastroMeta from './pages/CadastroMetas'
import ConsultaMetas from './pages/ConsultaMetas'
import CadastroCurso from './pages/CadastroCurso'
import ConsultaCursos from './pages/ConsultaCursos'
import CadastroEventos from './pages/CadastroEvento'
import ConsultaEventos from './pages/ConsultaEventos'
import CadastroHobbies from './pages/CadastroHobbie'
import ConsultaHobbies from './pages/ConsultaHobbies'
import CadastroConquista from './pages/CadastroConquista'
import ConsultaConquista from './pages/ConsultaConquistas'
import CadastroPessoas from './pages/CadastroPessoa'
import ConsultaPessoas from './pages/ConsultaPessoas'

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/cadastro"
          element={<Cadastro />}
        />

        <Route
          path="/logado"
          element={<Logado />}
        />

        <Route
          path="/pessoas/cadastro"
          element={<CadastroPessoas />}
        />

        <Route
          path="/pessoas/consulta"
          element={<ConsultaPessoas />}
        />

        <Route
          path="/pessoas/editar/:id"
          element={<CadastroPessoas />}
        />

        <Route
          path="/alunos/cadastro"
          element={<CadastroAluno />}
        />

        <Route
          path="/alunos/consulta"
          element={<ConsultaAlunos />}
        />

        <Route
          path="/alunos/editar/:id"
          element={<CadastroAluno />}
        />

        <Route
          path="/tarefas/cadastro"
          element={<CadastroTarefas />}
        />

        <Route
          path="/tarefas"
          element={<ConsultaTarefas />}
        />

        <Route
          path="/tarefas/consulta"
          element={<ConsultaTarefas />}
        />

        <Route
          path="/tarefas/editar/:id"
          element={<CadastroTarefas />}
        />

        <Route
          path="/metas/cadastro"
          element={<CadastroMeta />}
        />

        <Route
          path="/metas"
          element={<ConsultaMetas />}
        />

        <Route
          path="/metas/consulta"
          element={<ConsultaMetas />}
        />

        <Route
          path="/metas/editar/:id"
          element={<CadastroMeta />}
        />

        <Route
          path="/cursos/cadastro"
          element={<CadastroCurso />}
        />

        <Route
          path="/cursos"
          element={<ConsultaCursos />}
        />

        <Route
          path="/cursos/consulta"
          element={<ConsultaCursos />}
        />

        <Route
          path="/cursos/editar/:id"
          element={<CadastroCurso />}
        />

        <Route
          path="/eventos/cadastro"
          element={<CadastroEventos/>}
        />

        <Route
          path="/eventos"
          element={<ConsultaEventos />}
        />

        <Route
          path="/eventos/consulta"
          element={<ConsultaEventos />}
        />

        <Route
          path="/eventos/editar/:id"
          element={<CadastroEventos />}
        />

        <Route
          path="/hobbies/cadastro"
          element={<CadastroHobbies />}
        />

        <Route
          path="/hobbies"
          element={<ConsultaHobbies />}
        />

        <Route
          path="/hobbies/consulta"
          element={<ConsultaHobbies />}
        />

        <Route
          path="/hobbies/editar/:id"
          element={<CadastroHobbies />}
        />

        <Route
          path="/conquistas/cadastro"
          element={<CadastroConquista />}
        />

        <Route
          path="/conquistas"
          element={<ConsultaConquista />}
        />

        <Route
          path="/conquistas/consulta"
          element={<ConsultaConquista />}
        />

        <Route
          path="/conquistas/editar/:id"
          element={<CadastroConquista />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App