<

<template>
  <v-container>
    <v-row>
      <v-col md="3" sm="6" xs="12" v-for="card in cards" :key="card.title">
        <v-card>
          <v-card-text>
            <v-row align="center" justify="space-between">
              <div>
                <v-subheader>{{ card.title }}</v-subheader>
                <v-text-h4>{{ card.value }}</v-text-h4>
              </div>
              <Chart :type="card.chartType" :data="card.chartData" />
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn text color="primary">
              See all visits
              <v-icon right>mdi-chevron-right</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'; 
import Chart from './Chart.vue'; 
  
export default {
  components: {
    Chart
  },
  computed: {
    ...mapState({
      theme: state => state.theme 
    }),
    cards() {
      return [
        {
          title: 'Impressions',
          value: '1.9M',
          chartType: 'line',
          chartData: [0, 60, 30, 60, 0, 30, 10, 30, 0]
        },
        {
          title: 'Spent',
          value: '$41.2K',
          chartType: 'line',
          chartData: [10, 20, 30, 40, 50, 60, 5]
        },
        {
          title: 'Engagements',
          value: '36.6K',
          chartType: 'line',
          chartData: [0, 30, 15, 30, 0, 15, 5, 15, 0]
        },
        {
          title: 'Conversions',
          value: '131.3K',
          chartType: 'bar',
          chartData: [10, 20, 30, 40, 50, 60, 5]
        }
      ];
    }
  }
};
</script>


// Style scoped
<style scoped>
  
</style>
