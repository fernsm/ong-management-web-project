/* * ARQUIVO: js/templates.js
 * Armazena o HTML de cada "página" em formato de String.
 * ATUALIZADO: Inclui seção de Contato na Home.
 */

// 1. Template da PÁGINA INICIAL
export const homeTemplate = `
    <section class="hero-section" style="background: var(--bg-surface); text-align: center;">
        <div class="container">
            <h1>Transformando Vidas, Semeando o Futuro</h1>
            <p style="font-size: var(--font-size-lg); color: var(--text-secondary);">Junte-se a nós na missão de levar educação e dignidade a comunidades carentes.</p>
            <a href="/cadastro" class="btn btn-primary" data-link>Quero ser Voluntário</a>
        </div>
    </section>
    
    <section id="sobre">
        <div class="container">
            <div class="row align-center">
                <div class="col-md-6">
                    <h2>Sobre Nossa Organização</h2>
                    <p>A "Semeando o Futuro" é uma organização não-governamental dedicada a promover a educação e o desenvolvimento sustentável em comunidades carentes. Acreditamos que cada semente plantada hoje pode gerar uma floresta de oportunidades amanhã.</p>
                </div>
                <div class="col-md-6">
                     <img src="images/ong-home.webp" alt="Crianças sorrindo em uma sala de aula da ONG" style="border-radius: var(--border-radius);">
                </div>
            </div>
        </div>
    </section>

    <section id="contato" style="background: var(--bg-surface);">
        <div class="container">
            <h2>Informações de Contato</h2>
            <div class="row">
                <div class="col-md-6">
                    <address>
                        <p>Entre em contato conosco para parcerias, doações ou mais informações:</p>
                        <strong>Email:</strong> <a href="mailto:contato@semeandofuturo.org">contato@semeandofuturo.org</a><br>
                        <strong>Telefone:</strong> <a href="tel:+5511999998888">(11) 99999-8888</a><br>
                        <strong>Endereço:</strong> Rua da Esperança, 123 - São Paulo, SP
                    </address>
                </div>
                <div class="col-md-6">
                    <p>Siga-nos nas redes sociais e acompanhe nosso trabalho de perto!</p>
                    <p style="color: var(--color-primary); font-weight: bold;">@SemeandoOFuturo</p>
                </div>
            </div>
        </div>
    </section>
`;

// 2. Template da PÁGINA DE PROJETOS
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
                            <span class="badge badge-primary" style="background: var(--color-primary-light); color: var(--color-primary-dark);">Educação</span>
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
                            <span class="badge badge-primary" style="background: var(--color-primary-light); color: var(--color-primary-dark);">Sustentabilidade</span>
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
                            <span class="badge badge-primary" style="background: var(--color-primary-light); color: var(--color-primary-dark);">Saúde</span>
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

// 3. Template da PÁGINA DE CADASTRO
export const cadastroTemplate = `
    <section>
        <div class="container">
            <div class="row">
                <div class="col-lg-8" style="margin: 0 auto;">
                    
                    <picture>
                        <source srcset="images/ong-cadastro.jpg" type="image/jpg">
                        <img src="images/ong-cadastro.jpg" alt="Voluntários" style="width: 100%; margin-bottom: 20px; border-radius: 5px;">
                    </picture>

                    <h2>Seja um Voluntário</h2>
                    <p>Preencha o formulário abaixo para se juntar à nossa equipe.</p>
                    
                    <div id="form-feedback" style="display: none;"></div>

                    <form id="form-cadastro">
                        <fieldset style="margin-bottom: 20px; padding: 20px; border: 1px solid var(--border-color);">
                            <legend style="padding: 0 10px; font-weight: bold;">Dados Pessoais</legend>
                            <div class="form-group">
                                <label for="nome">Nome Completo:</label>
                                <input type="text" id="nome" class="form-control" required minlength="3" style="width: 100%; padding: 8px; margin-bottom: 10px;">
                            </div>
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <label for="email">E-mail:</label>
                                    <input type="email" id="email" class="form-control" required style="width: 100%; padding: 8px;">
                                </div>
                                <div class="col-md-6 form-group">
                                    <label for="cpf">CPF:</label>
                                    <input type="text" id="cpf" class="form-control" required placeholder="000.000.000-00" style="width: 100%; padding: 8px;">
                                </div>
                            </div>
                             <div class="row">
                                <div class="col-md-6 form-group">
                                    <label for="telefone">Telefone:</label>
                                    <input type="tel" id="telefone" class="form-control" required placeholder="(00) 00000-0000" style="width: 100%; padding: 8px;">
                                </div>
                                <div class="col-md-6 form-group">
                                    <label for="nascimento">Nascimento:</label>
                                    <input type="date" id="nascimento" class="form-control" required style="width: 100%; padding: 8px;">
                                </div>
                            </div>
                        </fieldset>

                         <fieldset style="margin-bottom: 20px; padding: 20px; border: 1px solid var(--border-color);">
                            <legend style="padding: 0 10px; font-weight: bold;">Endereço</legend>
                            <div class="row">
                                <div class="col-md-4 form-group">
                                    <label for="cep">CEP:</label>
                                    <input type="text" id="cep" class="form-control" required placeholder="00000-000" style="width: 100%; padding: 8px;">
                                </div>
                                <div class="col-md-8 form-group">
                                    <label for="endereco">Rua, Nº:</label>
                                    <input type="text" id="endereco" class="form-control" required style="width: 100%; padding: 8px;">
                                </div>
                            </div>
                             <div class="row">
                                <div class="col-md-6 form-group">
                                    <label for="cidade">Cidade:</label>
                                    <input type="text" id="cidade" class="form-control" required style="width: 100%; padding: 8px;">
                                </div>
                                <div class="col-md-6 form-group">
                                    <label for="estado">Estado:</label>
                                    <input type="text" id="estado" class="form-control" required maxlength="2" style="width: 100%; padding: 8px;">
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