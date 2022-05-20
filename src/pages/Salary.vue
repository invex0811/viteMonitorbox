<template>
  <section>
    <div>
<!--      Инпуты            -->
      <v-form>
        <v-row justify="center" no-gutters>
          <v-col cols="8" lg="2" md="4" sm="4" >
            <v-select
                variant="outlined"
                label="Working days"
                hide-details="auto"
                class="mt-3"
                :items="[21,22,23]"
                v-model="workDay"
            />
            <v-text-field
                label="Working time"
                v-model.number="workingTime"
                variant="outlined"
                hide-details="auto"
                class="my-2"
            />
            <v-text-field
                label="Rate"
                v-model.number="rate"
                variant="outlined"
                hide-details="auto"
                class="mb-2"
            />
            <v-text-field
                label="TimeX2"
                v-model.number="timeX2"
                variant="outlined"
                hide-details="auto"
                class="mb-2"
                v-if="input__timeX2"
            />
            <v-text-field
                label="Cash bonus"
                v-model.number="cashBonus"
                variant="outlined"
                hide-details="auto"
                class="mb-2"
                v-if="input__cashBonus"
            />
            <v-text-field
                label="Dollar rate"
                v-model.number="dollarRate"
                variant="outlined"
                hide-details="auto"
                class="mb-2"
                v-if="input__dollarExchange"
            />
          </v-col>
        </v-row>
      </v-form>
<!--      Чекбоксы            -->
      <v-row justify="center" no-gutters class="mb-2">
        <v-col cols="2" class="d-flex flex-column align-center">
          <div class="d-flex">
            <v-checkbox
                label="Tax"
                v-model="input__tax"
                hide-details
            />
            <v-checkbox
                label="4% Weekend"
                v-model="input__4percentWeekend"
                hide-details
            />
            <v-checkbox
                label="Dollar exchange"
                v-model="input__dollarExchange"
                hide-details
            />
          </div>
          <v-slide-y-transition>
            <div class="d-flex" v-if="allCheckboxes">
              <v-checkbox
                  label="Rent"
                  v-model="input__rent"
                  hide-details
              />
              <v-checkbox
                  label="TimeX2"
                  v-model="input__timeX2"
                  hide-details
              />
              <v-checkbox
                  label="Cash bonus"
                  v-model="input__cashBonus"
                  hide-details
              />
            </div>
          </v-slide-y-transition>
          <v-btn
            size="x-small"
            variant="outlined"
            @click="allCheckboxes = !allCheckboxes"
          >
            <v-icon
              :icon="allCheckboxes ? 'expand_less' : 'expand_more'"
            />
            <v-tooltip
                activator="parent"
                anchor="end"
            >
              All checkboxes
            </v-tooltip>
          </v-btn>
        </v-col>
      </v-row>
<!--      Общая сумма и подробная таблица         -->
      <v-row justify="center" class="mb-1" no-gutters >
        <v-col cols="10" class="d-flex justify-center align-center">
          Total cash :
          <span v-if="totalMoney>0"> {{ result + ' $' }}</span>

          <span v-if="this.input__dollarExchange"><v-icon>swap_horiz</v-icon>{{
              exchangeMonayToUAH.toFixed(2) + ' UAH'
            }}</span>
          <v-btn size="x-small" class="mx-2" rounded icon color="info" @click="showOverlay = !showOverlay">
            <v-icon>info</v-icon>
            <v-tooltip
                activator="parent"
                anchor="end"
            >
              Detail
            </v-tooltip>
          </v-btn>
          <v-overlay v-model="showOverlay" class="d-flex align-center justify-center">
            <v-table>
              <thead>
              <tr>
                <th class="text-left">
                  Name
                </th>
                <th class="text-left">
                  Money
                </th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Working days:</td>
                <td> {{ workDay }}</td>
              </tr>
              <tr>
                <td>Working day hours:</td>
                <td> {{ workDayTime + ' h' }}</td>
              </tr>
              <tr>
                <td>Working time:</td>
                <td> {{ totalTime + ' h' }}</td>
              </tr>
              <tr>
                <td>Rate:</td>
                <td> {{ rateOutput }} $</td>
              </tr>
              <tr>
                <td>Over rate:</td>
                <td>{{ overRate }} $</td>
              </tr>
              <tr v-if="overTime > 0">
                <td>Over time:</td>
                <td>{{ overTime.toFixed(2) + ' h' }}</td>
              </tr>
              <tr v-if="overTime > 0">
                <td>Over time cash:</td>
                <td>{{ overTimeCash.toFixed(2) }} $</td>
              </tr>
              <tr v-if="input__test">
                <td>Time per test:</td>
                <td>{{ timeTest + ' h' }}</td>
              </tr>
              <tr v-if="input__test">
                <td>Cash per test:</td>
                <td>{{ plusTest }} $</td>
              </tr>
              <tr v-if="input__timeX2">
                <td>TimeX2 cash:</td>
                <td>{{ plusTimeX2 }} $</td>
              </tr>
              <tr v-if="input__dollarExchange">
                <td>5% tax:</td>
                <td>{{ fivePercentTax.toFixed(2) }} ₴</td>
              </tr>
              <tr>
                <td>Total cash:</td>
                <td>{{ result + ' $' }}</td>
              </tr>
              </tbody>

            </v-table>
          </v-overlay>
        </v-col>
      </v-row>
