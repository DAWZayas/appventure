<template>
  <tournaments-pagination :arrayTournaments="tournaments"></tournaments-pagination>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { getArray } from '~/utils/utils'
  import speakingurl from 'speakingurl'
  import { TournamentsPagination } from '~/components/tournaments/pagination'

  export default {
    components: { TournamentsPagination },
    computed: {
      ...mapGetters({ tm: 'getTournaments' }),
      tournaments () {
        var tournaments = {}
        var query = this.$route.query.q.split('-')

        for (var t in this.tm) {
          var lok = this.tm[t]['location']
          var inf = this.tm[t]['description'] + ' ' +
                    this.tm[t]['name'] + ' ' +
                    this.tm[t]['category'] + ' ' +
                    this.tm[t]['subCategory'] + ' ' +
                    lok['administrative_area_level_1'] + ' ' +
                    lok['country'] + ' ' + lok['locality'] + ' ' +
                    lok['name'] + ' ' +
                    lok['route']

          for (let i = 0; i < query.length; i++) {
            speakingurl(inf).search(query[i]) > -1
              ? tournaments[t] ? null : tournaments[t] = this.tm[t]
              : null
          }
        }

        return getArray(tournaments).reverse()
      }
    }
  }
</script>
