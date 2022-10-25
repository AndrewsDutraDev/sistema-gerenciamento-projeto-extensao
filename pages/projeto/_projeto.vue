<template>
  <div>{{ projeto }}</div>
</template>

<script>
export default {
    head() {
        return {
          title: 'Projeto',
        }
    },
    async asyncData({params, query, res, $axios, req, app, error, $wdmerge, store}) {
      console.log(params.projeto)
      try {
        let projeto = {}
        await $axios.$get(`/projetos/${params.projeto}`).then((res) => {
          console.log(res)
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
