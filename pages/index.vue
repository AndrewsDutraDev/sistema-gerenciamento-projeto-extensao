<template>
  <div>
    <div class="header-index">
      <div>
        <a href="https://www.furg.br/" target="_blank">
          <img src="../assets/img/logofurg.png" alt="Logo da FURG" title="Logo da FURG"></img>
        </a>
      </div>
      <div>
        <a href="/login" class="btn">Login</a>
      </div>
    </div>
    <b-container class="main-page">
      <div class="main-page-title">Visualização Pública de Ações de Extensão</div>
      <!-- <Filtro/> -->
      <b-container class="filtro">
        <b-form>
          <b-row>
            <b-col sm="12" md="6">
              <b-form-group
                id="titulo"
                label="Título"
                label-for="titulo"
              >
                <b-form-input
                  id="titulo"
                  type="text"
                  v-model="form.title"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="coordenator"
                label="Coordenador responsável"
                label-for="coordenator"
              >
                <b-form-input
                  id="coordenator"
                  type="text"
                  v-model="form.coordenator"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="area-tematica" label="Área temática principal" label-for="area-tematica">
                <b-form-select
                  id="area-tematica"
                  v-model="form.main_area"
                  :options="main_area"
                ></b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="12" md="6">
              <b-form-group id="modalidade" label="Modalidade" label-for="modalidade">
                <b-form-select
                  id="modalidade"
                  v-model="form.modality"
                  :options="modality"
                ></b-form-select>
              </b-form-group>

              <b-form-group id="unidade" label="Unidade" label-for="unidade">
                <b-form-select
                  id="unidade"
                  v-model="form.unity"
                  :options="unity"
                ></b-form-select>
              </b-form-group>

              <b-form-group id="second_area" label="Área temática secundária" label-for="second_area">
                <b-form-select
                  id="second_area"
                  v-model="form.second_area"
                  :options="second_area"
                ></b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="12">
              <b-button @click="searchResults()" class="btn">Consultar
                <b-spinner variant="light" small class="ml-2" v-if="isLoading"></b-spinner>
              </b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-container>

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
        <div v-if="projects.length">
          <div v-for="project in projects" :key="project._id">
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
        </div>
        <div v-else>
          Não há projetos que correspondam os requisitos buscados.
        </div>
      </b-container>

    </b-container>
  </div>
</template>

<script>
import Filtro from '../components/filtro.vue';
import Projects from '../components/projects_list.vue';
export default {
  data() {
    return {
      isLoading: false,
      projects: [],
      form: {
        title: '',
        center: '',
        main_area: '',
        second_area: '',
        modality: '',
        unity: '',
        coordenator: ''
      },
      main_area: [{ text: 'Selecione', value: null }, 'Cultura', 'Direitos humanos e justiça', 'Meio ambiente', 'Tecnologia e produção', 'Saúde', 'Educação',  'Trabalho', 'Comunicação'],
      second_area: [{ text: 'Selecione', value: null }, 'Cultura', 'Direitos humanos e justiça', 'Meio ambiente', 'Tecnologia e produção', 'Saúde', 'Educação',  'Trabalho', 'Comunicação'],
      modality: [{ text: 'Selecione', value: null }, 'Curso', 'Empresa Jr.', 'Evento', 'Prestação de serviço', 'Programa', 'Projeto'],
      unity: [{ text: 'Selecione', value: null }, 'C3'],
    }
  },
  components:{
    Projects
  },
  methods:{
    projectLink(project){
      return `/projeto/${project._id}`
    },
    async searchResults(){
      event.preventDefault()
      this.isLoading = true
      let data = {
        title: this.form.title,
        coordinatorName: this.form.coordenator,
        modality: this.form.modality,
        unity: this.form.unity,
        mainArea: this.form.main_area,
        secondArea: this.form.second_area,
      }
      await this.$axios.$post(`/busca-projetos`, {
        title: this.form.title,
        coordinatorName: this.form.coordenator,
        modality: this.form.modality,
        unity: this.form.unity,
        mainArea: this.form.main_area,
        secondArea: this.form.second_area,
      }).then((res) => {
        this.projects = res
        this.isLoading = false
      }).catch ((err) =>{
        this.isLoading = false
        console.log(err);
      })
    }
  },
  async fetch() {
    await this.$axios.post('/busca-projetos', {
      isVisible: true
    }).then((res) => {
      this.projects = res.data
    }).catch((e) => {
      console.error(e)
    })
  },
}
</script>
