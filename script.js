const API_URL = 'http://localhost:3000/alunos'; //verificar se está correto

//Selecionar os elementos do frontend
const alunosList = document.getElementById("alunos-list");
const form = document.getElementById("aluno-form");
const nomeInput = document.getElementById("nome");
const idadeInput = document.getElementById("idade");
const cursoInput = document.getElementById("curso");
const submitBtn = document.getElementById("submit-btn");

// Modal elements
const modalOverlay = document.getElementById("modal-overlay");
const confirmBtn = document.getElementById("confirm-btn");
const cancelBtn = document.getElementById("cancel-btn");

let editId = null;

//Funções
//Função para criar ou atualizar um registro
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const alunoData = {
        nome: nomeInput.value,
        idade: parseInt(idadeInput.value),
        curso: cursoInput.value,
    };

    if (editId) {
        // Atualizar aluno existente
        await fetch(`${API_URL}/${editId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(alunoData),
        });
        
        // Resetar estado de edição
        editId = null;
        submitBtn.textContent = "Adicionar";
    } else {
        // Criar novo aluno
        await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(alunoData),
        });
    }

    nomeInput.value = "";
    idadeInput.value = "";
    cursoInput.value = "";
    carregarAlunos();
});

let deleteId = null;

//Função para listar os registros já criados
async function carregarAlunos() {
    const res = await fetch(API_URL); //Extender a sintaxe do fetch api
    const alunos = await res.json();

    alunosList.innerHTML = "";

    alunos.forEach(aluno => {
        const li = document.createElement("li");
        li.innerHTML = `
        <span><strong>${aluno.nome}</strong> (${aluno.idade} anos) <br><span class='curso'>${aluno.curso}</span></span>
        <div class="actions">
            <button class="editar" onclick="atualizarAluno('${aluno._id}')">Editar</button>
            <button class="excluir" onclick="deletarAluno('${aluno._id}')">Excluir</button>
        </div>
        `;
        alunosList.appendChild(li);
    });
}

//Função para apagar um registro (abre o modal)
function deletarAluno(id) {
    deleteId = id;
    modalOverlay.classList.remove("hidden");
}

// Fechar modal
function fecharModal() {
    modalOverlay.classList.add("hidden");
    deleteId = null;
}

// Event listeners do modal
cancelBtn.addEventListener("click", fecharModal);

confirmBtn.addEventListener("click", async () => {
    if (deleteId) {
        await fetch(`${API_URL}/${deleteId}`, {
            method: "DELETE"
        });
        carregarAlunos();
        fecharModal();
    }
});

// Fechar modal ao clicar fora
modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        fecharModal();
    }
});

//Função para atualizar um registro
async function atualizarAluno(id) {
    const res = await fetch(`${API_URL}/${id}`); 
    const aluno = await res.json();
    
    nomeInput.value = aluno.nome;
    idadeInput.value = aluno.idade;
    cursoInput.value = aluno.curso;
    
    editId = id;
    submitBtn.textContent = "Atualizar";
    
    // Scroll para o formulário para facilitar a edição
    form.scrollIntoView({ behavior: 'smooth' });
}

//Chamar a função para listar os alunos
carregarAlunos();