<template>
  <div>
    <div v-if="$store.state.auth.role == 1">
      <admin></admin>
    </div>
    <div v-else>
      <coordenador></coordenador>
    </div>
    <b-container>
      <button @click="backForward()" class="btn backForward mt-4"> < Voltar </button>
    </b-container>
    <b-container class="novo-usuario">
      <b-form @submit="onSubmit">
        <div class="title-description">Criar novo projeto</div>
        <b-form-group
          id="title"
          label="Título"
          label-for="title"
        >
          <b-form-input
            id="name"
            v-model="project.title"
            type="text"
            placeholder="Digite o título do projeto"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="unity"
          label="Unidade"
          label-for="unity"
        >
          <b-form-input
            id="unity"
            v-model="project.unity"
            type="text"
            placeholder="Digite a unidade ao qual o projeto pertence"
            required
          ></b-form-input>
        </b-form-group>


        <b-form-group id="modalidade" label="Modalidade" label-for="modalidade">
          <b-form-select
            id="modalidade"
            v-model="project.modality"
            :options="modality"
            required
          ></b-form-select>
        </b-form-group>


        <b-form-group id="area-tematica" label="Área temática principal" label-for="area-tematica">
          <b-form-select
            id="area-tematica"
            v-model="project.mainArea"
            :options="main_area"
          ></b-form-select>
        </b-form-group>

        <b-form-group id="secondArea" label="Área temática secundária" label-for="area-tematica">
          <b-form-select
            id="secondArea"
            v-model="project.secondArea"
            :options="secondArea"
          ></b-form-select>
        </b-form-group>

        <!-- <b-form-group
          id="mainArea"
          label="Área temática principal"
          label-for="mainArea"
        >
          <b-form-input
            id="mainArea"
            v-model="project.mainArea"
            type="text"
            placeholder="Digite a área temática principal ao qual o projeto pertence"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="secondArea"
          label="Área temática secundária"
          label-for="secondArea"
        >
          <b-form-input
            id="secondArea"
            v-model="project.secondArea"
            type="text"
            placeholder="Digite a área temática secundária ao qual o projeto pertence"
            required
          ></b-form-input>
        </b-form-group> -->

        <b-form-group
          id="sustainableGoals"
          label="Objetivos sustentáveis"
          label-for="sustainableGoals"
        >
          <b-form-input
            id="sustainableGoals"
            v-model="project.sustainableGoals"
            type="text"
            placeholder="Digite os objetivos sustentáveis do projeto"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="contactEmail"
          label="E-mail de contato"
          label-for="contactEmail"
        >
          <b-form-input
            id="contactEmail"
            v-model="project.contactEmail"
            type="email"
            placeholder="Digite o e-mail de contato"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="abstract"
          label="Resumo"
          label-for="abstract"
        >
          <b-form-input
            id="abstract"
            v-model="project.abstract"
            type="text"
            placeholder="Digite um resumo do projeto"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="startDate"
          label="Data de início"
          label-for="startDate"
        >
          <the-mask :mask="['##/##/####']" id="endDate" v-model="project.startDate" placeholder="Digite uma data de início" required class="form-control" masked="true" />
          <!-- <b-form-input
            id="startDate"
            v-model="project.startDate"
            type="text"
            placeholder="Digite uma data de início"
            required
          ></b-form-input> -->
        </b-form-group>

        <b-form-group
          id="endDate"
          label="Data de término"
          label-for="endDate"
        >
          <the-mask :mask="['##/##/####']" id="endDate" v-model="project.endDate" placeholder="Digite uma data de término" required class="form-control" masked="true" />
          <!-- <b-form-input
            v-mask="'##/##/####'"
            id="endDate"
            v-model="project.endDate"
            type="text"
            placeholder="Digite uma data de término"
            required
          ></b-form-input> -->
        </b-form-group>

        <b-form-group
          id="goals"
          label="Objetivos gerais"
          label-for="goals"
        >
          <b-form-input
            id="goals"
            v-model="project.goals"
            type="text"
            placeholder="Digite os objetivos gerais do projeto"
            required
          ></b-form-input>
        </b-form-group>

        <!-- <b-form-group
          id="usefulLinks"
          label="Links úteis"
          label-for="usefulLinks"
        >
          <b-form-input
            id="usefulLinks"
            v-model="project.usefulLinks"
            type="text"
            placeholder="Digite os links úteis do projeto"
            required
          ></b-form-input>
        </b-form-group> -->

        <b-form-group
          id="address"
          label="Endereço"
          label-for="address"
        >
          <b-form-input
            id="address"
            v-model="project.address"
            type="text"
            placeholder="Digite o endereço do projeto"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="workload"
          label="Carga horária"
          label-for="workload"
        >
          <b-form-input
            id="workload"
            v-model="project.workload"
            type="text"
            placeholder="Digite a carga horária do projeto"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="methodology"
          label="Metodologia"
          label-for="methodology"
        >
          <b-form-input
            id="methodology"
            v-model="project.methodology"
            type="text"
            placeholder="Digite a metodologia do projeto"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="duration"
          label="Duração"
          label-for="duration"
        >
          <b-form-input
            id="duration"
            v-model="project.duration"
            type="text"
            placeholder="Digite a duração do projeto"
            required
          ></b-form-input>
        </b-form-group>



        <div>
          <b-button type="submit" class="btn">Criar novo projeto</b-button>
        </div>
      </b-form>

    </b-container>
  </div>
