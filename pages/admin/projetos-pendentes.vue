<template>
  <div>
    <admin></admin>
    <b-container>
      <button @click="backForward()" class="btn backForward mt-4"> < Voltar </button>
    </b-container>
    <b-container class="projects">
      <div class="title-description">Todos projetos pendentes</div>
      <b-row>
        <b-col sm="2">
          Nome
        </b-col>
        <b-col sm="2" class="mobile-none">
          Nome do coordenador
        </b-col>
        <b-col sm="2" class="mobile-none">
          E-mail do coordenador
        </b-col>
        <b-col sm="2">
          Centro de Ação de Extensão
        </b-col>
        <b-col sm="2" class="mobile-none">
          Unidade de Ação de Extensão
        </b-col>
        <b-col sm="2" class="mobile-none">
          Modalidade
        </b-col>
      </b-row>
      <div v-for="project in projetos_pendentes_filtered" :key="project._id">
        <a :href="projectLink(project)" class="project-link">
          <b-row>
            <b-col sm="2">
              {{ project.title }}
            </b-col>
            <b-col sm="2" class="mobile-none">
              {{ project.coordinatorName }}
            </b-col>
            <b-col sm="2" class="mobile-none">
              {{ project.contactEmail }}
            </b-col>
            <b-col sm="2">
              {{ project.extensionCenter }}
            </b-col>
            <b-col sm="2" class="mobile-none">
              {{ project.unity }}
            </b-col>
            <b-col sm="2" class="mobile-none">
              {{ project.modality }}
            </b-col>
          </b-row>
        </a>
      </div>
    </b-container>
  </div>
</template>

<script>
  import admin from '../../components/layouts/admin.vue'
  export default {
    components:{
      admin,
    },
    middleware: 'authenticated',
    head() {
      return {
        title: 'Projeto',
      }
    },
    methods: {
      backForward(){
        window.history.back()
      },
      projectLink(project){
        return `/editar-projeto?id=${project._id}`
      }
    },
    computed:{
      projetos_pendentes_filtered(){
        return this.projetos_pendentes.filter(function(el) {
          return el.isVisible == false;
        })
      }
    },
    async asyncData({params, query, res, $axios, req, app, error, store}) {
      try {
        let projetos_pendentes = {}
        let token = store.acess_token
        await $axios.$get('/projetos', {headers: {'Authorization': `${token}` }}).then((res) => {
          if (res) {
            projetos_pendentes = res
          }
        })
        return {
          projetos_pendentes: projetos_pendentes,
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
</script>
