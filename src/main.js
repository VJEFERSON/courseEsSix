import api from './api'

class App{
    constructor(){
        this.repositorios=[];
        this.formElemento = document.getElementById('repo-form');
        this.inputElemento = document.querySelector('input[name=repository]');
        this.listElementos = document.getElementById('repo-list');
        this.registerHandlers();
    }

    registerHandlers(){
        this.formElemento.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading=true){
        if(loading === true){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.setAttribute('id','loading');
            this.formElemento.appendChild(loadingEl);
        }else
            document.getElementById('loading').remove();
    }

    async addRepository(event){
        event.preventDefault();
        try{
            const repoInput = this.inputElemento.value;
            if (repoInput ===0)
                return;

            this.setLoading();

            const response = await api.get(`/repos/${repoInput}`);
            const {name,description,html_url, owner:{avatar_url}} = response.data;

            this.repositorios.push({
                name,
                description,
                avatar_url,
                html_url,
            });
            this.inputElemento.value='';
            this.render();
        }catch(err){
            alert('Não existe Repositório!');
        }
        this.setLoading(false);
    }

    render(){
        this.listElementos.innerHTML = '';
        this.repositorios.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src',repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target','_blank');
            linkEl.setAttribute('href',repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEL = document.createElement('li');
            listItemEL.appendChild(imgEl);
            listItemEL.appendChild(titleEl);
            listItemEL.appendChild(descriptionEl);
            listItemEL.appendChild(linkEl);

            this.listElementos.appendChild(listItemEL);
        });
    }
}

new App();