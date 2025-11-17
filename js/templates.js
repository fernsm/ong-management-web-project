/* * templates.js: Armazena o HTML de cada "página"
 */

export const homeTemplate = `
    <section class="hero-section" style="background: var(--color-primary-light); text-align: center;">
        <div class="container">
            <h1>Transformando Vidas, Semeando o Futuro</h1>
            <p>Junte-se a nós na missão de levar educação e dignidade.</p>
            <a href="/cadastro" class="btn btn-primary" data-link>Quero ser Voluntário</a>
        </div>
    </section>
    <section id="sobre">
        <div class="container">
            <div class="row align-center">
                <div class="col-md-6">
                    <h2>Sobre Nossa Organização</h2>
                    <p>A "Semeando o Futuro" é uma organização dedicada a promover a educação e o desenvolvimento sustentável.</p>
                </div>
                <div class="col-md-6">
                     <img src="images/ong-home.webp" alt="Crianças sorrindo" style="border-radius: var(--border-radius);">
                </div>
            </div>
        </div>
    </section>
`;

// 2. Template da PÁGINA DE PROJETOS (Atualizado com 3 Cards)
export const projetosTemplate = `
    <section>
        <div class="container">
            <h2>Nossos Projetos Sociais</h2>
            <p>Conheça as frentes em que atuamos para mudar realidades.</p>
            
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <article class="card">
                        <img src="images/ong-projetos.webp" alt="Projeto Educar" class="card-image">
                        <div class="card-body">
                            <span class="badge badge-primary">Educação</span>
                            <h3 class="card-title">Projeto Educar+</h3>
                            <p class="card-text">Reforço escolar e oficinas de tecnologia para jovens de 10 a 15 anos.</p>
                        </div>
                        <div class="card-footer">
                             <button class="btn btn-primary">Saiba Mais</button>
                        </div>
                    </article>
                </div>

                <div class="col-lg-4 col-md-6">
                    <article class="card">
                         <img src="images/ong-projetos.webp" alt="Horta Comunitária" class="card-image"> 
                        <div class="card-body">
                            <span class="badge badge-secondary">Sustentabilidade</span>
                            <h3 class="card-title">Horta Comunitária</h3>
                            <p class="card-text">Cultivo de alimentos orgânicos para distribuição e educação ambiental.</p>
                        </div>
                         <div class="card-footer">
                             <button class="btn btn-primary">Saiba Mais</button>
                        </div>
                    </article>
                </div>

                <div class="col-lg-4 col-md-6">
                    <article class="card">
                        <img src="images/ong-projetos.webp" alt="Água Limpa" class="card-image">
                        <div class="card-body">
                            <span class="badge badge-primary">Saúde</span>
                            <h3 class="card-title">Água Limpa</h3>
                            <p class="card-text">Instalação de filtros e cisternas em comunidades sem acesso à água potável.</p>
                        </div>
                         <div class="card-footer">
                             <button class="btn btn-primary">Saiba Mais</button>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
`;

export const cadastroTemplate = `
    <section>
        <div class="container">
            <div class="row">
                <div class="col-lg-8" style="margin: 0 auto;">
                    <img src="images/ong-cadastro.jpg" alt="Voluntários" style="width: 100%; margin-bottom: 20px; border-radius: 5px;">
                    <h2>Seja um Voluntário</h2>
                    
                    <div id="form-feedback" style="display: none;"></div>

                    <form id="form-cadastro">
                        <fieldset>
                            <legend>Dados Pessoais</legend>
                            <div class="form-group">
                                <label for="nome">Nome Completo:</label>
                                <input type="text" id="nome" class="form-control" required minlength="3">
                            </div>
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <label for="email">E-mail:</label>
                                    <input type="email" id="email" class="form-control" required>
                                </div>
                                <div class="col-md-6 form-group">
                                    <label for="cpf">CPF:</label>
                                    <input type="text" id="cpf" class="form-control" required placeholder="000.000.000-00">
                                </div>
                            </div>
                        </fieldset>
                         <fieldset>
                            <legend>Endereço</legend>
                            <div class="row">
                                <div class="col-md-4 form-group">
                                    <label for="cep">CEP:</label>
                                    <input type="text" id="cep" class="form-control" required placeholder="00000-000">
                                </div>
                                <div class="col-md-8 form-group">
                                    <label for="endereco">Rua:</label>
                                    <input type="text" id="endereco" class="form-control" required>
                                </div>
                            </div>
                        </fieldset>
                        <button type="submit" class="btn btn-primary">Enviar Cadastro</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
`;