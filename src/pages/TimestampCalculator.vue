<template>
  <section>
    <v-row justify="center" no-gutters>
      <v-col cols="8" lg="2" md="4" sm="4">
        <v-text-field hide-details label="Fist time" variant="outlined" class="mt-3" v-model="firstTime" />
        <v-text-field hide-details label="Second time" variant="outlined" class="my-2" v-model="secondTime" />
      </v-col>
      <v-col v-if="showTEHcompare"  cols="8" lg="2" md="4" sm="4" class="ml-2">
        <v-text-field hide-details label="First TEH" variant="outlined" class="mt-3" v-model="firstTEH"/>
        <v-text-field hide-details label="Second TEH" variant="outlined" class="my-2" v-model="secondTEH"/>
      </v-col>
    </v-row>
    <v-row justify="center" no-gutters>
      <v-col cols="2" class="d-flex flex-column align-center" >
        <v-checkbox label="Compare with TEH" hide-details v-model="showTEHcompare"/>
      </v-col>
    </v-row>
    <v-row justify="center" no-gutters >
      {{`Timestamp: ${timeResult} `}}<span v-if="showTEHcompare"> <span class="pl-1 text-purple">{{`${operation}`}}</span> {{`TEH: ${TEHResult}`}}</span>
    </v-row>
    <v-row justify="center" no-gutters>
      <v-col cols="1" class="d-flex justify-center">
        <v-btn class="my-2" color="success" size="small" @click="calcTime">Result</v-btn>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { DateTime } from "luxon";


export default {
  name: "TimestampCalculator",
  data: ()=> ({
    firstTime: null,
    secondTime: null,
    result: null,
    firstTEH: null,
    secondTEH: null,
    showTEHcompare: false,
    timeResult: 0,
    TEHResult: 0,
    operation: ' | ',
  }),
  methods:{
    calcTime(){
      let newDate = DateTime.fromFormat(this.firstTime, 'dd-MMM-yyyy HH:mm:ss')
      let newDate2 = DateTime.fromFormat(this.secondTime, 'dd-MMM-yyyy HH:mm:ss')

      let diff = newDate.diff(newDate2,['hours','minutes','seconds']).toObject()
      console.log(diff)
      this.timeResult = diff.hours + 'h ' + diff.minutes + 'm ' + diff.seconds + 's '
      console.log(this.timeResult)
      if (this.showTEHcompare === true){
        let minutes, hours
        function recalcTEH(teh){
          minutes = Math.trunc((teh % 1) * 60)
          hours = Math.trunc(teh)
          return hours + 'h ' + minutes + 'm'
        }
        console.log('tehtime ' + recalcTEH(this.firstTEH))
        this.TEHResult = this.firstTEH - this.secondTEH
        this.TEHResult = recalcTEH(this.TEHResult)

        if(diff.hours > hours){
          this.operation = ' > '
        } else if (diff.hours < hours){
          this.operation = ' < '
        } else if (diff.hours === hours) {
          if (diff.minutes > minutes){
            this.operation = ' > '
          }else if (diff.minutes < minutes){
            this.operation = ' < '
          }else if (diff.minutes === minutes){
            this.operation = ' = '
          }


        }
      }
    }
  }
}
</script>

<style scoped>

</style>