<!--       Кнопки              -->
      <v-row justify="center" no-gutters>
        <v-col cols="1" class="d-flex justify-center">
          <v-btn
              color="success"
              @click="calculateSalary()"
          >
            OK
          </v-btn>
        </v-col>
      </v-row>
<!--       Окно с курсом      -->
      <v-row justify="center" v-if="input__dollarExchange" class="mt-2" no-gutters>
        <v-col cols="10" lg="2" md="4" sm="4">
          <v-card class="pa-3 mx-auto" variant="outlined">
            <v-row >
              <v-col cols="12" class="d-flex justify-center">
                Курс {{ this.valut }} на {{ this.exchangeDate }} : <span
                  class="text-red-darken-4 text-decoration-underline"> {{ infoCurentDollar }}</span>
              </v-col>
              <v-col class="d-flex justify-center">
                <input type="date" v-model="dateForExchenge">
                <v-btn
                    color="success"
                    size="small"
                    @click="setDate"
                >
                  OK
                </v-btn>

                <v-btn
                    class="ml-1"
                    color="primary"
                    size="small"
                    @click="inputCurencyUsdRate()"
                >
                  Apply
                  <v-tooltip
                      activator="parent"
                      anchor="end"
                  >
                    Use this rate
                  </v-tooltip>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
  <router-view/>
</template>

<script>
import axios from 'axios'
import {DateTime} from 'luxon'

export default {
  name: "Salary",
  data: () => ({
    workingTime: '',
    rate: '',
    timeX2: '',
    cashBonus: '',
    dollarRate: '',
    workDay: '',
    allCheckboxes: false,
    showOverlay: false,
    input__tax: true,
    input__4percentWeekend: true,
    input__rent: false,
    input__timeX2: false,
    input__cashBonus: false,
    input__dollarExchange: false,
    totalTime: 0,
    overTime: 0,
    rateOutput: 0, //Для глаза чтобы тоже было ноль если убрать убедт просто пустая строка "не красиво")))
    overRate: 0,
    totalMoney: 0,
    workDayTime: 0,
    dateForExchenge:  null,
    infoCurentDollar: null,
    exchangeDate: null,
    valut: null,
    overTimeCash: 0,
    // axios error
    axiosError: '',
  }),
  mounted() {
    this.dateForExchenge = DateTime.local().toFormat('kkkk' + 'LL' + 'dd')
    axios
        .get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=' + this.dateForExchenge + '&json')
        .then(response => (this.valut = response.data[25].cc, this.infoCurentDollar = response.data[25].rate, this.exchangeDate = response.data[25].exchangedate))
        .catch(error => this.infoCurentDollar = error);
  },
  methods: {
    setDate() {
      this.dateForExchenge = DateTime.fromISO(this.dateForExchenge).toFormat('kkkk' + 'LL' + 'dd')
      axios
          .get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=' + this.dateForExchenge + '&json')
          .then(response => (this.valut = response.data[25].cc, this.infoCurentDollar = response.data[25].rate, this.exchangeDate = response.data[25].exchangedate))
    },
    calculateSalary() {
      this.rateOutput = this.rate                                     // Читать выше для чего эта шляпа
      this.workDayTime = this.workDay * 8
      this.totalTime = this.workingTime
      this.overTime = this.totalTime - this.workDayTime
      this.overRate = this.rate * 1.5
      this.overTimeCash = this.overTime * this.overRate
      if (this.totalTime < this.workDayTime) {
        this.totalMoney = this.totalTime * this.rate
      } else if (this.totalTime >= this.workDayTime) {
        if (this.rate <= 2) {
          this.totalMoney = this.totalTime * this.rate
        } else {
          this.totalMoney = (this.workDayTime * this.rate + (this.overTime * this.overRate))
        }
      }

    },
    inputCurencyUsdRate() {
      this.dollarRate = this.infoCurentDollar
    }
  },
  computed: {
    plus4percentWeekend() {
      return this.totalMoney / 100 * (this.input__4percentWeekend * 4)
    },
    plusTax() {
      return 55 * this.input__tax
    },
    plusRent() {
      return 47 * this.input__rent
    },
    plusTimeX2() {
      return this.timeX2 * ((this.rate * 2) * this.input__timeX2)
    },
    plusCashBonus() {
      return this.cashBonus * this.input__cashBonus
    },
    result() {
      return Math.round(this.totalMoney + (this.plus4percentWeekend + this.plusTax + this.plusRent + this.plusTimeX2 + this.plusCashBonus))
    },
    exchangeMonayToUAH() {
      return this.result * this.dollarRate
    },
    fivePercentTax() {
      return this.exchangeMonayToUAH / 100 * (this.input__dollarExchange * 5);
    }
  },
}
</script>

<style scoped>

</style>