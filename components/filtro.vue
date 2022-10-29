<template>
  <b-container class="filtro">
    <b-form @submit="onSubmit">
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
          <b-button type="submit" class="btn">Consultar</b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          title: '',
          center: '',
          main_area: '',
          second_area: '',
          modality: '',
          unity: '',
          coordenator: ''
        },
        main_area: [{ text: 'Selecione', value: null }, 'Meio ambiente', 'Direitos humanos e justiça'],
        second_area: [{ text: 'Selecione', value: null }, 'Meio ambiente', 'Direitos humanos e justiça'],
        modality: [{ text: 'Selecione', value: null }, 'Curso', 'Empresa Jr.', 'Evento', 'Prestação de serviço', 'Programa', 'Projeto'],
        unity: [{ text: 'Selecione', value: null }, 'C3'],
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
    }
  }
</script>
