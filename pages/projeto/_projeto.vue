<template>
  <div>
    <div class="header-index">
        <div>
          <a href="https://www.furg.br/" target="_blank">
            <img src="../../assets/img/logofurg.png" alt="Logo da FURG" title="Logo da FURG"></img>
          </a>
        </div>
        <div>
          <a href="/login" class="btn">Login</a>
        </div>
      </div>
    <div class="project">
      <div class="project-back-page">
        <a href="/">
          < Voltar
        </a>
      </div>
      <b-container class="project-container">
        <div>
          <b-row>
            <b-col sm="6" cols="6" class="project-label-info">
              Título do projeto
            </b-col>
            <b-col sm="6" cols="6">
              {{ projeto.title }}
            </b-col>
          </b-row>
        </div>

        <div>
          <b-row>
            <b-col sm="6" cols="6" class="project-label-info">
              Centro
            </b-col>
            <b-col sm="6" cols="6">
              {{ projeto.extensionCenter }}
            </b-col>
          </b-row>
        </div>

        <div>
          <b-row>
            <b-col sm="6" cols="6" class="project-label-info">
              Unidade de Ação de Extensão
            </b-col>
            <b-col sm="6" cols="6">
              {{ projeto.unity }}
            </b-col>
          </b-row>
        </div>

        <div>
          <b-row>
            <b-col sm="6" cols="6" class="project-label-info">
              Modalidade
            </b-col>
            <b-col sm="6" cols="6">
              {{ projeto.modality }}
            </b-col>
          </b-row>
        </div>

        <div>
          <b-row>
            <b-col sm="6" cols="6" class="project-label-info">
              Área Temática Principal
            </b-col>
            <b-col sm="6" cols="6">
              {{ projeto.mainArea }}
            </b-col>
          </b-row>
        </div>

        <div>
          <b-row>
            <b-col sm="6" cols="6" class="project-label-info">
              Área Temática Secundária
            </b-col>
            <b-col sm="6" cols="6">
              {{ projeto.secondArea }}
            </b-col>
          </b-row>
        </div>

        <div>
          <b-row>
            <b-col sm="6" cols="6" class="project-label-info">
              Objetivos de Desenvolvimento Sustentável
            </b-col>
            <b-col sm="6" cols="6">
              {{ projeto.sustainableGoals }}
            </b-col>
          </b-row>
        </div>

        <div>
          <b-row>
            <b-col sm="6" cols="6" class="project-label-info">
              Objetivos de Desenvolvimento Sustentável
            </b-col>
            <b-col sm="6" cols="6">
              {{ projeto.sustainableGoals }}
            </b-col>
          </b-row>
        </div>

        <div>
          <b-row>
            <b-col sm="6" cols="6" class="project-label-info">
              Objetivos gerais
            </b-col>
            <b-col sm="6" cols="6">
              {{ projeto.goals }}
            </b-col>
          </b-row>
        </div>

        <div>
          <b-row>
            <b-col sm="6" cols="6" class="project-label-info">
              Coordenador responsável
            </b-col>
            <b-col sm="6" cols="6">
              {{ projeto.coordinatorName }}
            </b-col>
          </b-row>
        </div>

        <div>
          <b-row>
            <b-col sm="6" cols="6" class="project-label-info">
              Resumo
            </b-col>
            <b-col sm="6" cols="6">
              {{ projeto.abstract }}
            </b-col>
          </b-row>
        </div>

        <div>
          <b-row>
            <b-col sm="6" cols="6" class="project-label-info">
              Metodologia
            </b-col>
            <b-col sm="6" cols="6">
              {{ projeto.methodology }}
            </b-col>
          </b-row>
        </div>

        <div>
          <b-row>
            <b-col sm="6" cols="6" class="project-label-info">
              Contato
            </b-col>
            <b-col sm="6" cols="6">
              {{ projeto.contactEmail }}
            </b-col>
          </b-row>
        </div>

        <div>
          <b-row>
            <b-col sm="6" cols="6" class="project-label-info">
              Data de início
            </b-col>
            <b-col sm="6" cols="6">
              {{ projeto.startDate }}
            </b-col>
          </b-row>
        </div>

        <div>
          <b-row>
            <b-col sm="6" cols="6" class="project-label-info">
              Data de fim
            </b-col>
            <b-col sm="6" cols="6">
              {{ projeto.endDate }}
            </b-col>
          </b-row>
        </div>

        <div>
          <b-row>
            <b-col sm="6" cols="6" class="project-label-info">
              Carga horária
            </b-col>
            <b-col sm="6" cols="6">
              {{ projeto.workload }}
            </b-col>
          </b-row>
        </div>

        <div>
          <b-row>
            <b-col sm="6" cols="6" class="project-label-info">
              Endereço
            </b-col>
            <b-col sm="6" cols="6">
              {{ projeto.address }}
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
    head() {
        return {
          title: 'Projeto',
        }
    },
    async asyncData({params, query, res, $axios, req, app, error, store}) {
      try {
        let projeto = {}
        await $axios.$get(`/projetos/${params.projeto}`).then((res) => {
          if (res) {
            projeto = res
          }
        })
        return {
          projeto: projeto,
        }
      } catch (e) {
        console.log(e)
      }
    }
}
</script>