</template>

<script>
import {TheMask} from 'vue-the-mask'
import Cookie from 'js-cookie';
import admin from '../components/layouts/admin.vue';
import coordenador from '../components/layouts/coordenador.vue';
export default {
  middleware: 'authenticated',
  components:{
    admin,
    coordenador,
    TheMask
  },
  data() {
    return {
      main_area: [{ text: 'Selecione', value: null }, 'Cultura', 'Direitos humanos e justiça', 'Meio ambiente', 'Tecnologia e produção', 'Saúde', 'Educação',  'Trabalho', 'Comunicação'],
      secondArea: [{ text: 'Selecione', value: null }, 'Cultura', 'Direitos humanos e justiça', 'Meio ambiente', 'Tecnologia e produção', 'Saúde', 'Educação',  'Trabalho', 'Comunicação'],
      modality: [{ text: 'Selecione uma modalidade', value: null }, 'Curso', 'Empresa Jr.', 'Evento', 'Prestação de serviço', 'Programa', 'Projeto'],
      project: {
        title: "",
        unity: "",
        modality: null,
        mainArea: "",
        secondArea: null,
        sustainableGoals: "",
        coordinatorName: "",
        coordinatorId: "",
        contactEmail: "",
        abstract: "",
        startDate: "",
        endDate: "",
        goals: "",
        usefulLinks: "",
        address: "",
        workload: "",
        methodology: "",
        duration: "",
        isVisible: false
      },
    }
  },
  methods: {
    backForward(){
      window.history.back()
    },
    async onSubmit(event) {
      event.preventDefault()
      let token = this.$store.state.auth.access_token
      let config = {
        headers: {
        'Authorization': `${token}`
        }
      }
      await this.$axios.$post(`/projetos/novo`, {
        title: this.project.title,
        unity: this.project.unity,
        modality: this.project.modality,
        mainArea: this.project.mainArea,
        secondArea: this.project.secondArea,
        sustainableGoals: this.project.sustainableGoals,
        coordinatorName: this.$store.state.auth.name,
        coordinatorId: this.$store.state.auth.id,
        contactEmail: this.project.contactEmail,
        abstract: this.project.abstract,
        startDate: this.project.startDate,
        endDate: this.project.endDate,
        goals: this.project.goals,
        usefulLinks: this.project.usefulLinks,
        address: this.project.address,
        workload: this.project.workload,
        methodology: this.project.methodology,
        duration: this.project.duration,
        isVisible: false
      }, config).then((res) => {
        if (this.$store.state.auth.role == 1){
          this.$router.push('/admin/projetos-publicados')
        }else{
          this.$router.push('/coordenador/projetos-publicados')
        }
      })
    }
  }
}
</script>
