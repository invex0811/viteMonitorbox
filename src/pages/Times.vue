<template>
  <section class="fill-height">
    <v-row justify="center">
      <v-col cols="6">
        <v-sheet>
          <v-text-field
            label="First date"
            v-model="firstDate"
            variant="outlined"
            hide-details="auto"
          />
          <v-text-field
            label="Second date"
            v-model="secondDate"
            variant="outlined"
            hide-details="auto"
          />
        </v-sheet>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "Times",
  data: () => ({
    firstDate: null,
    secondDate: null,
  }),
  methods: {
   
  },
  computed:{
    
  }

}
</script>

<style scoped>

</style>