<template>
  <section class="fill-height pt-5">
    <v-row justify="center">
      <v-col cols="6">
          <v-row justify="center">
            <v-col cols="3" class="d-flex align-center">
              <v-text-field
                label="First date"
                v-model="firstDate"
                variant="outlined"
                hide-details="auto"
              />
            </v-col>
            <v-col cols="3">
              <v-text-field
                label="Second date"
                v-model="secondDate"
                variant="outlined"
                hide-details="auto"
              />
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="1">
              <v-btn @click="minusTime()" color="success">OK</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{result}}
            </v-col>
          </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import {DateTime} from 'luxon'
export default {
  name: "Times",
  data: () => ({
    firstDate: null,
    secondDate: null,
    result: null,
  }),
  methods: {
    minusTime(){
      this.result = DateTime.fromObject({year: this.firstDate[8]+this.firstDate[9]+this.firstDate[10]+this.firstDate[11]}).diff(DateTime.fromObject({year: this.secondDate[8]+this.secondDate[9]+this.secondDate[10]+this.secondDate[11]})).toObject(year)
      console.log("1");
    }
  },
  computed:{
    
  }

}
</script>

<style scoped>

</style>