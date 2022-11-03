<template>
  <b-container class="projects">
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
      <b-col sm="2" class="mobile-none">
        Unidade de Ação de Extensão
      </b-col>
      <b-col sm="2" class="mobile-none">
        Modalidade
      </b-col>
    </b-row>
    <div v-for="project in projetos_filtered" :key="project._id">
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
</template>

<script>
  export default {
    data() {
      return {
        projects: [],
      }
    },
    computed:{
      projetos_filtered(){
        return this.projects.filter(function(el) {
          return el.isVisible == true;
        })
      }
    },
    methods: {
      projectLink(project){
        return `/projeto/${project._id}`
      }
    },
    async fetch() {
      await this.$axios.get('/projetos').then((res) => {
        this.projects = res.data
      }).catch((e) => {
        console.error(e)
      })
    },
  }
</script>

