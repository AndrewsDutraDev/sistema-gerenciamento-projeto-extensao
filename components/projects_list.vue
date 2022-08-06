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
    <div v-for="project in projects" :key="project.id">
      <a href="" class="project-link">
        <b-row>
          <b-col sm="2">
            {{ project.name }}
          </b-col>
          <b-col sm="2" class="mobile-none">
            {{ project.cordinator_name }}
          </b-col>
          <b-col sm="2" class="mobile-none">
            {{ project.cordinator_email }}
          </b-col>
          <b-col sm="2">
            {{ project.center }}
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
        projects: [
          {
            id: 1,
            name: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
            cordinator_name: 'Lorem Ipsum de Ipsum',
            cordinator_email: 'lorem@ipsum.com',
            center: 'Lorem Ipsum de Ipsum',
            unity: 'Lorem Ipsum de Ipsum',
            modality: 'Ipsum'
          },
          {
            id: 2,
            name: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
            cordinator_name: 'Lorem Ipsum de Ipsum',
            cordinator_email: 'lorem@ipsum.com',
            center: 'Lorem Ipsum de Ipsum',
            unity: 'Lorem Ipsum de Ipsum',
            modality: 'Ipsum'
          },
          {
            id: 3,
            name: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
            cordinator_name: 'Lorem Ipsum de Ipsum',
            cordinator_email: 'lorem@ipsum.com',
            center: 'Lorem Ipsum de Ipsum',
            unity: 'Lorem Ipsum de Ipsum',
            modality: 'Ipsum'
          },
          {
            id: 4,
            name: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
            cordinator_name: 'Lorem Ipsum de Ipsum',
            cordinator_email: 'lorem@ipsum.com',
            center: 'Lorem Ipsum de Ipsum',
            unity: 'Lorem Ipsum de Ipsum',
            modality: 'Ipsum'
          },
          {
            id: 5,
            name: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
            cordinator_name: 'Lorem Ipsum de Ipsum',
            cordinator_email: 'lorem@ipsum.com',
            center: 'Lorem Ipsum de Ipsum',
            unity: 'Lorem Ipsum de Ipsum',
            modality: 'Ipsum'
          },
          {
            id: 6,
            name: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
            cordinator_name: 'Lorem Ipsum de Ipsum',
            cordinator_email: 'lorem@ipsum.com',
            center: 'Lorem Ipsum de Ipsum',
            unity: 'Lorem Ipsum de Ipsum',
            modality: 'Ipsum'
          },
          {
            id: 7,
            name: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
            cordinator_name: 'Lorem Ipsum de Ipsum',
            cordinator_email: 'lorem@ipsum.com',
            center: 'Lorem Ipsum de Ipsum',
            unity: 'Lorem Ipsum de Ipsum',
            modality: 'Ipsum'
          },
          {
            id: 8,
            name: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
            cordinator_name: 'Lorem Ipsum de Ipsum',
            cordinator_email: 'lorem@ipsum.com',
            center: 'Lorem Ipsum de Ipsum',
            unity: 'Lorem Ipsum de Ipsum',
            modality: 'Ipsum'
          },
          {
            id: 9,
            name: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
            cordinator_name: 'Lorem Ipsum de Ipsum',
            cordinator_email: 'lorem@ipsum.com',
            center: 'Lorem Ipsum de Ipsum',
            unity: 'Lorem Ipsum de Ipsum',
            modality: 'Ipsum'
          },
        ]
      }
    },
    methods: {

    }
  }
</script>

